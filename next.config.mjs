/** @type {import('next').NextConfig} */
const contentSecurityPolicy = `
  default-src 'self';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  object-src 'none';
  script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://va.vercel-scripts.com https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com;
  style-src 'self' 'unsafe-inline' https://widgets.leadconnectorhq.com https://stcdn.leadconnectorhq.com;
  img-src 'self' data: blob: https://hebbkx1anhila5yf.public.blob.vercel-storage.com https://www.google-analytics.com https://widgets.leadconnectorhq.com https://storage.googleapis.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com;
  font-src 'self' data: https://widgets.leadconnectorhq.com https://stcdn.leadconnectorhq.com;
  connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://vitals.vercel-insights.com https://widgets.leadconnectorhq.com https://services.leadconnectorhq.com https://stcdn.leadconnectorhq.com https://backend.leadconnectorhq.com wss://backend.leadconnectorhq.com;
  frame-src https://www.google.com https://maps.google.com https://widgets.leadconnectorhq.com;
  media-src 'self' blob: https://backend.leadconnectorhq.com https://services.leadconnectorhq.com;
  upgrade-insecure-requests;
`.replace(/\s{2,}/g, ' ').trim()

const securityHeaders = [
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(self "https://widgets.leadconnectorhq.com"), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
]

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // Legacy section URLs now live as homepage anchors. These 301s preserve any
  // inbound links and keep the old /services, /about etc. from 404ing.
  async redirects() {
    return [
      { source: '/services', destination: '/#services', permanent: true },
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/24-7-roadside', destination: '/#roadside', permanent: true },
      { source: '/service-area', destination: '/#service-area', permanent: true },
      { source: '/hours', destination: '/#hours', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
      { source: '/reviews', destination: '/#reviews', permanent: true },
      // Lilly page was retired in the town-page redesign; send it to the
      // nearest active Dooly County town page instead of a 404.
      { source: '/lilly', destination: '/unadilla', permanent: true },
    ]
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
}

export default nextConfig
