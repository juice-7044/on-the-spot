import { createServerSupabaseClient } from '@/lib/supabase/server'
import AgreementForm from '@/components/agreement-form'

export const metadata = { title: 'Employment Agreement | On The Spot Repair', robots: { index: false, follow: false } }

export default async function AgreementPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params
  const supabase = createServerSupabaseClient()
  const { data: agreement } = await supabase.from('agreements').select('id,signed_at').eq('token', token).maybeSingle()
  if (!agreement) return <main className="mx-auto max-w-2xl px-6 py-24"><h1 className="text-3xl font-black uppercase">Agreement unavailable</h1><p className="mt-4 text-muted-foreground">This link is invalid or has expired.</p></main>
  const { data: application } = await supabase.from('applications').select('full_name,position').eq('id', agreement.id).single()
  return <main className="mx-auto max-w-3xl px-6 py-16"><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">On The Spot Repair</p><h1 className="mt-3 text-4xl font-black uppercase">Employment agreement</h1><p className="mt-4 text-muted-foreground">Prepared for {application?.full_name} — {application?.position}</p><article className="mt-8 border border-border bg-card p-6 leading-7"><p>This agreement confirms the employment terms discussed with the On The Spot Repair team. By signing below, you acknowledge that you have reviewed the position, responsibilities, compensation details, and company policies provided to you by the hiring team.</p><p className="mt-5">Your electronic signature confirms your intent to accept the agreement presented to you.</p></article>{agreement.signed_at ? <p className="mt-8 border border-primary/40 p-5 text-primary">This agreement was signed successfully.</p> : <AgreementForm token={token} />}</main>
}
