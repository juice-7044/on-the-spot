import Image from "next/image"
import { Phone, AlertTriangle } from "lucide-react"

export default function RoadsideCta() {
  return (
    <section
      className="relative py-24 px-6 overflow-hidden"
      aria-labelledby="emergency-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/roadside.jpg"
          alt="Mobile roadside assistance truck helping a stranded semi truck on the highway at night"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/85" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-primary" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 border border-primary/50 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-sans font-semibold uppercase tracking-widest mb-6">
          <AlertTriangle size={14} aria-hidden="true" />
          Emergency Services
        </div>

        <h2
          id="emergency-heading"
          className="font-sans font-black uppercase text-5xl md:text-7xl text-foreground text-balance leading-none mb-6"
        >
          Stranded? <br />
          <span className="text-primary">We Come To You.</span>
        </h2>

        <p className="font-sans text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Our 24-hour mobile roadside assistance is available every day of the week — including Sundays.
          Breakdowns don&apos;t wait for business hours, and neither do we.
        </p>

        <a
          href="tel:4782447008"
          className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-black uppercase tracking-wider text-xl px-10 py-5 rounded transition-all duration-200 hover:scale-105 hover:shadow-[0_0_40px_rgba(200,30,30,0.5)]"
          aria-label="Call On The Spot Repair emergency line at 478-244-7008"
        >
          <Phone size={24} aria-hidden="true" />
          Call Now: 478-244-7008
        </a>

        <p className="mt-4 text-muted-foreground text-sm font-sans">
          Available 24 hours for mobile call-out services
        </p>
      </div>
    </section>
  )
}
