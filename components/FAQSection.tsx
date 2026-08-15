export default function FAQSection({
  faqs,
  title = 'Frequently Asked Questions',
}: {
  faqs: { question: string; answer: string }[]
  title?: string
}) {
  if (!faqs.length) return null
  return (
    <section className="container-page py-20">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow mb-3 text-center">FAQ</div>
        <h2 className="text-3xl md:text-4xl text-center mb-12">{title}</h2>
        <div className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {faqs.map((f) => (
            <details key={f.question} className="group py-5">
              <summary className="flex justify-between items-center cursor-pointer list-none font-display text-lg">
                {f.question}
                <span className="text-bronze font-mono text-sm group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-ink/70 leading-relaxed text-sm">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
