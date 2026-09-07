import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Phone, MapPin, Clock, ArrowRight, ChevronRight, Truck, CalendarClock, ClipboardCheck, Wallet } from "lucide-react"
import { TOWNS, TOWN_SLUGS, getTownData, GBP_RATING, GBP_REVIEW_COUNT } from "@/lib/towns-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TownReviews from "@/components/town-reviews"

interface TownPageProps {
  params: Promise<{ town: string }>
}

export function generateStaticParams() {
  return TOWN_SLUGS.map((slug) => ({ town: slug }))
}

export async function generateMetadata({ params }: TownPageProps): Promise<Metadata> {
  const { town } = await params
  const townData = getTownData(town)

  if (!townData) {
    return {
      title: "Location Not Found | On The Spot Repair Service & Tires",
    }
  }

  return {
    title: townData.metaTitle,
    description: townData.metaDescription,
    alternates: {
      canonical: `https://www.onthespotrepairservicestires.com/${townData.slug}`,
    },
    openGraph: {
      title: townData.metaTitle,
      description: townData.metaDescription,
      url: `https://www.onthespotrepairservicestires.com/${townData.slug}`,
      siteName: "On The Spot Repair Service & Tires",
      locale: "en_US",
      type: "website",
      images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'On The Spot Repair Service & Tires — 24/7 Mobile Truck & Tire Repair' }],
    },
  }
}

export default async function TownPage({ params }: TownPageProps) {
  const { town } = await params
  const townData = getTownData(town)

  if (!townData) {
    notFound()
  }

  const otherTowns = TOWN_SLUGS.filter((slug) => slug !== townData.slug)
  const isHomeBase = townData.distance === "0"

  // JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "On The Spot Repair Service & Tires",
    description: townData.schemaDescription,
    url: `https://www.onthespotrepairservicestires.com/${townData.slug}`,
    telephone: "+1-478-244-7008",
    address: {
      "@type": "PostalAddress",
      streetAddress: "990 2nd Street",
      addressLocality: "Unadilla",
      addressRegion: "GA",
      postalCode: "31091",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.26042556762695,
      longitude: -83.7447509765625,
    },
    areaServed: isHomeBase
      ? TOWN_SLUGS.map((slug) => ({
          "@type": "City",
          name: `${TOWNS[slug].name}, GA`,
          containedInPlace: {
            "@type": "State",
            name: "Georgia",
          },
        }))
      : townData.slug === "warner-robins"
        ? [
            {
              "@type": "City",
              name: "Warner Robins, GA",
              containedInPlace: {
                "@type": "AdministrativeArea",
                name: "Houston County, Georgia",
              },
            },
            {
              "@type": "AdministrativeArea",
              name: "Houston County, Georgia",
            },
          ]
        : {
            "@type": "City",
            name: townData.name,
            containedInPlace: {
              "@type": "State",
              name: "Georgia",
            },
          },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 32.26042556762695,
        longitude: -83.7447509765625,
      },
      geoRadius: "48280",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "17:00",
        description: "Shop walk-in hours",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
        description: `24/7 emergency mobile service to ${townData.name}, GA`,
      },
    ],
    priceRange: "$-$$$",
    paymentAccepted: "Cash, Credit Card, Fleet Account",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GBP_RATING.toFixed(1),
      reviewCount: String(GBP_REVIEW_COUNT),
      bestRating: "5",
      worstRating: "1",
    },
  }

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.onthespotrepairservicestires.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Service Area",
        item: "https://www.onthespotrepairservicestires.com/#service-area",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${townData.name}, GA`,
        item: `https://www.onthespotrepairservicestires.com/${townData.slug}`,
      },
    ],
  }

  // FAQ Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: townData.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />

      <main className="bg-background">
        {/* Hero Section */}
        <section className="relative bg-[#1a1a1a] text-white py-16 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight size={14} />
              <span className="text-primary">Service Area</span>
              <ChevronRight size={14} />
              <span className="text-white">{townData.name}, GA</span>
            </nav>

            <h1 className="font-sans font-black uppercase text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              {townData.h1Title ? (
                <span dangerouslySetInnerHTML={{ __html: townData.h1Title.replace(townData.name, `<span class="text-primary">${townData.name}</span>`) }} />
              ) : (
                <>
                  24-Hour Truck &amp; Tire Repair in{" "}
                  <span className="text-primary">{townData.name}, GA</span>
                </>
              )}
            </h1>

            <div className="max-w-3xl space-y-4 mb-8">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {townData.heroIntro}
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                {townData.heroSecondary}
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm font-medium">{townData.miles} miles from our shop</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <Clock size={18} className="text-primary" />
                <span className="text-sm font-medium">~{townData.distance} min response</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
                <span className="text-sm font-medium">via {townData.highway}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:4782447008"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-lg transition-all duration-200 hover:scale-105 animate-flash-emergency"
              >
                <Phone size={20} />
                Call Now: 478-244-7008
              </a>
              <a
                href={`https://www.google.com/maps/dir/${townData.name},+GA/990+2nd+Street,+Unadilla,+GA+31091`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg text-lg transition-all duration-200 border border-white/20"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </div>
          </div>
        </section>

        {/* Local Content Section */}
        <section className="py-16 md:py-20 bg-[#f5f5f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="prose prose-lg max-w-none">
              {townData.localContent.split("\n\n").map((paragraph, index) => {
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h2 key={index} className="font-sans font-bold text-2xl text-[#1a1a1a] mt-8 mb-4">
                      {paragraph.replace(/\*\*/g, "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("- ")) {
                  const items = paragraph.split("\n").filter(line => line.startsWith("- "))
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 mb-6">
                      {items.map((item, i) => (
                        <li key={i} className="text-[#333]" dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") }} />
                      ))}
                    </ul>
                  )
                }
                return (
                  <p key={index} className="text-[#333] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") }} />
                )
              })}
            </div>

            {/* Common Calls */}
            <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="font-sans font-bold text-xl text-[#1a1a1a] mb-4">
                Common Calls We Handle Near {townData.name}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {townData.commonCalls.map((call, index) => (
                  <li key={index} className="flex items-start gap-2 text-[#333]">
                    <span className="text-primary font-bold">•</span>
                    {call}
                  </li>
                ))}
              </ul>
            </div>

            {/* Spanish Content */}
            {townData.spanishContent && (
              <div className="mt-12 bg-[#fffbe6] rounded-xl p-6 shadow-sm border border-[#f5d742]">
                <div className="prose prose-lg max-w-none">
                  {townData.spanishContent.split("\n\n").map((paragraph, index) => {
                    if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                      return (
                        <h3 key={index} className="font-sans font-bold text-xl text-[#1a1a1a] mb-4">
                          {paragraph.replace(/\*\*/g, "")}
                        </h3>
                      )
                    }
                    return (
                      <p key={index} className="text-[#333] leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") }} />
                    )
                  })}
                </div>
              </div>
            )}

            {/* Internal Links to Nearby Towns */}
            {townData.nearbyTowns && townData.nearbyTowns.length > 0 && (
              <div className="mt-12 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="font-sans font-bold text-xl text-[#1a1a1a] mb-4">
                  Nearby Service Areas
                </h3>
                <p className="text-[#666] mb-4">
                  We also provide 24/7 mobile truck and tire repair to these nearby communities:
                </p>
                <div className="flex flex-wrap gap-3">
                  {townData.nearbyTowns.map((nearbyTown) => (
                    <Link
                      key={nearbyTown.slug}
                      href={`/${nearbyTown.slug}`}
                      className="inline-flex items-center gap-1 bg-[#f5f5f5] hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg font-semibold text-[#333] transition-all duration-200"
                    >
                      {nearbyTown.name}, GA
                      <ArrowRight size={14} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Comprehensive Service Area — Home Base Only */}
        {isHomeBase && (
          <section className="py-16 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="text-center mb-12">
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-4">
                  Our South Georgia Service Area
                </h2>
                <p className="text-[#666] max-w-2xl mx-auto">
                  From our central Unadilla home base at I-75 Exit 121, we dispatch 24/7 mobile truck and tire repair across all of these communities. Click any town for local service details.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { slug: "unadilla", note: "Home Base — Full-Service Shop" },
                  { slug: "elko" },
                  { slug: "byromville" },
                  { slug: "vienna" },
                  { slug: "hawkinsville" },
                  { slug: "perry" },
                  { slug: "warner-robins" },
                  { slug: "montezuma" },
                  { slug: "cordele" },
                ].map(({ slug, note }) => {
                  const t = TOWNS[slug]
                  return (
                    <Link
                      key={slug}
                      href={`/${slug}`}
                      className="group flex flex-col bg-[#f5f5f5] hover:bg-[#1a1a1a] rounded-xl p-6 border border-gray-200 transition-all duration-200"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-sans font-bold text-xl text-[#1a1a1a] group-hover:text-white transition-colors">
                          {t.name}, GA
                        </h3>
                        <ArrowRight size={18} className="text-primary group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="flex items-center gap-2 text-sm text-[#666] group-hover:text-gray-300 transition-colors mb-1">
                        <MapPin size={14} className="text-primary" />
                        {note ? note : `${t.miles} miles • ~${t.distance} min via ${t.highway}`}
                      </div>
                      <span className="text-sm text-[#666] group-hover:text-gray-300 transition-colors">
                        {t.county} County
                      </span>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        )}

        {/* Fleet Maintenance — Home Base Only */}
        {isHomeBase && (
          <section className="py-16 md:py-20 bg-[#1a1a1a] text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-5">
                    <Truck size={16} />
                    Fleet Maintenance Programs
                  </div>
                  <h2 className="font-sans font-bold text-2xl md:text-3xl mb-4 text-balance">
                    Keep Your Whole Fleet Rolling — On One Account
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    From owner-operators to multi-truck fleets across Dooly County and South Georgia,
                    we build preventive maintenance programs around your routes and your budget. Fewer
                    breakdowns, predictable costs, and one shop that knows every truck in your lineup.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    Set up scheduled service, priority dispatch, and consolidated account billing.
                    We keep detailed records on each vehicle so nothing slips through the cracks —
                    and your trucks stay DOT-compliant and on the road.
                  </p>
                  <a
                    href="tel:4782447008"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider px-7 py-3.5 rounded-lg transition-all duration-200 hover:scale-105"
                  >
                    <Phone size={18} />
                    Set Up a Fleet Account
                  </a>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: CalendarClock,
                      title: "Scheduled PM Service",
                      desc: "Routine oil, brake, and tire service planned around your delivery windows.",
                    },
                    {
                      icon: Truck,
                      title: "Priority Dispatch",
                      desc: "Fleet accounts jump the line for 24/7 emergency roadside response.",
                    },
                    {
                      icon: ClipboardCheck,
                      title: "DOT Inspections",
                      desc: "Stay compliant with on-site inspections and documented repair records.",
                    },
                    {
                      icon: Wallet,
                      title: "Account Billing",
                      desc: "Consolidated monthly invoicing with per-vehicle cost tracking.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-5">
                      <item.icon size={24} className="text-primary mb-3" aria-hidden="true" />
                      <h3 className="font-sans font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Distance & Directions + Map — not shown on home base */}
        {!isHomeBase && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-6">
                  Distance &amp; Directions from {townData.name}
                </h2>
                <div className="space-y-4 mb-6">
                  <p className="text-lg text-[#333]">
                    <strong>From {townData.name} to Our Shop:</strong> {townData.miles} miles / ~{townData.distance} minutes via {townData.highway}
                  </p>
                  <p className="text-[#666]">
                    <strong>Mobile Service Radius:</strong> We come to you anywhere within 30 miles of Unadilla, including all of {townData.name}, {townData.county} County, and surrounding areas.
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/${townData.name},+GA/990+2nd+Street,+Unadilla,+GA+31091`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
                >
                  Get Directions on Google Maps
                  <ArrowRight size={16} />
                </a>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200">
                <iframe
                  src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&origin=${encodeURIComponent(townData.name + ", GA")}&destination=${encodeURIComponent("990 2nd Street, Unadilla, GA 31091")}&mode=driving`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Directions from ${townData.name} to On The Spot Repair Service & Tires`}
                />
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Services Table */}
        <section className="py-16 md:py-20 bg-[#f5f5f5]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center">
              Services Available in {townData.name}
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#1a1a1a] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-bold">Service</th>
                    <th className="px-6 py-4 text-left font-bold">Availability</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {townData.services.map((service, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[#1a1a1a]">{service.service}</td>
                      <td className="px-6 py-4 text-[#333]">{service.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-8 text-center">
              Frequently Asked Questions — {townData.name}, GA
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {townData.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-[#f5f5f5] rounded-xl border border-gray-200 px-6 data-[state=open]:bg-white data-[state=open]:shadow-md transition-all duration-200"
                >
                  <AccordionTrigger className="text-left font-bold text-[#1a1a1a] hover:text-primary py-5 text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#333] leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Weekly Rotating Reviews — Home Base Only */}
        {isHomeBase && <TownReviews />}

        {/* Service Area Links */}
        <section className="py-16 md:py-20 bg-[#1a1a1a] text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-white mb-8 text-center">
              We Also Serve These Communities
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {otherTowns.map((slug) => {
                const town = TOWNS[slug]
                return (
                  <Link
                    key={slug}
                    href={`/${slug}`}
                    className="bg-white/10 hover:bg-primary hover:text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-200"
                  >
                    {town.name}, GA
                  </Link>
                )
              })}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary font-bold hover:underline"
              >
                <ArrowRight size={16} className="rotate-180" />
                Back to Main Site
              </Link>
            </div>
          </div>
        </section>

        {/* Mobile CTA Sticky */}
        <div className="fixed bottom-0 left-0 right-0 bg-primary p-4 md:hidden z-50 shadow-lg">
          <a
            href="tel:4782447008"
            className="flex items-center justify-center gap-2 text-primary-foreground font-bold text-lg"
          >
            <Phone size={20} />
            Call Now: 478-244-7008
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
