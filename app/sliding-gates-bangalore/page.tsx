import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ProductPageTemplate from '@/components/ProductPageTemplate'
import { buildMetadata } from '@/lib/seo'
import { getProductBySlug } from '@/data/products'

const SLUG = 'sliding-gates-bangalore'

export function generateMetadata(): Metadata {
  const product = getProductBySlug(SLUG)
  if (!product) return {}
  return buildMetadata({ title: product.seoTitle, description: product.metaDescription, path: `/${SLUG}` })
}

export default function Page() {
  const product = getProductBySlug(SLUG)
  if (!product) return notFound()
  return <ProductPageTemplate product={product} />
}
