import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import { buildMetadata } from '@/lib/seo'
import { siteConfig, telLink, whatsappLink } from '@/lib/site-config'
import ContactForm from './ContactForm'

export const metadata: Metadata = buildMetadata({
  title: 'Contact Gatefab | Get a Custom Gate Estimate, Bangalore',
  description: 'Share your site dimensions, drawing or inspiration image and get a custom designer gate estimate from Gatefab, Bangalore.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <section className="container-page pt-8 pb-24 grid lg:grid-cols-12 gap-14">
        <div className="lg:col-span-5">
          <div className="eyebrow mb-3">Get in Touch</div>
          <h1 className="text-4xl mb-6">Let&rsquo;s Design Your Entrance</h1>
          <p className="text-ink/70 leading-relaxed mb-8">
            Share your site dimensions, drawing, elevation or inspiration image. Our team will
            help you develop a gate concept suited to your architecture.
          </p>
          <div className="space-y-3 text-sm font-mono text-ink/70 mb-8">
            <div><a href={telLink()} className="hover:text-bronze">{siteConfig.phone}</a></div>
            <div><a href={`mailto:${siteConfig.email}`} className="hover:text-bronze">{siteConfig.email}</a></div>
            <div>{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}</div>
          </div>
          <a
            href={whatsappLink('Hi Gatefab, I am interested in a custom designer gate for my property in Bangalore. I would like to discuss design, material and quotation details.')}
            className="btn-whatsapp"
          >
            WhatsApp Gatefab
          </a>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </>
  )
}
