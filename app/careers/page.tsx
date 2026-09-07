import type { Metadata } from 'next'
import CareersForm from '@/components/careers-form'

export const metadata: Metadata = {
  title: 'Careers | On The Spot Repair Service & Tires',
  description: 'Join the On The Spot Repair team in Unadilla, Georgia. Apply for automotive mechanic, diesel mechanic, and tire technician positions.',
  alternates: { canonical: '/careers' },
}

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-secondary/60 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.24em] text-primary">Join the crew</p>
          <h1 className="max-w-3xl text-pretty text-4xl font-black uppercase tracking-tight md:text-6xl">Build a career that keeps Georgia moving.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">We are growing our Unadilla shop and mobile service team. If you take pride in dependable work, honest communication, and getting drivers safely back on the road, we want to hear from you.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-muted-foreground"><span className="border border-border px-4 py-2">Full-time opportunities</span><span className="border border-border px-4 py-2">Shop + mobile work</span><span className="border border-border px-4 py-2">South Georgia team</span></div>
        </div>
      </section>
      <CareersForm />
    </main>
  )
}
