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
  const { data: application, error } = await supabase.from('applications').update({ status: body.status, notes: typeof body.notes === 'string' ? body.notes.slice(0, 5000) : undefined }).eq('id', body.id).select('full_name,email').maybeSingle()
  if (error || !application) return NextResponse.json({ error: 'Unable to update application.' }, { status: 500 })
  if (body.status === 'Rejected') {
    const sent = await new (await import('resend')).Resend(process.env.RESEND_API_KEY).emails.send({ from: `On The Spot Repair <onthespot@${process.env.RESEND_EMAIL_DOMAIN || 'onthespotrepairservicestires.com'}>`, to: [application.email], subject: 'Update on Your Application — On The Spot Repair', text: `Hi ${application.full_name},\n\nThank you for your interest in joining On The Spot Repair. After careful consideration, we are moving forward with another candidate for this position. We appreciate your time and wish you the best in your search.` }, { idempotencyKey: `application/rejected/${body.id}` })
    if (sent.error) console.error('[v0] rejection email failed', sent.error.message)
  }
  return NextResponse.json({ ok: true })
}
