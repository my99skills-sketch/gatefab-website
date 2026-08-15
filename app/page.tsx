import Link from 'next/link'
import ProcessTimeline from '@/components/ProcessTimeline'
import FAQSection from '@/components/FAQSection'
import CTABand from '@/components/CTABand'
import { products } from '@/data/products'
import { whatsappLink } from '@/lib/site-config'

const homeFaqs = [
  {
    question: 'How much does a designer gate cost in Bangalore?',
    answer:
      'Gate pricing depends on dimensions, design complexity, material, thickness, fabrication structure, finish, hardware and installation requirements. Share your opening size and design preference on WhatsApp for a custom estimate.',
  },
  {
    question: 'MS vs SS gate — which is better?',
    answer:
      'MS offers strength and design flexibility at a lower cost; SS offers corrosion resistance and lower long-term maintenance. The right choice depends on your budget, design and site exposure.',
  },
  {
    question: 'Can I see a 3D design before fabrication?',
    answer: 'Yes — every Gatefab gate is visualized in 3D so you can review the design before manufacturing begins.',
  },
  {
    question: 'Does Gatefab install the gate as well?',
    answer: 'Yes — professional installation at your site is part of the Gatefab process, following fabrication and finishing.',
  },
]

const gateCategories = products.filter((p) =>
  ['designer-gates-bangalore', 'laser-cut-gates-bangalore', 'villa-gates-bangalore', 'ms-gates-bangalore', 'ss-gates-bangalore', 'sliding-gates-bangalore', 'swing-gates-bangalore'].includes(
    p.slug
  )
)

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-14 md:pt-20 pb-16 grid lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-6">
          <div className="eyebrow mb-5">Premium Designer Gates · Bangalore</div>
          <h1 className="text-5xl md:text-6xl leading-[1.05] mb-6">
            Premium Designer Gates for Modern Bangalore Villas
          </h1>
          <p className="text-lg text-ink/70 leading-relaxed mb-8 max-w-xl">
            Custom-designed, precision-fabricated architectural gates engineered for villas,
            independent homes and premium properties across Bangalore.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary">Design My Gate</Link>
            <Link href="/designer-gates-bangalore" className="btn-secondary">View Gate Designs</Link>
          </div>
          <div className="flex gap-6 mt-8 text-sm font-mono text-ink/60">
            <a href={whatsappLink('Hi Gatefab, I would like to discuss a custom designer gate.')} className="hover:text-bronze">
              WhatsApp →
            </a>
            <a href="/contact" className="hover:text-bronze">Call Gatefab →</a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="blueprint-frame aspect-[4/5] md:aspect-[5/4] bg-ink/5 border border-ink/10 overflow-hidden">
  <img
    src="/images/gatefab-hero.jpg"
    alt="Premium designer gate for a modern Bangalore villa"
    className="w-full h-full object-cover"
  />
</div>
        </div>
      </section>

      {/* BRAND INTRO */}
      <section className="container-page py-20 border-t border-ink/10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl mb-6">
            More Than a Gate. It&rsquo;s the Entrance to Your Architecture.
          </h2>
          <p className="text-ink/70 leading-relaxed text-lg">
            Gatefab designs and manufactures premium architectural gates by combining contemporary
            design, precision laser cutting, engineered fabrication, premium finishing and
            professional installation into a single, disciplined process — built around your
            property, not a catalogue.
          </p>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="container-page py-16">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <div className="eyebrow mb-3">What We Build</div>
            <h2 className="text-4xl md:text-5xl">Designer Gates, Engineered for Bangalore</h2>
          </div>
          <Link href="/designer-gates-bangalore" className="text-sm font-mono underline underline-offset-4 hover:text-bronze">
            View all gate types →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gateCategories.map((p) => (
            <Link
              key={p.slug}
              href={`/${p.slug}`}
              className="group blueprint-frame block border border-ink/10 bg-paper p-6 hover:border-bronze/60 transition-colors"
            >
              <div className="aspect-square bg-ink/5 mb-5 flex items-center justify-center">
                <span className="text-ink/30 text-xs font-mono">[ image ]</span>
              </div>
              <h3 className="font-display text-xl mb-2 group-hover:text-bronze transition-colors">{p.name}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{p.metaDescription.slice(0, 90)}…</p>
            </Link>
          ))}
        </div>
      </section>

      <ProcessTimeline />

      {/* WHY GATEFAB */}
      <section className="bg-paper border-y border-ink/10">
        <div className="container-page py-24">
          <div className="eyebrow mb-3">Why Gatefab</div>
          <h2 className="text-4xl md:text-5xl mb-14 max-w-2xl">A Design Studio That Also Builds</h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            {[
              ['Design First', 'Every project begins by understanding the architecture and entrance.'],
              ['Custom Engineering', 'Every gate is designed around actual dimensions, structure and usage.'],
              ['3D Visualization', 'Customers can visualize the proposed gate before fabrication.'],
              ['Precision Laser Cutting', 'Detailed patterns are manufactured with CNC laser technology.'],
              ['Premium Fabrication', 'Engineered tube structures and precision fabrication.'],
              ['Installation', 'Complete professional installation at the project site.'],
            ].map(([title, desc]) => (
              <div key={title} className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-xl mb-2">{title}</h3>
                <p className="text-sm text-ink/60 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ARCHITECTS & BUILDERS TEASER */}
      <section className="container-page py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="blueprint-frame aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center order-2 lg:order-1">
          <span className="text-ink/40 text-sm font-mono">[ architect/builder project photo ]</span>
        </div>
        <div className="order-1 lg:order-2">
          <div className="eyebrow mb-3">For Architects & Builders</div>
          <h2 className="text-4xl mb-5">Your Design. Our Engineering. One Seamless Execution.</h2>
          <p className="text-ink/70 leading-relaxed mb-7">
            Design assistance, 3D visualization, CAD/DXF support, technical drawings, material
            samples and full fabrication-to-installation execution for architects, builders and
            developers.
          </p>
          <Link href="/architects-builders" className="btn-secondary">Become a Gatefab Partner</Link>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="container-page pb-24">
        <div className="eyebrow mb-3">Service Area</div>
        <h2 className="text-3xl mb-4">Serving Bangalore &amp; Bengaluru</h2>
        <p className="text-ink/60 max-w-2xl leading-relaxed">
          Gatefab designs, fabricates and installs across Bangalore, including Whitefield, Sarjapur
          Road, Electronic City, HSR Layout, Koramangala and surrounding areas.
          <span className="block mt-2 text-xs font-mono text-ink/40">
            [ Confirm and prune this list to areas with genuine service/project evidence — see
            data/products.ts and lib/site-config.ts serviceAreas. ]
          </span>
        </p>
      </section>

      <FAQSection faqs={homeFaqs} />
      <CTABand />
    </>
  )
}
