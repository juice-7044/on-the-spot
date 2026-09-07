'use client'

import { FormEvent, useState } from 'react'
import { CheckCircle2, Upload } from 'lucide-react'

const inputClass = 'mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30'

export default function CareersForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('loading'); setError('')
    const form = event.currentTarget
    const data = new FormData(form)
    data.set('hasTools', String(data.get('hasTools') === 'on')); data.set('hasCdl', String(data.get('hasCdl') === 'on'))
    const response = await fetch('/api/applications', { method: 'POST', body: data })
    const result = await response.json()
    if (!response.ok) { setError(result.error || 'Please try again.'); setStatus('error'); return }
    form.reset(); setStatus('success')
  }

  if (status === 'success') return <section className="mx-auto max-w-3xl px-6 py-20"><div className="border border-primary/40 bg-card p-10 text-center"><CheckCircle2 className="mx-auto size-12 text-primary" /><h2 className="mt-5 text-3xl font-bold">Application received.</h2><p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">Thanks for reaching out. Our team will review your information and contact you if there is a fit.</p><button type="button" onClick={() => setStatus('idle')} className="mt-8 border border-border px-5 py-3 text-sm font-bold uppercase tracking-wide hover:border-primary">Submit another application</button></div></section>

  return <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Application intake</p><h2 className="mt-3 text-3xl font-black uppercase tracking-tight">Tell us how you work.</h2><p className="mt-4 leading-7 text-muted-foreground">Complete the form and attach a resume if you have one. All applications are reviewed by our local team.</p><p className="mt-8 border-l-2 border-primary pl-4 text-sm leading-6 text-muted-foreground">Questions? Call <a className="font-bold text-foreground hover:text-primary" href="tel:+14782447008">478-244-7008</a>.</p></div><form onSubmit={submit} className="grid gap-5 border border-border bg-card p-6 md:grid-cols-2 md:p-8"><label className="md:col-span-2">Full name<input required name="fullName" className={inputClass} /></label><label>Phone<input required name="phone" type="tel" className={inputClass} /></label><label>Email<input required name="email" type="email" className={inputClass} /></label><label>Position<select required name="position" defaultValue="" className={inputClass}><option value="" disabled>Select a role</option><option>Automotive Mechanic</option><option>Diesel Mechanic</option><option>Tire Technician</option></select></label><label>Years of experience<input required name="experienceYears" type="number" min="0" max="60" className={inputClass} /></label><label>Earliest start date<input name="startDate" type="date" className={inputClass} /></label><label>Resume <span className="text-muted-foreground">(optional)</span><span className={`${inputClass} flex items-center gap-2`}><Upload className="size-4" /><input name="resume" type="file" accept=".pdf,.doc,.docx" className="min-w-0 text-xs" /></span></label><label className="flex items-center gap-3 border border-border px-4 py-3 text-sm"><input name="hasTools" type="checkbox" className="size-4 accent-primary" /> I have my own tools</label><label className="flex items-center gap-3 border border-border px-4 py-3 text-sm"><input name="hasCdl" type="checkbox" className="size-4 accent-primary" /> I have a CDL</label><div className="md:col-span-2 grid gap-4 border-t border-border pt-5 md:grid-cols-2"><label>Reference 1 name<input name="reference1Name" className={inputClass} /></label><label>Reference 1 phone<input name="reference1Phone" type="tel" className={inputClass} /></label><label>Reference 2 name<input name="reference2Name" className={inputClass} /></label><label>Reference 2 phone<input name="reference2Phone" type="tel" className={inputClass} /></label></div><label className="md:col-span-2">Anything else we should know?<textarea name="message" rows={5} className={inputClass} /></label>{error && <p role="alert" className="md:col-span-2 border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">{error}</p>}<button disabled={status === 'loading'} className="md:col-span-2 bg-primary px-6 py-4 text-sm font-black uppercase tracking-wide text-primary-foreground transition hover:brightness-110 disabled:opacity-60">{status === 'loading' ? 'Sending application…' : 'Submit application'}</button></form></div></section>
}
