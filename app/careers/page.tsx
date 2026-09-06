import type { Metadata } from "next"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CareersPage, { CareersJsonLd } from "@/components/careers-page"

export const metadata: Metadata = {
  title: "We're Hiring | Automotive & Diesel Mechanic | On The Spot Repair",
  description: "Join On The Spot Repair Service & Tires in Unadilla, GA. We're hiring an Automotive & Diesel Mechanic with $25–$35/hr pay and steady work.",
  alternates: { canonical: "/careers" },
  openGraph: { title: "We're Hiring | On The Spot Repair", description: "Bring your skills to a growing independent repair shop in Unadilla, GA.", url: "/careers", type: "website" },
}

export default function CareersRoute() {
  return <><CareersJsonLd /><Navbar /><CareersPage /><Footer /></>
}
