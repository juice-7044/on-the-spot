import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import EmergencyMarquee from "@/components/emergency-marquee"
import About from "@/components/about"
import Services from "@/components/services"
import Gallery from "@/components/gallery"
import RoadsideAssistance from "@/components/roadside-assistance"
import RoadsideCta from "@/components/roadside-cta"
import Reviews from "@/components/reviews"
import FAQ from "@/components/faq"
import ServiceArea from "@/components/service-area"
import HoursContact from "@/components/hours-contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <RoadsideAssistance />
      <RoadsideCta />
      <Reviews />
      <FAQ />
      <ServiceArea />
      <EmergencyMarquee />
      <HoursContact />
      <Footer />
    </main>
  )
}
