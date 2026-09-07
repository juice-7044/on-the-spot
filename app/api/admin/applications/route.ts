import { NextResponse } from 'next/server'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { getAdminEmail } from '@/lib/admin-auth'

export async function GET() {
  if (!(await getAdminEmail())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const supabase = createServerSupabaseClient()
  const { data, error } = await supabase.from('applications').select('*').order('created_at', { ascending: false })
  if (error) return NextResponse.json({ error: 'Unable to load applications.' }, { status: 500 })
  return NextResponse.json({ applications: data ?? [] })
}

export async function PATCH(request: Request) {
  if (!(await getAdminEmail())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const body = await request.json()
  if (typeof body.id !== 'string' || typeof body.status !== 'string') return NextResponse.json({ error: 'Invalid update.' }, { status: 400 })
  const allowed = ['New', 'Under Review', 'Accepted', 'Agreement Sent', 'Signed', 'Hired', 'Rejected']
  if (!allowed.includes(body.status)) return NextResponse.json({ error: 'Invalid status.' }, { status: 400 })
  const supabase = createServerSupabaseClient()
  const { data: application, error } = await supabase.from('applications').update({ status: body.status, notes: typeof body.notes === 'string' ? body.notes.slice(0, 5000) : undefined }).eq('id', body.id).select('full_name,email,position').maybeSingle()
  if (error || !application) return NextResponse.json({ error: 'Unable to update application.' }, { status: 500 })
  if (body.status === 'Rejected') {
    const sent = await new (await import('resend')).Resend(process.env.RESEND_API_KEY).emails.send({ from: `On The Spot Repair <onthespot@${process.env.RESEND_EMAIL_DOMAIN || 'onthespotrepairservicestires.com'}>`, to: [application.email], subject: 'Update on Your Application — On The Spot Repair Service & Tires', text: `Hi ${application.full_name},
Thank you for your interest in joining On The Spot Repair Service & Tires and for taking the time to apply.
After careful review, we have decided to move forward with another candidate for the ${application.position} role. This was not an easy decision — we received many strong applications.
We will keep your information on file for future openings and encourage you to check back with us.
We wish you the best in your job search and career.

Sincerely,
On The Spot Repair Team
On The Spot Repair Service & Tires
Unadilla, GA
478-244-7008` }, { idempotencyKey: `application/rejected/${body.id}` })
    if (sent.error) console.error('[v0] rejection email failed', sent.error.message)
  }
  return NextResponse.json({ ok: true })
}
