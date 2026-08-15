import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import CTABand from '@/components/CTABand'
import { buildMetadata, JsonLd, breadcrumbSchema } from '@/lib/seo'
import { getProjectBySlug, projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)
  if (!project) return {}
  return buildMetadata({
    title: `${project.title} | Gatefab Projects`,
    description: `${project.gateType} in ${project.location} — ${project.material}, ${project.finish}. A Gatefab project.`,
    path: `/projects/${project.slug}`,
  })
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  if (!project) return notFound()

  const specs: [string, string][] = [
    ['Location', project.location],
    ['Property Type', project.propertyType],
    ['Gate Type', project.gateType],
    ['Material', project.material],
    ['Finish', project.finish],
  ]

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: project.title, path: `/projects/${project.slug}` }])} />
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Projects', path: '/projects' }, { name: project.title, path: `/projects/${project.slug}` }]} />

      {project.isPlaceholder && (
        <div className="container-page mt-6">
          <div className="bg-bronze/10 border border-bronze/30 text-sm font-mono px-4 py-3 text-ink/70">
            ⚠️ Placeholder project — replace with real, verified project content before publishing.
          </div>
        </div>
      )}

      <section className="container-page pt-8 pb-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="eyebrow mb-4">{project.location}</div>
          <h1 className="text-4xl mb-6">{project.title}</h1>
          <p className="text-ink/70 leading-relaxed mb-8">{project.designConcept}</p>
          <div className="blueprint-frame aspect-video bg-ink/5 border border-ink/10 flex items-center justify-center">
            <span className="text-ink/30 text-xs font-mono">[ manufacturing / installation / final photos ]</span>
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="border border-ink/10 p-6">
            <div className="eyebrow mb-4">Project Specification</div>
            <dl className="space-y-3">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between text-sm border-b border-ink/10 pb-2">
                  <dt className="text-ink/50">{k}</dt>
                  <dd className="font-mono text-ink/80">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </section>
      <CTABand />
    </>
  )
}
