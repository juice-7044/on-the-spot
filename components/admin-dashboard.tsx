'use client'

import { useEffect, useState } from 'react'

const statuses = ['New', 'Under Review', 'Accepted', 'Agreement Sent', 'Signed', 'Hired', 'Rejected']
const offerPositions = ['Automotive Service Technician', 'General Service Technician', 'Master Mechanic', 'Diesel Mechanic', 'Heavy Equipment Mechanic', 'Maintenance Technician']
type Application = { id: string; full_name: string; email: string; phone: string; position: string; experience_years: number; status: string; created_at: string; notes?: string | null; resume_url?: string | null; message?: string | null }
type OfferDraft = { offeredPosition: string; startDate: string; hourlyWage: string }

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([])
  const [offers, setOffers] = useState<Record<string, OfferDraft>>({})
  const [sendingId, setSendingId] = useState<string | null>(null)
  const [filter, setFilter] = useState('All')
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState<'error' | 'success'>('error')
  const [loading, setLoading] = useState(true)

  async function load() {
    const response = await fetch('/api/admin/applications')
    const result = await response.json()
    if (!response.ok) { setMessageType('error'); setMessage(result.error || 'Unable to load applications.'); setLoading(false); return }
    setApplications(result.applications); setLoading(false)
  }
  useEffect(() => { load() }, [])

  async function update(id: string, status: string, notes?: string | null) {
    const response = await fetch('/api/admin/applications', { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ id, status, notes }) })
    if (!response.ok) { setMessageType('error'); setMessage('Unable to update application.'); return }
    setApplications((items) => items.map((item) => item.id === id ? { ...item, status, notes } : item))
  }

  function setOffer(id: string, field: keyof OfferDraft, value: string) {
    setOffers((current) => ({ ...current, [id]: { ...(current[id] ?? { offeredPosition: '', startDate: '', hourlyWage: '' }), [field]: value } }))
  }

  async function sendAgreement(application: Application) {
    const offer = offers[application.id]
    const wage = Number(offer?.hourlyWage)
    if (!offer?.offeredPosition) { setMessageType('error'); setMessage(`Select the offered position for ${application.full_name}.`); return }
    if (!offer?.startDate) { setMessageType('error'); setMessage(`Enter a start date for ${application.full_name}.`); return }
    if (!Number.isFinite(wage) || wage < 25 || wage > 45) { setMessageType('error'); setMessage('Hourly wage must be between $25.00 and $45.00.'); return }
    setSendingId(application.id); setMessage('')
    const response = await fetch('/api/admin/agreements', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ applicationId: application.id, offeredPosition: offer.offeredPosition, startDate: offer.startDate, hourlyWage: wage }) })
    const result = await response.json(); setSendingId(null)
    if (!response.ok) { setMessageType('error'); setMessage(result.error || 'Unable to send agreement.'); return }
    setApplications((items) => items.map((item) => item.id === application.id ? { ...item, status: 'Agreement Sent' } : item))
    setMessageType('success'); setMessage(`Agreement sent to ${application.email} with a ${offer.startDate} start date and $${wage.toFixed(2)}/hour wage.`)
  }

  async function logout() { await fetch('/api/admin/logout', { method: 'POST' }); window.location.href = '/admin/login' }
  const visible = filter === 'All' ? applications : applications.filter((item) => item.status === filter)

  return <main className="min-h-screen bg-background px-6 py-10 md:px-10"><div className="mx-auto max-w-7xl">
    <header className="flex flex-wrap items-end justify-between gap-5 border-b border-border pb-6"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Private operations</p><h1 className="mt-2 text-4xl font-black uppercase">Candidate pipeline</h1><p className="mt-2 text-muted-foreground">{applications.length} total applications</p></div><button onClick={logout} className="border border-border px-4 py-2 text-sm font-bold uppercase hover:border-primary">Sign out</button></header>
    <div className="mt-8 flex flex-wrap gap-2">{['All', ...statuses].map((status) => <button key={status} onClick={() => setFilter(status)} className={`border px-3 py-2 text-xs font-bold uppercase ${filter === status ? 'border-primary bg-primary text-primary-foreground' : 'border-border hover:border-primary'}`}>{status}</button>)}</div>
    {message && <p role={messageType === 'error' ? 'alert' : 'status'} className={`mt-6 border p-3 text-sm ${messageType === 'error' ? 'border-destructive/40 text-destructive' : 'border-primary/40 text-primary'}`}>{message}</p>}
    {loading ? <p className="mt-10 text-muted-foreground">Loading applications…</p> : <div className="mt-8 grid gap-4">{visible.map((application) => <article key={application.id} className="border border-border bg-card p-5">
      <div className="flex flex-wrap items-start justify-between gap-4"><div><h2 className="text-xl font-bold">{application.full_name}</h2><p className="mt-1 text-sm text-muted-foreground">{application.position} · {application.experience_years} years · {new Date(application.created_at).toLocaleDateString()}</p><p className="mt-2 text-sm">{application.email} · {application.phone}</p></div><select value={application.status} onChange={(event) => update(application.id, event.target.value, application.notes)} className="border border-input bg-background px-3 py-2 text-sm">{statuses.map((status) => <option key={status}>{status}</option>)}</select></div>
      <details className="mt-5 border-t border-border pt-4"><summary className="cursor-pointer text-sm font-bold uppercase">View details</summary><div className="mt-4 grid gap-4 text-sm text-muted-foreground"><p>{application.message || 'No additional message.'}</p>
        <fieldset className="border border-border p-4"><legend className="px-2 font-bold uppercase text-foreground">Employment offer</legend><p className="mb-4">Enter the final terms before sending. These values will appear in the employee’s agreement.</p><div className="grid gap-4 sm:grid-cols-3"><label className="font-medium text-foreground">Offered position<select required value={offers[application.id]?.offeredPosition || ''} onChange={(event) => setOffer(application.id, 'offeredPosition', event.target.value)} className="mt-2 block w-full border border-input bg-background px-3 py-2 font-normal"><option value="">Select position</option>{offerPositions.map((position) => <option key={position} value={position}>{position}</option>)}</select></label><label className="font-medium text-foreground">Start date<input required type="date" value={offers[application.id]?.startDate || ''} onChange={(event) => setOffer(application.id, 'startDate', event.target.value)} className="mt-2 block w-full border border-input bg-background px-3 py-2 font-normal" /></label><label className="font-medium text-foreground">Hourly wage ($25–$45)<input required type="number" min="25" max="45" step="0.01" inputMode="decimal" value={offers[application.id]?.hourlyWage || ''} onChange={(event) => setOffer(application.id, 'hourlyWage', event.target.value)} className="mt-2 block w-full border border-input bg-background px-3 py-2 font-normal" placeholder="25.00" /></label></div><button type="button" disabled={sendingId === application.id || application.status === 'Signed' || application.status === 'Hired'} onClick={() => sendAgreement(application)} className="mt-4 border border-primary px-3 py-2 text-xs font-bold uppercase text-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50">{sendingId === application.id ? 'Sending…' : application.status === 'Agreement Sent' ? 'Replace and resend agreement' : 'Send agreement'}</button></fieldset>
        <label className="text-foreground">Internal notes<textarea defaultValue={application.notes || ''} onBlur={(event) => update(application.id, application.status, event.target.value)} className="mt-2 min-h-24 w-full border border-input bg-background p-3" /></label>{application.resume_url && <p>Resume stored securely in Supabase Storage.</p>}
      </div></details>
    </article>)}{visible.length === 0 && <p className="border border-dashed border-border p-10 text-center text-muted-foreground">No applications in this status.</p>}</div>}
  </div></main>
}
