import Image from "next/image"
import { Phone, ChevronRight } from "lucide-react"

const SERVICES_LIST = [
  "Jump starts and battery replacements",
  "Mobile tire repair and replacement",
  "Lockout service",
  "Fuel delivery",
  "On-site computer diagnostics",
  "Air brake and airline repairs",
]

export default function RoadsideAssistance() {
  return (
    <section id="roadside" className="bg-white py-24 px-6" aria-labelledby="roadside-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Text content */}
          <div className="flex-1">
            {/* Phone icon badge */}
            <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center mb-6">
              <Phone size={24} className="text-primary" />
            </div>

            <h2
              id="roadside-heading"
              className="font-sans font-black uppercase text-4xl md:text-5xl text-[#1a1a1a] leading-none mb-6"
            >
              24-Hour Mobile<br />Roadside Assistance
            </h2>

            <p className="font-sans text-[#555] leading-relaxed text-base mb-8 max-w-xl">
              Breakdowns don&apos;t happen on a schedule. That&apos;s why we don&apos;t either. Our fully-equipped service trucks are ready to deploy 24/7 to your location. We bring the shop to you.
            </p>

            {/* Services list */}
            <ul className="space-y-4 mb-10" role="list">
              {SERVICES_LIST.map((service) => (
                <li key={service} className="flex items-center gap-3 font-sans text-[#333]">
                  <ChevronRight size={18} className="text-primary flex-shrink-0" aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>

            {/* CTA button */}
            <a
              href="tel:4782447008"
              className="inline-flex items-center justify-center gap-3 bg-[#1a1a1a] hover:bg-[#333] text-white font-sans font-bold uppercase tracking-wider text-sm px-8 py-4 rounded transition-all duration-200"
              aria-label="Call for emergency service at 478-244-7008"
            >
              Call For Emergency Service
            </a>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] flex-shrink-0">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/mechanic-working.jpg"
                alt="Professional mechanic working on heavy machinery in auto shop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
