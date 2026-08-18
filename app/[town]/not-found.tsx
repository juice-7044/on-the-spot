import Link from "next/link"
import { Phone, ArrowLeft, MapPin } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { TOWNS } from "@/lib/towns-data"

export default function NotFound() {
  const towns = Object.values(TOWNS)

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background flex flex-col">
        <div className="flex-1 flex items-center justify-center py-24 px-4">
          <div className="text-center max-w-2xl">
            <h1 className="font-sans font-black uppercase text-6xl md:text-8xl text-primary mb-4">404</h1>
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-foreground mb-4">
              Location Not Found
            </h2>
            <p className="font-sans text-muted-foreground text-lg mb-8">
              We could not find the location you are looking for. Check out our service areas below or call us directly — we cover a 30-mile radius around Unadilla, GA.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Link>
              <a
                href="tel:4782447008"
                className="inline-flex items-center justify-center gap-2 bg-[#1a1a1a] hover:bg-[#333] text-white font-bold uppercase tracking-wider px-8 py-4 rounded-lg transition-all duration-200"
              >
                <Phone size={20} />
                Call: 478-244-7008
              </a>
            </div>

            {/* Service Areas */}
            <div className="border-t border-border pt-8">
              <h3 className="font-sans font-bold text-lg text-foreground mb-4 flex items-center justify-center gap-2">
                <MapPin size={18} className="text-primary" />
                Towns We Serve
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {towns.map((town) => (
                  <Link
                    key={town.slug}
                    href={`/${town.slug}`}
                    className="bg-muted hover:bg-primary hover:text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
                  >
                    {town.name}, GA
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
