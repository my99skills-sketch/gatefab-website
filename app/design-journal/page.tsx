import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'Design Journal | Gate Design Ideas & Guides | Gatefab',
  description: 'Gatefab\u2019s Design Journal — modern villa gate design ideas, material guides and buying guides for Bangalore homeowners, architects and builders.',
  path: '/design-journal',
})

// Planned article topics from the brief. Wire this list to the CMS/DB once
// connected (see README "Content model") — each entry should become a
// real /design-journal/[slug] article page with unique metadata,
// Article schema and internal links to relevant product/project pages.
const plannedArticles = [
  { category: 'Gate Design', title: 'Modern Villa Gate Designs for Bangalore Homes' },
  { category: 'Gate Design', title: 'How to Choose a Main Gate for a Modern Villa' },
  { category: 'Gate Design', title: 'Laser Cut Gate Design Ideas' },
  { category: 'Materials', title: 'MS vs SS Gates: Which Should You Choose?' },
  { category: 'Materials', title: 'How to Protect MS Gates From Rust' },
  { category: 'Materials', title: 'Powder Coating vs Paint for Outdoor Gates' },
  { category: 'Buying Guide', title: 'How Much Does a Designer Gate Cost in Bangalore?' },
  { category: 'Buying Guide', title: 'How to Measure a Main Gate Opening' },
  { category: 'Buying Guide', title: 'Sliding vs Swing Gate: What Suits Your Site?' },
  { category: 'Architecture', title: 'Matching Gates With Villa Facades' },
  { category: 'Architecture', title: 'Using Laser Cut Panels in Architecture' },
]

export default function DesignJournalPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Design Journal', path: '/design-journal' }]} />
      <section className="container-page pt-8 pb-16">
        <div className="eyebrow mb-3">Design Journal</div>
        <h1 className="text-5xl mb-6 max-w-2xl">Ideas, Guides &amp; Notes on Architectural Gates</h1>
        <p className="text-ink/70 max-w-2xl leading-relaxed mb-14">
          Practical guides on gate design, materials and buying decisions — written to answer real
          questions from Bangalore homeowners, architects and builders.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plannedArticles.map((a) => (
            <div key={a.title} className="border border-ink/10 p-6">
              <div className="text-xs font-mono text-bronze mb-2">{a.category}</div>
              <h2 className="font-display text-lg leading-snug">{a.title}</h2>
              <p className="mt-3 text-xs font-mono text-ink/30">Article page — to be published</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </>
  )
}
