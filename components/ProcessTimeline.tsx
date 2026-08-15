const steps = [
  { n: '01', title: 'Consultation', desc: 'Understand your architecture, dimensions, style and requirements.' },
  { n: '02', title: 'Site Measurement', desc: 'Measure the entrance and verify site conditions.' },
  { n: '03', title: 'Design', desc: 'Develop the custom gate concept.' },
  { n: '04', title: '3D Visualization', desc: 'See how the finished gate will look before we build it.' },
  { n: '05', title: 'Engineering', desc: 'Prepare technical drawings and fabrication details.' },
  { n: '06', title: 'Laser Cutting', desc: 'Precision cutting of panels and components.' },
  { n: '07', title: 'Fabrication', desc: 'Structural fabrication and assembly.' },
  { n: '08', title: 'Finishing', desc: 'Surface preparation and selected finish.' },
  { n: '09', title: 'Installation', desc: 'Professional installation at your site.' },
  { n: '10', title: 'Handover', desc: 'Final inspection and project completion.' },
]

export default function ProcessTimeline() {
  return (
    <section className="container-page py-24">
      <div className="mb-14 max-w-2xl">
        <div className="eyebrow mb-3">Design → Manufacturing</div>
        <h2 className="text-4xl md:text-5xl mb-4">See Your Gate Before We Build It</h2>
        <p className="text-ink/70 leading-relaxed">
          Every Gatefab gate moves through the same disciplined sequence — from a conversation about
          your architecture to a 3D visualization you approve, to precision laser cutting and
          fabrication, to a professional install at your site.
        </p>
      </div>

      <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-ink/10 pt-10">
        {steps.map((step) => (
          <li key={step.n} className="border-l border-ink/10 pl-5">
            <div className="font-mono text-bronze text-sm mb-2">{step.n}</div>
            <div className="font-display text-lg mb-1.5">{step.title}</div>
            <p className="text-sm text-ink/60 leading-relaxed">{step.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
