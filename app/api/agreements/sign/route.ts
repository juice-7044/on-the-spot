import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createServerSupabaseClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  const { token, signatureName } = await request.json()
  if (typeof token !== 'string' || typeof signatureName !== 'string' || signatureName.trim().length < 2) return NextResponse.json({ error: 'A valid signature is required.' }, { status: 400 })
  const supabase = createServerSupabaseClient()
  const { data: agreement } = await supabase.from('agreements').select('id,signed_at,created_at,start_date,hourly_wage,offered_position,terms_version').eq('token', token).maybeSingle()
  if (!agreement || Date.now() - new Date(agreement.created_at).getTime() > 7 * 24 * 60 * 60 * 1000) return NextResponse.json({ error: 'This agreement link is invalid or expired.' }, { status: 404 })
  if (agreement.signed_at) return NextResponse.json({ error: 'This agreement has already been signed.' }, { status: 409 })
  const { data: application } = await supabase.from('applications').select('full_name,email,position').eq('id', agreement.id).single()
  const { error } = await supabase.from('agreements').update({ signed_at: new Date().toISOString(), signature_name: signatureName.trim(), ip_address: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null, user_agent: request.headers.get('user-agent') || null }).eq('id', agreement.id)
  if (error || !application) return NextResponse.json({ error: 'Unable to save your signature.' }, { status: 500 })
  await supabase.from('applications').update({ status: 'Signed' }).eq('id', agreement.id)
  const from = `On The Spot Recruiting <recruiting@${process.env.RESEND_EMAIL_DOMAIN || 'onthespotrepairservicestires.com'}>`
  const email = await new Resend(process.env.RESEND_API_KEY).emails.send({ from, to: [application.email, 'onthespotrepair23@gmail.com'], subject: `Agreement Signed — ${application.full_name} / ${agreement.offered_position}`, text: `A signed employment agreement has been submitted.
Name: ${application.full_name}
Position: ${agreement.offered_position}
Start date: ${agreement.start_date}
Hourly wage: $${Number(agreement.hourly_wage).toFixed(2)} per hour
Agreement version: ${agreement.terms_version}
Signed at: ${new Date().toISOString()}
Signature name: ${signatureName.trim()}` }, { idempotencyKey: `agreement-signed/${agreement.id}` })
  if (email.error) console.error('[v0] agreement confirmation email failed', email.error.message)
  return NextResponse.json({ ok: true })
}
