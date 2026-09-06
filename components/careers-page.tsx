import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, BriefcaseBusiness, CheckCircle2, Clock3, Mail, MapPin, Phone, ShieldCheck, Wrench } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const benefits = [
  ["Strong hourly pay", "Competitive pay based on experience and capability."],
  ["Steady work", "A full shop, mobile calls, fleets, and commercial customers keep the bays moving."],
  ["Tools that matter", "Work around heavy-duty lifts, diagnostic equipment, and real repair jobs."],
  ["Local team", "Join an independent Unadilla shop where your work is seen and valued."],
]

const faqs = [
  ["What position is open?", "We are hiring an Automotive & Diesel Mechanic for shop and mobile repair work across Middle and South Georgia."],
  ["What experience do I need?", "Hands-on automotive or diesel experience is preferred. If you can diagnose, communicate, and work safely, we want to hear from you."],
  ["Where is the job based?", "Our home base is 990 2nd Street in Unadilla, Georgia, with occasional mobile service calls in the surrounding area."],
  ["How do I apply?", "Call or text 478-244-7008, email onthespotrepair23@gmail.com, or use the quick application form below."],
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-card px-6 pb-16 pt-28 sm:pb-24 sm:pt-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-2 text-sm font-bold uppercase tracking-[.22em] text-primary"><span className="h-2 w-2 rounded-full bg-primary" />Now hiring in Unadilla, GA</p>
            <h1 className="max-w-4xl text-4xl font-black uppercase leading-[.95] tracking-tight sm:text-6xl lg:text-7xl">Your skills belong <span className="text-primary">on the road.</span></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">On The Spot Repair Service & Tires is looking for an Automotive & Diesel Mechanic who takes pride in solving real problems for real drivers.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="tel:4782447008" className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-6 font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"><Phone data-icon="inline-start" />Call to apply</a>
              <a href="sms:4782447008" className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-border bg-background px-6 font-bold uppercase tracking-wide hover:border-primary hover:text-primary"><Mail data-icon="inline-start" />Text 478-244-7008</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[["$25–$35/hr", "pay range"], ["Full-time", "steady work"], ["24/7", "real-world calls"], ["Unadilla", "home base"]].map(([value, label]) => <div key={label} className="border border-border bg-background p-5 sm:p-7"><p className="text-2xl font-black text-primary sm:text-3xl">{value}</p><p className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">{label}</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-b border-border px-6 py-5"><div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-3 text-xs font-bold uppercase tracking-widest text-muted-foreground"><span className="flex items-center gap-2"><BadgeCheck className="text-primary" />Independent local shop</span><span className="flex items-center gap-2"><ShieldCheck className="text-primary" />Safety-first work</span><span className="flex items-center gap-2"><Wrench className="text-primary" />Cars to semis</span><span className="flex items-center gap-2"><Clock3 className="text-primary" />Established 2025</span></div></section>

      <section className="px-6 py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[.22em] text-primary">The opportunity</p><h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Bring your trade. Build your future.</h2><p className="mt-6 leading-relaxed text-muted-foreground">This is not a slow, repetitive bay. You will work on passenger vehicles, commercial trucks, trailers, reefers, and roadside calls. Every day rewards practical thinking, clean work, and a willingness to get the job done.</p><div className="mt-8 flex items-start gap-3 border-l-2 border-primary pl-5"><BriefcaseBusiness className="mt-1 shrink-0 text-primary" /><p className="font-bold leading-relaxed">We are growing our team around mechanics who want steady work, fair expectations, and the chance to make a difference for customers when they need it most.</p></div></div><div className="grid gap-4 sm:grid-cols-2">{benefits.map(([title, text]) => <article key={title} className="rounded border border-border bg-card p-6"><CheckCircle2 className="text-primary" /><h3 className="mt-5 text-xl font-black uppercase">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="bg-card px-6 py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center"><div className="relative min-h-[360px] overflow-hidden rounded border border-border"><Image src="/mechanic-working.jpg" alt="Mechanic working on a vehicle at On The Spot Repair" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" /></div><div><p className="text-sm font-bold uppercase tracking-[.22em] text-primary">What you&apos;ll do</p><h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Diagnose. Repair. Keep Georgia moving.</h2><ul className="mt-7 flex flex-col gap-4 text-muted-foreground"><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-primary" />Perform automotive and diesel diagnostics and repairs.</li><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-primary" />Handle brakes, tires, electrical, engines, trailers, and more.</li><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-primary" />Support mobile roadside calls with a calm, professional attitude.</li><li className="flex gap-3"><CheckCircle2 className="shrink-0 text-primary" />Keep a clean bay, communicate clearly, and work safely.</li></ul><p className="mt-7 font-bold">Bring your own experience, or bring the drive to learn.</p></div></div></section>

      <section id="apply" className="px-6 py-16 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-sm font-bold uppercase tracking-[.22em] text-primary">Ready to roll?</p><h2 className="mt-3 text-3xl font-black uppercase sm:text-5xl">Apply in two minutes.</h2><p className="mt-5 leading-relaxed text-muted-foreground">The fastest way to get started is to call or text us directly. Prefer email? Send the basics and we&apos;ll follow up.</p><div className="mt-7 flex flex-col gap-3"><a href="tel:4782447008" className="flex items-center gap-3 font-bold hover:text-primary"><Phone className="text-primary" />478-244-7008</a><a href="mailto:onthespotrepair23@gmail.com" className="flex items-center gap-3 font-bold hover:text-primary"><Mail className="text-primary" />onthespotrepair23@gmail.com</a><p className="flex items-center gap-3 text-sm text-muted-foreground"><MapPin className="text-primary" />990 2nd Street, Unadilla, GA 31091</p></div></div><form action="mailto:onthespotrepair23@gmail.com" method="post" encType="text/plain" className="grid gap-4 rounded border border-border bg-card p-6 sm:grid-cols-2 sm:p-8"><label className="grid gap-2 text-sm font-bold uppercase tracking-wide">Name<input required name="name" className="min-h-12 rounded border border-input bg-background px-3 font-normal normal-case outline-none focus:ring-2 focus:ring-ring" /></label><label className="grid gap-2 text-sm font-bold uppercase tracking-wide">Phone<input required type="tel" name="phone" className="min-h-12 rounded border border-input bg-background px-3 font-normal normal-case outline-none focus:ring-2 focus:ring-ring" /></label><label className="grid gap-2 text-sm font-bold uppercase tracking-wide sm:col-span-2">Experience<input name="experience" placeholder="Automotive, diesel, tires, electrical..." className="min-h-12 rounded border border-input bg-background px-3 font-normal normal-case outline-none focus:ring-2 focus:ring-ring" /></label><label className="grid gap-2 text-sm font-bold uppercase tracking-wide sm:col-span-2">Message<textarea name="message" rows={4} className="rounded border border-input bg-background p-3 font-normal normal-case outline-none focus:ring-2 focus:ring-ring" /></label><button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-primary px-6 font-bold uppercase tracking-wide text-primary-foreground hover:bg-primary/90 sm:col-span-2">Send application <ArrowRight data-icon="inline-end" /></button></form></div></section>

      <section className="border-t border-border bg-card px-6 py-16 sm:py-24"><div className="mx-auto max-w-3xl"><p className="text-center text-sm font-bold uppercase tracking-[.22em] text-primary">Questions</p><h2 className="mt-3 text-center text-3xl font-black uppercase sm:text-5xl">Good questions deserve straight answers.</h2><Accordion type="single" collapsible className="mt-9">{faqs.map(([question, answer], index) => <AccordionItem key={question} value={`item-${index}`}><AccordionTrigger className="text-left font-bold uppercase tracking-wide">{question}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="px-6 py-12"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center"><p className="text-sm text-muted-foreground">Not looking for work? <Link href="/" className="font-bold text-foreground hover:text-primary">Visit the repair shop</Link> or explore <Link href="/unadilla" className="font-bold text-foreground hover:text-primary">local service in Unadilla</Link>.</p><a href="tel:4782447008" className="font-black uppercase text-primary">Call 478-244-7008</a></div></section>
    </main>
  )
}

export const careersFaqs = faqs
export const careersBenefits = benefits

export function CareersJsonLd() {
  const jobPosting = { "@context": "https://schema.org", "@type": "JobPosting", title: "Automotive & Diesel Mechanic", description: "Join On The Spot Repair Service & Tires as an Automotive & Diesel Mechanic serving Unadilla and Middle Georgia.", datePosted: new Date().toISOString().slice(0, 10), validThrough: new Date(Date.now() + 30 * 86400000).toISOString(), employmentType: "FULL_TIME", hiringOrganization: { "@type": "Organization", name: "On The Spot Repair Service & Tires", sameAs: "https://www.onthespotrepairservicestires.com", logo: "https://www.onthespotrepairservicestires.com/logo.png" }, jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", streetAddress: "990 2nd Street", addressLocality: "Unadilla", addressRegion: "GA", postalCode: "31091", addressCountry: "US" } }, baseSalary: { "@type": "MonetaryAmount", currency: "USD", value: { "@type": "QuantitativeValue", minValue: 25, maxValue: 35, unitText: "HOUR" } } }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }} />
}

