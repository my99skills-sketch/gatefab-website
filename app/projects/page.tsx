import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'
import { buildMetadata } from '@/lib/seo'
import { projects } from '@/data/projects'

export const metadata: Metadata = buildMetadata({
  title: 'Gatefab Projects | Designer Gates Across Bangalore',
  description: 'Genuine Gatefab projects — designer gates, laser-cut gates and architectural metalwork completed for villas and homes across Bangalore.',
  path: '/projects',
})

export default function ProjectsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }]} />
      <section className="container-page pt-8 pb-16">
        <div className="eyebrow mb-3">Project Portfolio</div>
        <h1 className="text-5xl mb-6 max-w-2xl">Gates We&rsquo;ve Designed and Built</h1>
        <p className="text-ink/70 max-w-2xl leading-relaxed mb-14">
          Every project below is a real Gatefab installation — location, material, finish and
          design concept as delivered. Only genuine, verified work is published here.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block border border-ink/10 hover:border-bronze/60 transition-colors">
              <div className="blueprint-frame aspect-[4/3] bg-ink/5 flex items-center justify-center">
                <span className="text-ink/30 text-xs font-mono px-4 text-center">[ project photo ]</span>
              </div>
              <div className="p-5">
                <div className="text-xs font-mono text-ink/40 mb-1">{p.location}</div>
                <h2 className="font-display text-lg">
                  {p.isPlaceholder ? 'Example project template' : p.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        {projects.every((p) => p.isPlaceholder) && (
          <p className="mt-10 text-xs font-mono text-ink/40 max-w-2xl">
            ⚠️ This portfolio currently shows only the placeholder template. Add real, verified
            projects in data/projects.ts (or via the CMS once connected) before launch — see
            README.md.
          </p>
        )}
      </section>
      <CTABand />
    </>
  )
}
