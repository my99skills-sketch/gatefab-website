import Link from 'next/link'
import WhatsAppButton from './WhatsAppButton'
import { whatsappLink } from '@/lib/site-config'

export default function CTABand({
  heading = "Let's Design Your Entrance",
  body = 'Share your site dimensions, drawing, elevation or inspiration image. Our team will help you develop a gate concept suited to your architecture.',
  whatsappMessage = 'Hi Gatefab, I am interested in a custom designer gate for my property in Bangalore. I would like to discuss design, material and quotation details.',
}: {
  heading?: string
  body?: string
  whatsappMessage?: string
}) {
  return (
    <section className="bg-ink text-paper">
      <div className="container-page py-24 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl mb-5">{heading}</h2>
        <p className="text-paper/70 leading-relaxed mb-9">{body}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="btn-primary bg-bronze hover:bg-bronze-dark">
            Start My Gate Design
          </Link>
          <a href={whatsappLink(whatsappMessage)} className="btn-whatsapp">
            WhatsApp Gatefab
          </a>
        </div>
      </div>
    </section>
  )
}
