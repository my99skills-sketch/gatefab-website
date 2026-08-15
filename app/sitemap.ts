import type { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { products } from '@/data/products'
import { projects } from '@/data/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ['/', '/projects', '/architects-builders', '/about', '/contact', '/design-journal']

  const productPaths = products.map((p) => `/${p.slug}`)
  const projectPaths = projects.filter((p) => !p.isPlaceholder).map((p) => `/projects/${p.slug}`)

  return [...staticPaths, ...productPaths, ...projectPaths].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.7,
  }))
}
