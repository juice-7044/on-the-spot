import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/towns-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL
  const lastModified = new Date()

  const towns = [
    'unadilla',
    'perry',
    'vienna',
    'hawkinsville',
    'cordele',
    'elko',
    'byromville',
    'montezuma',
  ]

  const townUrls = towns.map((town) => ({
    url: `${baseUrl}/${town}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    ...townUrls,
  ]
}
