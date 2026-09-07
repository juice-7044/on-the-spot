'use client'

import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
  const router = useRouter(); const [error, setError] = useState(''); const [loading, setLoading] = useState(false)
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); setError(''); const form = new FormData(event.currentTarget); const response = await fetch('/api/admin/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: form.get('email'), password: form.get('password') }) }); const result = await response.json(); if (!response.ok) { setError(result.error || 'Unable to sign in.'); setLoading(false); return }; router.push('/admin'); router.refresh() }
  return <main className="flex min-h-screen items-center justify-center bg-background px-6"><form onSubmit={submit} className="w-full max-w-md border border-border bg-card p-8"><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Private operations</p><h1 className="mt-3 text-3xl font-black uppercase">Admin sign in</h1><p className="mt-3 leading-6 text-muted-foreground">Manage candidate applications and hiring workflow.</p><div className="mt-8 grid gap-5"><label>Email<input required name="email" type="email" className="mt-2 w-full border border-input bg-background px-4 py-3" /></label><label>Password<input required name="password" type="password" className="mt-2 w-full border border-input bg-background px-4 py-3" /></label>{error && <p role="alert" className="text-sm text-destructive">{error}</p>}<button disabled={loading} className="bg-primary px-5 py-3 font-bold uppercase tracking-wide text-primary-foreground disabled:opacity-60">{loading ? 'Signing in…' : 'Sign in'}</button></div></form></main>
}
