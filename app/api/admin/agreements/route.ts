import { NextResponse } from 'next/server'
import { randomBytes } from 'node:crypto'
import { Resend } from 'resend'
import { z } from 'zod'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getAdminEmail } from '@/lib/admin-auth'

const offerSchema = z.object({
  applicationId: z.string().uuid(),
  offeredPosition: z.enum(['Automotive Service Technician', 'General Service Technician', 'Master Mechanic', 'Diesel Mechanic', 'Heavy Equipment Mechanic', 'Maintenance Technician']),
  startDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  hourlyWage: z.coerce.number().min(25).max(45),
})

export async function POST(request: Request) {
  if (!(await getAdminEmail())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const parsed = offerSchema.safeParse(await request.json())
  if (!parsed.success) return NextResponse.json({ error: 'Select a position, enter a valid start date, and enter an hourly wage from $25.00 to $45.00.' }, { status: 400 })
  const { applicationId, offeredPosition, startDate, hourlyWage } = parsed.data
  const start = new Date(`${startDate}T00:00:00Z`)
  if (Number.isNaN(start.getTime())) return NextResponse.json({ error: 'Enter a valid start date.' }, { status: 400 })

  const supabase = createServerSupabaseClient()
  const { data: application } = await supabase.from('applications').select('id,full_name,email,position').eq('id', applicationId).maybeSingle()
  if (!application) return NextResponse.json({ error: 'Application not found.' }, { status: 404 })
  const { data: existing } = await supabase.from('agreements').select('signed_at').eq('id', application.id).maybeSingle()
  if (existing?.signed_at) return NextResponse.json({ error: 'This candidate has already signed an agreement. Create a formal amendment instead of replacing it.' }, { status: 409 })

  const token = randomBytes(32).toString('hex')
  const { error } = await supabase.from('agreements').upsert({
    id: application.id,
    token,
    offered_position: offeredPosition,
    start_date: startDate,
    hourly_wage: hourlyWage,
    terms_version: '2026-09-07-v2',
    created_at: new Date().toISOString(),
    signed_at: null,
    signature_name: null,
    ip_address: null,
    user_agent: null,
  }, { onConflict: 'id' })
  if (error) { console.error('[agreement-create] database error', error.message); return NextResponse.json({ error: 'Unable to create agreement. Confirm the agreement database update has been installed.' }, { status: 500 }) }

  const url = `${new URL(request.url).origin}/agreement/${token}`
  const formattedStart = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(start)
  const from = `On The Spot Recruiting <recruiting@${process.env.RESEND_EMAIL_DOMAIN || 'onthespotrepairservicestires.com'}>`
  const sent = await new Resend(process.env.RESEND_API_KEY).emails.send({
    from, to: [application.email], subject: 'On The Spot Repair Services & Tires Inc — Please Review Your Employment Agreement',
    text: `Hi ${application.full_name},

Congratulations! On The Spot Repair Services & Tires Inc would like to offer you the ${offeredPosition} position.

Proposed start date: ${formattedStart}
Hourly wage: $${hourlyWage.toFixed(2)} per hour

Please review and electronically sign your agreement here:
${url}

This link expires in 7 days. If you have any questions, call or text us at 478-244-7008.

Best,
On The Spot Repair Team
On The Spot Repair Services & Tires Inc
990 2nd Street
Unadilla, GA 31091`,
  }, { idempotencyKey: `agreement/${application.id}/${token}` })
  if (sent.error) return NextResponse.json({ error: 'Agreement created, but email could not be sent.' }, { status: 502 })
  await supabase.from('applications').update({ status: 'Agreement Sent' }).eq('id', application.id)
  return NextResponse.json({ ok: true, url })
}
