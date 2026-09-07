import Link from 'next/link'

export default function CareersThankYouPage() {
  return <main className="mx-auto max-w-2xl px-6 py-24 text-center"><p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Application received</p><h1 className="mt-4 text-4xl font-black uppercase">Thank you for applying.</h1><p className="mt-5 leading-7 text-muted-foreground">Our team will review your information and contact you if there is a fit.</p><Link href="/" className="mt-8 inline-flex border border-primary px-5 py-3 text-sm font-bold uppercase text-primary">Return home</Link></main>
}
