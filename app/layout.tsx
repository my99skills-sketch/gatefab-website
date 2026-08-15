import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { buildMetadata, JsonLd, organizationSchema, websiteSchema } from '@/lib/seo'

const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const plexMono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' })

export const metadata: Metadata = {
  ...buildMetadata({
    title: 'Gatefab | Premium Designer Gates & Architectural Metalwork, Bangalore',
    description:
      'Gatefab designs and manufactures premium designer gates, laser-cut gates and architectural metalwork for villas and premium homes across Bangalore.',
    path: '/',
  }),
  metadataBase: new URL('https://gatefab.in'),
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton message="Hi Gatefab, I am interested in a custom designer gate for my property in Bangalore. I would like to discuss design, material and quotation details." />
      </body>
    </html>
  )
}
