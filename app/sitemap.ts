import { MetadataRoute } from 'next'
import { SITE_URL, TOWN_SLUGS } from '@/lib/towns-data'

const SITE_LAST_MODIFIED = new Date('2026-09-07T00:00:00.000Z')

const staticPages = [
  '',
  'services',
  'about',
  '24-7-roadside',
  'service-area',
  'hours',
  'contact',
  'careers',
  'reviews',
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = staticPages.map((path) => ({
    url: path ? `${SITE_URL}/${path}` : SITE_URL,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: path ? ('monthly' as const) : ('weekly' as const),
    priority: path ? 0.7 : 1.0,
  }))

  const townUrls = TOWN_SLUGS.map((slug) => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: SITE_LAST_MODIFIED,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [...staticUrls, ...townUrls]
}
