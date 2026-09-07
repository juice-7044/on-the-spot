import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CareersPage, { CareersJsonLd } from '@/components/careers-page'

export const metadata: Metadata = {
  title: "We're Hiring | Automotive & Diesel Mechanic | On The Spot Repair",
  description: "Join On The Spot Repair Service & Tires in Unadilla, GA. We're hiring mechanics and tire technicians for steady shop and mobile work.",
  alternates: { canonical: '/careers' },
  openGraph: {
    title: "We're Hiring | On The Spot Repair",
    description: 'Bring your skills to a growing independent repair shop in Unadilla, GA.',
    url: '/careers',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'On The Spot Repair Service & Tires — careers in Unadilla, GA' }],
  },
}

export default function CareersRoute() {
  return (
    <>
      <CareersJsonLd />
      <Navbar />
      <CareersPage />
      <Footer />
    </>
  )
}
