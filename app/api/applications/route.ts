import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { applicationSchema } from '@/lib/recruiting'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const parsed = applicationSchema.safeParse({
      fullName: formData.get('fullName'), phone: formData.get('phone'), email: formData.get('email'),
      experienceYears: formData.get('experienceYears'), position: formData.get('position'),
      hasTools: formData.get('hasTools') === 'true', hasCdl: formData.get('hasCdl') === 'true',
      startDate: formData.get('startDate') || undefined, reference1Name: formData.get('reference1Name') || undefined,
      reference1Phone: formData.get('reference1Phone') || undefined, reference2Name: formData.get('reference2Name') || undefined,
      reference2Phone: formData.get('reference2Phone') || undefined, message: formData.get('message') || undefined,
    })
    if (!parsed.success) return NextResponse.json({ error: 'Please review the highlighted application fields.' }, { status: 400 })

    const supabase = createServerSupabaseClient()
    const file = formData.get('resume')
    let resumeUrl: string | null = null
    if (file instanceof File && file.size > 0) {
      if (file.size > 5 * 1024 * 1024 || file.type !== 'application/pdf' || !file.name.toLowerCase().endsWith('.pdf')) {
        return NextResponse.json({ error: 'Resume must be a PDF under 5MB.' }, { status: 400 })
      }
      const path = `${crypto.randomUUID()}-${file.name.replace(/[^a-zA-Z0-9._-]/g, '')}`
      const upload = await supabase.storage.from('resumes').upload(path, file, { contentType: file.type, upsert: false })
      if (upload.error) return NextResponse.json({ error: 'Resume upload failed. Please try again.' }, { status: 500 })
      resumeUrl = path
    }

    const { data, error } = await supabase.from('applications').insert({
      full_name: parsed.data.fullName, phone: parsed.data.phone, email: parsed.data.email,
      experience_years: parsed.data.experienceYears, position: parsed.data.position,
      has_tools: parsed.data.hasTools, has_cdl: parsed.data.hasCdl, start_date: parsed.data.startDate || null,
      resume_url: resumeUrl, reference_1_name: parsed.data.reference1Name || null, reference_1_phone: parsed.data.reference1Phone || null,
      reference_2_name: parsed.data.reference2Name || null, reference_2_phone: parsed.data.reference2Phone || null,
      message: parsed.data.message || null,
    }).select('id').single()
    if (error || !data) return NextResponse.json({ error: 'We could not save your application. Please call us directly.' }, { status: 500 })

    const resend = new Resend(process.env.RESEND_API_KEY)
    const from = `On The Spot Recruiting <recruiting@${process.env.RESEND_EMAIL_DOMAIN || 'onthespotrepairservicestires.com'}>`
    const adminUrl = `${new URL(request.url).origin}/admin/applications/${data.id}`
    const internal = await resend.emails.send({ from, to: ['onthespotrepair23@gmail.com'], subject: `New Job Application — ${parsed.data.fullName} / ${parsed.data.position}`, text: `A new application has been submitted.
Name: ${parsed.data.fullName}
Phone: ${parsed.data.phone}
Email: ${parsed.data.email}
Position: ${parsed.data.position}
Experience: ${parsed.data.experienceYears} years
Has Tools: ${parsed.data.hasTools ? 'Yes' : 'No'}
CDL: ${parsed.data.hasCdl ? 'Yes' : 'No'}
Start Date: ${parsed.data.startDate || 'Not provided'}
Message: ${parsed.data.message || 'None'}
Reference 1: ${parsed.data.reference1Name || 'None'} — ${parsed.data.reference1Phone || 'n/a'}
Reference 2: ${parsed.data.reference2Name || 'None'} — ${parsed.data.reference2Phone || 'n/a'}
Resume: ${resumeUrl || 'Not provided'}
View application: ${adminUrl}` }, { idempotencyKey: `application/internal/${data.id}` })
    const candidate = await resend.emails.send({ from, to: [parsed.data.email], subject: 'Application received — On The Spot Repair', text: `Thanks ${parsed.data.fullName}. We received your application and will review it shortly.` }, { idempotencyKey: `application/candidate/${data.id}` })
    if (internal.error || candidate.error) console.error('[v0] application email failed', internal.error?.message || candidate.error?.message)
    return NextResponse.json({ ok: true, id: data.id })
  } catch (error) {
    console.error('[v0] application submission failed', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again or call us directly.' }, { status: 500 })
  }
}
