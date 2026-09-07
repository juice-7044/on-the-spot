import { NextResponse } from 'next/server'
import { randomBytes } from 'node:crypto'
import { Resend } from 'resend'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getAdminEmail } from '@/lib/admin-auth'
import { getRecruitingEmailConfig } from '@/lib/recruiting-email'

export async function POST(request: Request) {
  if (!(await getAdminEmail())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const { applicationId } = await request.json()
  if (typeof applicationId !== 'string') return NextResponse.json({ error: 'Invalid application.' }, { status: 400 })
  const supabase = createServerSupabaseClient()
  const { data: application } = await supabase.from('applications').select('id,full_name,email,position').eq('id', applicationId).maybeSingle()
  if (!application) return NextResponse.json({ error: 'Application not found.' }, { status: 404 })
  const token = randomBytes(32).toString('hex')
  const { error } = await supabase.from('agreements').upsert({ id: application.id, token }, { onConflict: 'id' })
  if (error) return NextResponse.json({ error: 'Unable to create agreement.' }, { status: 500 })
  const url = `${new URL(request.url).origin}/agreement/${token}`
  const recruiting = getRecruitingEmailConfig()
  const from = `On The Spot Hiring <${recruiting.from}>`
  const sent = await new Resend(process.env.RESEND_API_KEY).emails.send({ from, to: [application.email], replyTo: recruiting.replyTo, subject: 'On The Spot Repair — Please Sign Your Employment Agreement', text: `Hi ${application.full_name},

Congratulations! We'd like to move forward with your application for the ${application.position} position at On The Spot Repair Service & Tires.
Please review and sign your employment agreement here:
${url}
This link expires in 7 days.
If you have any questions, call or text us at 478-244-7008.

Best,
On The Spot Repair Team
On The Spot Repair Service & Tires
Unadilla, GA` }, { idempotencyKey: `agreement/${application.id}/${token}` })
  if (sent.error) return NextResponse.json({ error: 'Agreement created, but email could not be sent.' }, { status: 502 })
  await supabase.from('applications').update({ status: 'Agreement Sent' }).eq('id', application.id)
  return NextResponse.json({ ok: true, url })
}
