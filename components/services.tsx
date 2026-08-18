"use client"

import { useEffect, useRef, useState } from "react"
import { Car, Truck, Monitor, Wrench, Snowflake, Bus } from "lucide-react"

const SERVICES = [
  {
    icon: Car,
    title: "Cars & Light Vehicles",
    description:
      "Full mechanical repairs, maintenance, and tire services for all makes and models of passenger cars and light trucks.",
  },
  {
    icon: Truck,
    title: "Semi Trucks & Trailers",
    description:
      "Heavy-duty mechanical work for Class 8 semi trucks and all trailer types. We get you back on the road fast.",
  },
  {
    icon: Snowflake,
    title: "Refrigerated Reefers",
    description:
      "Specialized repair and maintenance for refrigerated trailers (reefers), keeping your cold chain intact.",
  },
  {
    icon: Bus,
    title: "RVs & Buses",
    description:
      "Comprehensive service for recreational vehicles and commercial buses, from tires to full mechanical overhauls.",
  },
  {
    icon: Monitor,
    title: "Computer Diagnostics",
    description:
      "Advanced OBD-II and commercial-grade diagnostic testing for both cars and commercial trucks. Know exactly what's wrong.",
  },
  {
    icon: Wrench,
    title: "24/7 Mobile Roadside",
    description:
      "Stuck on the road? Our mobile team comes to you — any time, day or night, for emergency roadside assistance.",
  },
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-background py-24 px-6"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-sans uppercase text-primary tracking-widest text-sm font-semibold mb-3">
            What We Do
          </span>
          <h2
            id="services-heading"
            className="font-sans font-black uppercase text-4xl md:text-6xl text-foreground text-balance leading-none"
          >
            Full-Service Repair <br className="hidden md:block" />
            <span className="text-primary">You Can Count On</span>
          </h2>
          <p className="mt-5 text-muted-foreground font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            From a flat tire on the highway to a full engine rebuild, we have the tools, expertise, and equipment to
            handle any job.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className={`group bg-card border border-border rounded-lg p-7 flex flex-col gap-4 hover:border-primary/60 hover:shadow-[0_0_32px_rgba(200,30,30,0.12)] transition-all duration-300 ${
                  isVisible ? "animate-float-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300"
                  aria-hidden="true"
                >
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-sans font-bold uppercase text-xl text-foreground tracking-wide">
                  {service.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* NAPA Truck Care Badge — centered below */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg border border-gray-200 flex flex-col">
            {/* Navy header bar */}
            <div className="bg-[#1b2a6b] px-4 py-3 flex items-center justify-between gap-3">
              {/* NAPA hex logo */}
              <svg viewBox="0 0 48 48" className="w-12 h-12 flex-shrink-0" aria-hidden="true">
                <polygon points="24,2 44,13 44,35 24,46 4,35 4,13" fill="#f5a800" stroke="#1b2a6b" strokeWidth="1" />
                <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" fill="#1b2a6b" />
                <text x="24" y="28" textAnchor="middle" fill="white" fontSize="11" fontWeight="900" fontFamily="Arial,sans-serif">NAPA</text>
              </svg>
              {/* TRUCK CARE text */}
              <div className="flex flex-col leading-none flex-1">
                <span className="text-white font-black text-lg tracking-tight leading-none" style={{fontFamily:'Arial,sans-serif'}}>TRUCK CARE</span>
                <span className="text-[#f5a800] font-bold text-xs tracking-widest uppercase leading-none mt-1">Heavy Duty</span>
              </div>
              {/* ASE gear badge */}
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border-2 border-[#f5a800]">
                <span className="text-[#1b2a6b] font-black text-[10px] leading-none tracking-tight" style={{fontFamily:'Arial,sans-serif'}}>ASE</span>
              </div>
            </div>
            {/* White body */}
            <div className="bg-white px-4 py-4 flex flex-col items-center gap-3">
              <p className="font-sans text-sm text-[#333] leading-snug text-center">
                Officially recognized <span className="font-bold">NAPA Truck Care</span> partner
              </p>
              <p className="font-sans text-xs text-[#666]">
                Location Code <span className="font-bold">#1377287</span>
              </p>
              <p className="font-sans text-xs font-black text-[#1b2a6b] uppercase tracking-wide">
                Member Since 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
