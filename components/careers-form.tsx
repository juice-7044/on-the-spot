'use client'

import { FormEvent, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, CheckCircle2, Upload } from 'lucide-react'

const inputClass = 'mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'
const steps = ['About you', 'Your experience', 'Availability', 'Review']

export default function CareersForm() {
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState<Record<string, string | boolean>>({})
  const [submissionKey] = useState(() => crypto.randomUUID())
  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step])

  function validateCurrent(form: HTMLFormElement) {
    const fields = Array.from(form.querySelectorAll('input, select, textarea')) as HTMLInputElement[]
    for (const field of fields) {
      if (step !== steps.length - 1 && field.closest('.hidden') || field.name === 'website' || field.name === 'resume' || field.name === 'message' || field.name === 'reference1Name' || field.name === 'reference1Phone' || field.name === 'reference2Name' || field.name === 'reference2Phone') continue
      if (!field.checkValidity()) { field.reportValidity(); return false }
    }
    return true
  }

  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!validateCurrent(event.currentTarget)) return
    const data = new FormData(event.currentTarget)
    setFormValues(Object.fromEntries(Array.from(data.entries()).filter(([key]) => key !== 'resume').map(([key, value]) => [key, typeof value === 'string' ? value : value.name])))
    setStep((current) => Math.min(current + 1, steps.length - 1))
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('loading'); setError('')
    const form = event.currentTarget
    if (!validateCurrent(form)) { setStatus('idle'); return }
    const data = new FormData(form)
    data.set('submissionKey', submissionKey)
    data.set('hasTools', String(data.get('hasTools') === 'on'))
    data.set('hasCdl', String(data.get('hasCdl') === 'on'))
    data.set('smsConsent', String(data.get('smsConsent') === 'on'))
    const response = await fetch('/api/applications', { method: 'POST', body: data })
    const result = await response.json()
    if (!response.ok) { setError(result.error || 'Please try again.'); setStatus('error'); return }
    form.reset(); setStatus('success')
  }

  if (status === 'success') return <section className="mx-auto max-w-3xl px-6 py-20"><div className="border border-primary/40 bg-card p-10 text-center"><CheckCircle2 className="mx-auto size-12 text-primary" /><h2 className="mt-5 text-3xl font-bold">Application received.</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">Thanks for reaching out. Our team will review your information and contact you if there is a fit.</p></div></section>

  return <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="font-mono text-xs uppercase tracking-[.2em] text-primary">Application intake</p><h2 className="mt-3 text-3xl font-black uppercase tracking-tight">Tell us how you work.</h2><p className="mt-4 leading-7 text-muted-foreground">A few quick questions help our local team understand where you will fit best. You can review everything before sending.</p><div className="mt-8 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">Questions? Call <a className="font-bold text-foreground hover:text-primary" href="tel:+14782447008">478-244-7008</a>.</div></div><form noValidate onSubmit={step === steps.length - 1 ? submit : next} className="border border-border bg-card p-6 md:p-8"><div className="mb-8"><div className="flex items-center justify-between gap-4"><p className="text-xs font-bold uppercase tracking-widest text-primary">Step {step + 1} of {steps.length}</p><p className="text-xs text-muted-foreground">{steps[step]}</p></div><div className="mt-3 h-1 bg-border"><div className="h-full bg-primary transition-all" style={{ width: `${progress}%` }} /></div></div><div className={step === 0 ? 'grid gap-5 md:grid-cols-2' : 'hidden'}><label className="md:col-span-2">Full name<input required name="fullName" className={inputClass} /></label><label>Phone<input required name="phone" type="tel" className={inputClass} /></label><label>Email<input required name="email" type="email" className={inputClass} /></label><label className="md:col-span-2">Position<select required name="position" defaultValue="" className={inputClass}><option value="" disabled>Select a role</option><option>Automotive Mechanic</option><option>Diesel Mechanic</option><option>Tire Technician</option></select></label></div><div className={step === 1 ? 'grid gap-5 md:grid-cols-2' : 'hidden'}><label>Years of experience<input required name="experienceYears" type="number" min="0" max="60" className={inputClass} /></label><label>Resume <span className="text-muted-foreground">(optional)</span><span className={`${inputClass} flex items-center gap-2`}><Upload className="size-4" /><input name="resume" type="file" accept="application/pdf,.pdf" className="min-w-0 text-xs" /></span></label><label className="flex items-center gap-3 border border-border px-4 py-3 text-sm"><input name="hasTools" type="checkbox" className="size-4 accent-primary" /> I have my own tools</label><label className="flex items-center gap-3 border border-border px-4 py-3 text-sm"><input name="hasCdl" type="checkbox" className="size-4 accent-primary" /> I have a CDL</label><label className="md:col-span-2">Anything else we should know?<textarea name="message" rows={4} maxLength={2000} className={inputClass} /></label></div><div className={step === 2 ? 'grid gap-5 md:grid-cols-2' : 'hidden'}><label>Earliest start date<input name="startDate" type="date" className={inputClass} /></label><div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div><label>Reference 1 name<input name="reference1Name" className={inputClass} /></label><label>Reference 1 phone<input name="reference1Phone" type="tel" className={inputClass} /></label><label>Reference 2 name<input name="reference2Name" className={inputClass} /></label><label>Reference 2 phone<input name="reference2Phone" type="tel" className={inputClass} /></label><label className="md:col-span-2 flex items-start gap-3 border border-border px-4 py-3 text-sm leading-6"><input name="smsConsent" type="checkbox" className="mt-1 size-4 accent-primary" /> I agree to receive occasional application-related text messages from On The Spot Repair. Message and data rates may apply. Consent is optional.</label></div><div className={step === 3 ? 'space-y-5' : 'hidden'}><div className="grid gap-3 border border-border p-5 text-sm md:grid-cols-2">{Object.entries(formValues).filter(([key]) => key !== 'website').map(([key, value]) => <div key={key}><p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{key.replace(/[A-Z]/g, (letter) => ` ${letter}`).trim()}</p><p className="mt-1 font-semibold">{typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value || 'Not provided'}</p></div>)}</div><p className="text-sm leading-6 text-muted-foreground">By submitting, you confirm the information above is accurate and authorize our hiring team to contact you about this application.</p></div>{error && <p role="alert" className="mt-5 text-sm text-destructive">{error}</p>}<div className="mt-8 flex flex-wrap justify-between gap-3"><button type="button" disabled={step === 0 || status === 'loading'} onClick={() => setStep((current) => Math.max(current - 1, 0))} className="inline-flex items-center gap-2 border border-border px-4 py-3 text-sm font-bold uppercase disabled:opacity-40"><ArrowLeft className="size-4" />Back</button><button type="submit" disabled={status === 'loading'} className="inline-flex items-center gap-2 bg-primary px-5 py-3 text-sm font-bold uppercase text-primary-foreground disabled:opacity-60">{status === 'loading' ? 'Sending…' : step === steps.length - 1 ? 'Submit application' : 'Continue'}{step < steps.length - 1 && <ArrowRight className="size-4" />}</button></div></form></div></section>
}
