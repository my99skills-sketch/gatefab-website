import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'

const columns = [
  {
    title: 'Gates',
    links: [
      { label: 'Designer Gates', href: '/designer-gates-bangalore' },
      { label: 'Laser Cut Gates', href: '/laser-cut-gates-bangalore' },
      { label: 'Villa Gates', href: '/villa-gates-bangalore' },
      { label: 'MS Gates', href: '/ms-gates-bangalore' },
      { label: 'SS Gates', href: '/ss-gates-bangalore' },
      { label: 'Sliding Gates', href: '/sliding-gates-bangalore' },
      { label: 'Swing Gates', href: '/swing-gates-bangalore' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Projects', href: '/projects' },
      { label: 'Architects & Builders', href: '/architects-builders' },
      { label: 'Design Journal', href: '/design-journal' },
      { label: 'About Gatefab', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container-page py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="font-display text-2xl mb-3">GATEFAB</div>
          <p className="text-sm text-paper/60 leading-relaxed">{siteConfig.tagline}</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <div className="eyebrow text-bronze-light mb-4">{col.title}</div>
            <ul className="space-y-2 text-sm text-paper/70">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-paper transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <div className="eyebrow text-bronze-light mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-paper/70">
            <li>{siteConfig.address.addressLocality}, {siteConfig.address.addressRegion}</li>
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-6 text-xs text-paper/40 text-center">
        © {new Date().getFullYear()} Gatefab. Premium Designer Gates & Architectural Metalwork, Bangalore.
      </div>
    </footer>
  )
}
