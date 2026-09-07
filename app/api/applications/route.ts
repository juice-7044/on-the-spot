import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import { applicationSchema } from '@/lib/recruiting'
import { getRecruitingEmailConfig } from '@/lib/recruiting-email'

export const runtime = 'nodejs'

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
})[character] ?? character)

const safeResumeFilename = (fullName: string) => {
  const name = fullName.replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-|-$/g, '') || 'Applicant'
  return `${name}-Resume.pdf`
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const parsed = applicationSchema.safeParse({
      fullName: formData.get('fullName'), phone: formData.get('phone'), email: formData.get('email'),
      experienceYears: formData.get('experienceYears'), position: formData.get('position'),
      hasTools: formData.get('hasTools') === 'true', hasCdl: formData.get('hasCdl') === 'true',
      startDate: formData.get('startDate') || undefined, reference1Name: formData.get('reference1Name') || undefined, smsConsent: formData.get('smsConsent') === 'true', submissionKey: formData.get('submissionKey') || undefined,
      reference1Phone: formData.get('reference1Phone') || undefined, reference2Name: formData.get('reference2Name') || undefined,
      reference2Phone: formData.get('reference2Phone') || undefined, message: formData.get('message') || undefined,
    })
    if (!parsed.success) return NextResponse.json({ error: 'Please review the highlighted application fields.' }, { status: 400 })

    const supabase = createServerSupabaseClient()
    if (formData.get('website')) return NextResponse.json({ ok: true })
    if (parsed.data.submissionKey) {
      const existing = await supabase.from('applications').select('id').eq('submission_key', parsed.data.submissionKey).maybeSingle()
      if (existing.data?.id) return NextResponse.json({ ok: true, id: existing.data.id, duplicate: true })
    }
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
      message: parsed.data.message || null, sms_consent: parsed.data.smsConsent, submission_key: parsed.data.submissionKey || null,
    }).select('id').single()
    if (error || !data) return NextResponse.json({ error: 'We could not save your application. Please call us directly.' }, { status: 500 })

    const resend = new Resend(process.env.RESEND_API_KEY)
    const emailConfig = getRecruitingEmailConfig()
    const from = `On The Spot Hiring <${emailConfig.from}>`
    const adminUrl = 'https://www.onthespotrepairservicestires.com/admin'
    const value = (input: string | number | null | undefined) => escapeHtml(String(input ?? 'Not provided'))
    const resumeNotice = 'A résumé was uploaded but could not be attached. Open the hiring dashboard to review the application.'
    let resumeAttachment: { filename: string; content: Buffer } | undefined
    let resumeAttachmentFailed = false

    if (resumeUrl) {
      const download = await supabase.storage.from('resumes').download(resumeUrl)
      if (download.error || !download.data) {
        resumeAttachmentFailed = true
        console.error('[v0] resume attachment download failed')
      } else {
        const bytes = Buffer.from(await download.data.arrayBuffer())
        const isPdf = bytes.length >= 4 && bytes.subarray(0, 4).toString('ascii') === '%PDF'
        if (bytes.length > 5 * 1024 * 1024 || !isPdf) {
          resumeAttachmentFailed = true
          console.error('[v0] resume attachment validation failed')
        } else {
          resumeAttachment = { filename: safeResumeFilename(parsed.data.fullName), content: bytes }
        }
      }
    }

    const references = `${value(parsed.data.reference1Name)} — ${value(parsed.data.reference1Phone)}<br />${value(parsed.data.reference2Name)} — ${value(parsed.data.reference2Phone)}`
    const ownerHtml = `<h1>New job application</h1><p>A new candidate application has been submitted.</p><table><tr><td><strong>Applicant</strong></td><td>${value(parsed.data.fullName)}</td></tr><tr><td><strong>Phone</strong></td><td>${value(parsed.data.phone)}</td></tr><tr><td><strong>Email</strong></td><td>${value(parsed.data.email)}</td></tr><tr><td><strong>Position</strong></td><td>${value(parsed.data.position)}</td></tr><tr><td><strong>Experience</strong></td><td>${value(parsed.data.experienceYears)} years</td></tr><tr><td><strong>Own tools</strong></td><td>${parsed.data.hasTools ? 'Yes' : 'No'}</td></tr><tr><td><strong>CDL</strong></td><td>${parsed.data.hasCdl ? 'Yes' : 'No'}</td></tr><tr><td><strong>Earliest start</strong></td><td>${value(parsed.data.startDate)}</td></tr><tr><td><strong>References</strong></td><td>${references}</td></tr><tr><td><strong>Additional message</strong></td><td>${value(parsed.data.message)}</td></tr><tr><td><strong>SMS consent</strong></td><td>${parsed.data.smsConsent ? 'Yes' : 'No'}</td></tr></table>${resumeAttachmentFailed ? `<p>${resumeNotice}</p>` : ''}<p><a href="${adminUrl}">Open Hiring Dashboard</a></p>`
    const ownerPayload = { from, to: [emailConfig.owner], replyTo: emailConfig.replyTo, subject: `New Job Application — ${parsed.data.fullName} / ${parsed.data.position}`, html: ownerHtml, text: `A new application has been submitted for ${parsed.data.position}. Open the hiring dashboard: ${adminUrl}`, ...(resumeAttachment ? { attachments: [resumeAttachment] } : {}) }
    const internal = await resend.emails.send(ownerPayload, { idempotencyKey: `application/internal/${data.id}` })
    if (internal.error) console.error('[v0] owner application email failed')

    const candidate = await resend.emails.send({ from, to: [parsed.data.email], replyTo: emailConfig.replyTo, subject: 'Application received — On The Spot Repair', text: `Thanks ${parsed.data.fullName}. We received your application and will review it shortly.` }, { idempotencyKey: `application/candidate/${data.id}` })
    if (candidate.error) console.error('[v0] applicant confirmation email failed')
    console.info('[v0] application notification status', { owner: !internal.error, applicant: !candidate.error, resumeAttached: Boolean(resumeAttachment) })
    return NextResponse.json({ ok: true, id: data.id })
  } catch (error) {
    console.error('[v0] application submission failed', error)
    return NextResponse.json({ error: 'Something went wrong. Please try again or call us directly.' }, { status: 500 })
  }
}
