import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'
import { buildMetadata } from '@/lib/seo'

export const metadata: Metadata = buildMetadata({
  title: 'About Gatefab | Premium Designer Gates & Architectural Metalwork, Bangalore',
  description: 'Gatefab designs and manufactures premium designer gates and architectural metalwork for villas and premium properties across Bangalore.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]} />
      <section className="container-page pt-8 pb-20 max-w-3xl">
        <div className="eyebrow mb-3">About Gatefab</div>
        <h1 className="text-5xl mb-8">Designed for Villas. Engineered for Architecture. Built to Last.</h1>
        <p className="text-ink/70 leading-relaxed text-lg mb-6">
          Gatefab designs and manufactures premium architectural gates for villas, independent
          homes and premium properties across Bangalore — combining design, 3D visualization,
          engineering, precision laser cutting, fabrication, finishing and installation into one
          disciplined process.
        </p>
        <p className="text-ink/70 leading-relaxed mb-6">
          Gatefab works directly with homeowners, and partners with architects, interior
          designers, builders and developers on villa, residential and select commercial and
          hospitality projects.
        </p>
        <div className="mt-10 p-6 border border-bronze/30 bg-bronze/5 text-sm font-mono text-ink/60">
          ⚠️ Placeholder note: add Gatefab&rsquo;s real founding story, years active, team
          background and any genuine certifications here. Do not publish invented history, years,
          awards or certifications — per the brief&rsquo;s non-negotiable rules.
        </div>
      </section>
      <CTABand />
    </>
  )
}
