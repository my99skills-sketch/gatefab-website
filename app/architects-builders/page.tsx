import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'
import FAQSection from '@/components/FAQSection'
import { buildMetadata } from '@/lib/seo'
import { whatsappLink } from '@/lib/site-config'

export const metadata: Metadata = buildMetadata({
  title: 'Gatefab for Architects & Builders | Design + Engineering + Fabrication',
  description: 'Design assistance, 3D visualization, CAD/DXF support, technical drawings, BOQ support and full fabrication-to-installation execution for architects, builders and developers.',
  path: '/architects-builders',
})

const offerings = [
  'Design assistance',
  '3D visualization',
  'CAD/DXF support',
  'Technical drawings',
  'BOQ support',
  'Material samples',
  'Fabrication',
  'Site coordination',
  'Installation',
  'Project support',
]

export default function ArchitectsBuildersPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Architects & Builders', path: '/architects-builders' }]} />
      <section className="container-page pt-8 pb-16">
        <div className="eyebrow mb-3">For Architects, Builders & Developers</div>
        <h1 className="text-5xl mb-6 max-w-2xl">Your Design. Our Engineering. One Seamless Execution.</h1>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed mb-10">
          Gatefab partners with architects, interior designers, builders and developers to execute
          designer gates, railings and facade metalwork — from concept through installation —
          without diluting the design intent along the way.
        </p>
        <a
          href={whatsappLink('Hi Gatefab, I am an architect/builder interested in partnering on a project. I would like to discuss design support and execution.')}
          className="btn-whatsapp"
        >
          Become a Gatefab Partner
        </a>
      </section>

      <section className="container-page py-16 border-t border-ink/10">
        <h2 className="text-3xl mb-8">What We Offer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {offerings.map((o) => (
            <div key={o} className="border border-ink/10 p-5 text-sm font-medium">{o}</div>
          ))}
        </div>
        <p className="mt-8 text-xs font-mono text-ink/40 max-w-xl">
          Downloadable CAD details, DXF patterns, material specifications and finish samples are
          planned as a future resource library on this page — see README &ldquo;Future
          Scalability&rdquo; section.
        </p>
      </section>

      <FAQSection
        title="Architects & Builders — FAQ"
        faqs={[
          {
            question: 'Can Gatefab work from our architectural drawings?',
            answer: 'Yes — share elevations, CAD or DXF files and the design team will develop them into a fabrication-ready gate, railing or facade design.',
          },
          {
            question: 'Does Gatefab provide BOQ support?',
            answer: 'Yes — BOQ support is available for architect and builder projects. Share your project scope on WhatsApp to discuss.',
          },
        ]}
      />
      <CTABand
        heading="Let's Discuss Your Project"
        body="Share your drawings, elevation or project brief and the Gatefab team will get back with design and engineering support."
        whatsappMessage="Hi Gatefab, I am an architect/builder interested in partnering on a project. I would like to discuss design support and execution."
      />
    </>
  )
}
