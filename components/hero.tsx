"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Phone, MapPin, ChevronDown } from "lucide-react"

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const badge = badgeRef.current
    if (!badge) return
    let angle = 0
    const spin = () => {
      angle = (angle + 0.3) % 360
      badge.style.transform = `rotate(${angle}deg)`
      requestAnimationFrame(spin)
    }
    const raf = requestAnimationFrame(spin)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster="/hero-bg.jpg"
        >
          <source
            src="/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-background/75" />
        {/* Red accent line at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Text block */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge label - prominent flashing */}
          <div className="inline-flex items-center gap-3 border-2 border-primary bg-primary/20 text-primary px-5 py-2.5 rounded-full text-sm md:text-base font-bold uppercase tracking-wider mb-8 animate-flash-emergency">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse inline-block" aria-hidden="true" />
            24/7 Mobile Roadside Assistance Available
            <Phone size={18} className="ml-1" aria-hidden="true" />
          </div>

          <h1 className="font-sans font-black uppercase leading-none text-5xl md:text-7xl lg:text-8xl text-foreground text-balance mb-6">
            Expert Tire &amp; Truck<br />
            <span className="text-primary">Repair in</span>{" "}
            <span className="text-foreground">Unadilla</span>
          </h1>

          <p className="font-sans text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10">
            From family cars to commercial semi-trucks, we deliver powerful, dependable repair services, day or night, rain or shine. <strong className="text-foreground">On the spot.</strong>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="tel:4782447008"
              className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider text-base px-8 py-4 rounded transition-all duration-200 hover:scale-105 hover:shadow-[0_0_24px_rgba(200,30,30,0.4)]"
              aria-label="Call On The Spot Repair at 478-244-7008"
            >
              <Phone size={20} aria-hidden="true" />
              Call 478-244-7008
            </a>
            <a
              href="https://maps.google.com/?q=990+2nd+Street+Unadilla+GA+31091"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border border-border hover:border-primary text-foreground hover:text-primary font-bold uppercase tracking-wider text-base px-8 py-4 rounded transition-all duration-200"
              aria-label="Get directions to 990 2nd Street Unadilla GA"
            >
              <MapPin size={20} aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </div>

        {/* Spinning logo badge */}
        <div className="relative flex-shrink-0 w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 hidden sm:flex items-center justify-center">
          {/* Rotating ring text */}
          <div ref={badgeRef} className="absolute inset-0" aria-hidden="true">
            <svg viewBox="0 0 200 200" className="w-full h-full opacity-40">
              <defs>
                <path id="circle" d="M 100,100 m -70,0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0" />
              </defs>
              <text className="fill-primary text-[10px]" fontSize="9" letterSpacing="6" fontFamily="sans-serif" fontWeight="700">
                <textPath href="#circle">
                  UNADILLA GA • 478-244-7008 • OPEN 6 DAYS A WEEK •&nbsp;
                </textPath>
              </text>
            </svg>
          </div>
          {/* Static logo */}
          <Image
            src="/logo.png"
            alt="On The Spot Repair Services & Tires logo"
            width={200}
            height={200}
            className="rounded-full z-10 shadow-2xl"
          />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors group"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-sans uppercase tracking-widest">Explore</span>
        <ChevronDown size={20} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
