"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const GALLERY_IMAGES = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0358-45uClteQ8HJIzt0ul1KBWazesIakt6.jpg",
    alt: "Team changing commercial truck tires at a truck stop",
    category: "Tires",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0976-NmT6kjGlInoYbECszZQelDfJCF6fO6.jpg",
    alt: "Roadside semi truck repair with hood open",
    category: "Roadside",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2659-xFhhxcflLg6UuJcdXhBSnX7GMkaf20.jpg",
    alt: "Transmission gearbox rebuild showing precision gears",
    category: "Transmission",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1501-oxCszkpUmY2ByMeteEx9iblW9Ronl2.jpg",
    alt: "Semi truck engine service at the shop",
    category: "Engine",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2739-YTDQvYShK1AVqhVSpM038BBzxCQQkM.jpg",
    alt: "Commercial truck brake rotor and caliper assembly",
    category: "Brakes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1390-yC3u7AcgGJe32ObDWOaFATBFM1t7Dq.jpg",
    alt: "Tire inventory and equipment room",
    category: "Shop",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2813-b2qC5tFn83cvI6KqRfe7sEUPJpQZwO.jpg",
    alt: "Commercial truck engine bay with coolant reservoir",
    category: "Engine",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2828-d5Y5C6IYNzhiyouzB5T9mXWChLLJzz.jpg",
    alt: "Wheel hub assembly with bearing and studs",
    category: "Axle",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1385-pAB7K5bqNYrOvTRmLnQJFOnyO76PXt.jpg",
    alt: "White semi truck engine service in progress",
    category: "Engine",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2827-8zlVZ1l980s5YYufhos1cRF6Ql9gFf.jpg",
    alt: "Worn drum brake assembly repair",
    category: "Brakes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1348-YeP3k17FJlPejIF6plhO0ToHoZwjlT.jpg",
    alt: "Trailer axle hub repair with tools",
    category: "Axle",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2824-lPi2DNU3vosPrbT1lNtgr4hyTbDGD8.jpg",
    alt: "Drum brake and axle spindle assembly",
    category: "Brakes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2826-KKiPYuJKi6ZcueQaUnziej3T7c1PRD.jpg",
    alt: "Worn brake shoe on roadside",
    category: "Brakes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2825-13Rg9jSI9J8Lq1QtBD3DsO5EYcs0Ar.jpg",
    alt: "Axle spindle close-up during repair",
    category: "Axle",
  },
]

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [filter, setFilter] = useState<string>("All")
  const sectionRef = useRef<HTMLElement>(null)
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())

  const categories = ["All", ...Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)))]
  const filteredImages = filter === "All" ? GALLERY_IMAGES : GALLERY_IMAGES.filter((img) => img.category === filter)

  // Intersection observer for staggered fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"))
            setTimeout(() => {
              setVisibleItems((prev) => new Set(prev).add(index))
            }, index * 80)
          }
        })
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    const items = sectionRef.current?.querySelectorAll("[data-index]")
    items?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [filter])

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedIndex(null)
      if (e.key === "ArrowRight") setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0))
      if (e.key === "ArrowLeft") setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0))
    }

    window.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [selectedIndex, filteredImages.length])

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background"
      aria-labelledby="gallery-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-semibold mb-3">
            <span className="w-8 h-0.5 bg-primary" />
            Our Work
            <span className="w-8 h-0.5 bg-primary" />
          </span>
          <h2
            id="gallery-heading"
            className="font-sans font-black uppercase text-4xl md:text-5xl lg:text-6xl text-foreground leading-none"
          >
            See It To Believe It
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            From transmission rebuilds to roadside tire changes, here&apos;s a look at the real work we do every day.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat)
                setVisibleItems(new Set())
              }}
              className={`px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-200 ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((image, index) => {
            // Vary heights for masonry effect
            const isLarge = index % 5 === 0 || index % 7 === 0
            return (
              <button
                key={image.src}
                data-index={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                  isLarge ? "row-span-2" : ""
                } ${visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-500`}
                style={{ aspectRatio: isLarge ? "3/4" : "4/3" }}
                aria-label={`View ${image.alt}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Category badge */}
                <span className="absolute bottom-3 left-3 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  {image.category}
                </span>
                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                      <path d="M11 8v6M8 11h6" />
                    </svg>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Close lightbox"
          >
            <X size={24} className="text-white" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((prev) => (prev !== null ? (prev - 1 + filteredImages.length) % filteredImages.length : 0))
            }}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={28} className="text-white" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              setSelectedIndex((prev) => (prev !== null ? (prev + 1) % filteredImages.length : 0))
            }}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={28} className="text-white" />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedIndex].src}
              alt={filteredImages[selectedIndex].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white/80 text-sm">
              {filteredImages[selectedIndex].alt}
            </p>
            <p className="text-white/50 text-xs mt-1">
              {selectedIndex + 1} / {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
