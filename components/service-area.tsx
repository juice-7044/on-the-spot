import Link from "next/link"
import { MapPin, Clock, ArrowRight } from "lucide-react"

const SERVICE_TOWNS = [
  { name: "Unadilla", slug: "unadilla", distance: "0", note: "Home Base" },
  { name: "Perry", slug: "perry", distance: "20", note: "I-75 Corridor" },
  { name: "Warner Robins", slug: "warner-robins", distance: "40", note: "Robins AFB / GA-247" },
  { name: "Vienna", slug: "vienna", distance: "15", note: "US-41 Corridor" },
  { name: "Hawkinsville", slug: "hawkinsville", distance: "18", note: "US-129 Corridor" },
  { name: "Cordele", slug: "cordele", distance: "25", note: "I-75 Exit 101" },
  { name: "Elko", slug: "elko", distance: "10", note: "US-41 Corridor" },
  { name: "Byromville", slug: "byromville", distance: "12", note: "GA-90 Corridor" },
  { name: "Montezuma", slug: "montezuma", distance: "22", note: "GA-26 Corridor" },
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="py-16 md:py-24 bg-[#1a1a1a] text-white scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block font-sans font-bold uppercase text-xs tracking-widest text-primary mb-3">
            Service Area
          </span>
          <h2 className="font-sans font-black uppercase text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            We Cover Middle Georgia
          </h2>
          <p className="font-sans text-gray-400 text-lg max-w-2xl mx-auto">
            24/7 mobile roadside assistance within 30 miles of Unadilla. Click any town below for location-specific service information.
          </p>
        </div>

        {/* Town Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {SERVICE_TOWNS.map((town) => (
            <Link
              key={town.slug}
              href={`/${town.slug}`}
              className="group bg-white/5 hover:bg-primary border border-white/10 hover:border-primary rounded-xl p-5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <MapPin size={20} className="text-primary group-hover:text-primary-foreground transition-colors" />
                <ArrowRight size={16} className="text-gray-500 group-hover:text-primary-foreground group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-sans font-bold text-lg text-white group-hover:text-primary-foreground mb-1 transition-colors">
                {town.name}, GA
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-primary-foreground/80 transition-colors">
                <Clock size={12} />
                <span>{town.distance === "0" ? "Shop Location" : `~${town.distance} min`}</span>
              </div>
              <p className="text-xs text-gray-500 group-hover:text-primary-foreground/70 mt-1 transition-colors">
                {town.note}
              </p>
            </Link>
          ))}
        </div>

        {/* Map Embed */}
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212598.77893376685!2d-83.9!3d32.26!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f12c0eb6d25a2b%3A0x3c7f8e8d8e8e8e8e!2sUnadilla%2C%20GA%2031091!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="On The Spot Repair Service coverage area map"
            className="w-full"
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <p className="text-gray-400 mb-4">
            Do not see your town listed? We may still be able to help.
          </p>
          <a
            href="tel:4782447008"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105"
          >
            Call to Check Coverage: 478-244-7008
          </a>
        </div>
      </div>
    </section>
  )
}
