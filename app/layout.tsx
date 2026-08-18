import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL, GBP_RATING, GBP_REVIEW_COUNT } from '@/lib/towns-data'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "On The Spot Repair Service & Tires",
  "alternateName": "On The Spot Repair Services & Tires, Inc.",
  "description": "Professional mechanic and tire shop serving cars, semi trucks, trailers, refrigerated reefers, RVs, and buses. Computer diagnostics and 24/7 mobile roadside assistance.",
  "url": "https://www.onthespotrepairservicestires.com",
  "telephone": "+1-478-244-7008",
  "email": "onthespotrepair23@gmail.com",
  "priceRange": "$-$$$",
  "image": "https://www.onthespotrepairservicestires.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "990 2nd Street",
    "addressLocality": "Unadilla",
    "addressRegion": "GA",
    "postalCode": "31091",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 32.26042556762695,
    "longitude": -83.7447509765625
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "17:00",
      "description": "Shop walk-in hours"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
      "description": "24/7 emergency roadside and tire service"
    }
  ],
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 32.26042556762695,
      "longitude": -83.7447509765625
    },
    "geoRadius": "80467"
  },
  "serviceType": [
    "Auto Repair",
    "Tire Service",
    "Semi Truck Repair",
    "Trailer Repair",
    "Refrigerated Reefer Repair",
    "RV Repair",
    "Bus Repair",
    "Computer Diagnostics",
    "Mobile Roadside Assistance"
  ],
  "paymentAccepted": "Cash, Credit Card, Debit Card",
  "currenciesAccepted": "USD",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": GBP_RATING.toFixed(1),
    "reviewCount": String(GBP_REVIEW_COUNT),
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/OntheSpotRepairServices/"
  ]
}

// Brand entity + site search schema so brand searches resolve to the homepage.
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "On The Spot Repair Service & Tires",
  "alternateName": "On The Spot Repair Services & Tires, Inc.",
  "url": SITE_URL,
  "logo": `${SITE_URL}/logo.png`,
  "image": `${SITE_URL}/og-image.png`,
  "telephone": "+1-478-244-7008",
  "email": "onthespotrepair23@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "990 2nd Street",
    "addressLocality": "Unadilla",
    "addressRegion": "GA",
    "postalCode": "31091",
    "addressCountry": "US"
  },
  "sameAs": [
    "https://www.facebook.com/OntheSpotRepairServices/"
  ]
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "On The Spot Repair Service & Tires",
  "url": SITE_URL
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Tire Repair & Truck Repair in Unadilla, GA - On The Spot Repair Services & Tires',
  description:
    'Truck repair near me & tire repair near me in Unadilla, GA. Full-service mechanic for semis & cars. 24/7 emergency service. Engine rebuilds to flat tires.',
  keywords: [
    'mechanic Unadilla GA',
    'tire shop Unadilla',
    'semi truck repair Georgia',
    'RV repair Georgia',
    'mobile roadside assistance',
    'computer diagnostics truck',
    'trailer repair Georgia',
    'reefer repair Georgia',
    '24 hour roadside assistance Georgia',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'On The Spot Repair Services & Tires',
    description:
      'Full-service mechanic and tire shop serving cars, semi trucks, trailers, RVs, and buses in Unadilla, GA. 24/7 mobile roadside assistance.',
    url: SITE_URL,
    siteName: 'On The Spot Repair Service & Tires',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'On The Spot Repair Service & Tires — 24/7 Mobile Truck & Tire Repair, Unadilla, GA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On The Spot Repair Services & Tires',
    description:
      '24/7 mobile truck & tire repair in Unadilla, GA and across the I-75 corridor. Semis, trailers, reefers, RVs & cars.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-V0KTK15E0R"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V0KTK15E0R');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
