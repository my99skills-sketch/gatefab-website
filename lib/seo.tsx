import type { Metadata } from 'next'
import { siteConfig } from './site-config'

/**
 * Central metadata builder — guarantees every page ships a unique
 * title, description, canonical URL and Open Graph block, per the
 * "no thin/duplicate pages" requirement in the SEO brief.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = '/images/og-default.jpg',
  noindex = false,
}: {
  title: string
  description: string
  path: string
  image?: string
  noindex?: boolean
}): Metadata {
  const url = `${siteConfig.url}${path}`
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brandName,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  }
}

/** Organization + LocalBusiness schema — injected once in the root layout. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    description:
      'Gatefab designs and manufactures premium designer gates and architectural metalwork for villas, independent homes and premium properties in Bangalore.',
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: siteConfig.serviceAreas.map((a) => ({ '@type': 'Place', name: `${a}, Bengaluru` })),
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    priceRange: '$$$',
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.brandName,
    url: siteConfig.url,
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }
}

export function productServiceSchema({
  name,
  description,
  image,
}: {
  name: string
  description: string
  image?: string
}) {
  // Service schema is used (not Product) because gates are custom-fabricated,
  // not off-the-shelf SKUs — this avoids implying a fixed catalogue price.
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    image,
    provider: { '@type': 'HomeAndConstructionBusiness', name: siteConfig.brandName, url: siteConfig.url },
    areaServed: { '@type': 'City', name: 'Bengaluru' },
  }
}

/** Renders any JSON-LD object as a script tag. */
export function JsonLd({ data }: { data: object }) {
  return (
    // eslint-disable-next-line react/no-danger
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}
