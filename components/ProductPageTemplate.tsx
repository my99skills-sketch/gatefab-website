import Link from 'next/link'
import Breadcrumbs from './Breadcrumbs'
import FAQSection from './FAQSection'
import CTABand from './CTABand'
import { JsonLd, breadcrumbSchema, faqSchema, productServiceSchema } from '@/lib/seo'
import { whatsappLink } from '@/lib/site-config'
import type { Product } from '@/data/products'
import { products } from '@/data/products'

export default function ProductPageTemplate({ product }: { product: Product }) {
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3)
  const waMessage = `Hi Gatefab, I am interested in a ${product.name}. Please share designs and quotation details.`

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: product.name, path: `/${product.slug}` }])} />
      <JsonLd data={productServiceSchema({ name: product.name, description: product.metaDescription })} />
      <JsonLd data={faqSchema(product.faqs)} />

      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: product.name, path: `/${product.slug}` }]} />

      <section className="container-page pt-8 pb-16 grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-4">{product.name} · Bangalore</div>
          <h1 className="text-4xl md:text-5xl leading-tight mb-6">{product.h1}</h1>
          <p className="text-lg text-ink/70 leading-relaxed mb-8">{product.intro}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Get a Custom Gate Estimate</Link>
            <a href={whatsappLink(waMessage)} className="btn-whatsapp">WhatsApp Gatefab</a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="blueprint-frame aspect-[4/5] bg-ink/5 border border-ink/10 flex items-center justify-center">
            <span className="text-ink/30 text-xs font-mono px-6 text-center">
              [ {product.name} project photo — replace with genuine Gatefab work ]
            </span>
          </div>
        </div>
      </section>

      <section className="container-page py-16 border-t border-ink/10">
        <h2 className="text-3xl mb-8">What Sets Gatefab {product.name} Apart</h2>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
          {product.highlights.map((h) => (
            <li key={h} className="flex gap-3 items-start text-ink/75">
              <span className="text-bronze font-mono text-sm mt-0.5">—</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-ink text-paper">
        <div className="container-page py-16">
          <div className="eyebrow mb-3 text-bronze-light">Pricing</div>
          <h2 className="text-3xl mb-4">Every Gate Is Priced on Its Own Design</h2>
          <p className="text-paper/70 leading-relaxed max-w-2xl mb-7">
            Gate pricing depends on dimensions, design complexity, material, thickness, fabrication
            structure, finish, hardware and installation requirements. Share your opening size and
            design preference for a custom estimate.
          </p>
          <a href={whatsappLink(waMessage)} className="btn-whatsapp">Get a Custom Gate Estimate</a>
        </div>
      </section>

      <FAQSection faqs={product.faqs} title={`${product.name} — Frequently Asked Questions`} />

      <section className="container-page py-16 border-t border-ink/10">
        <h2 className="text-2xl mb-8">Explore Related Categories</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {related.map((r) => (
            <Link key={r.slug} href={`/${r.slug}`} className="border border-ink/10 p-5 hover:border-bronze/60 transition-colors">
              <div className="font-display text-lg mb-1">{r.name}</div>
              <div className="text-xs text-ink/50">View category →</div>
            </Link>
          ))}
        </div>
      </section>

      <CTABand
        heading="Let's Design Your Entrance"
        body="Share your site dimensions, drawing, elevation or inspiration image. Our team will help you develop a gate concept suited to your architecture."
        whatsappMessage={waMessage}
      />
    </>
  )
}
