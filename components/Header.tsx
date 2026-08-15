import Link from 'next/link'
import { siteConfig, telLink, whatsappLink } from '@/lib/site-config'

const nav = [
  {
    label: 'Gates',
    href: '/designer-gates-bangalore',
    children: [
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
    label: 'Railings & Facades',
    href: '/architectural-railings-bangalore',
    children: [
      { label: 'Architectural Railings', href: '/architectural-railings-bangalore' },
      { label: 'Laser Cut Facades', href: '/laser-cut-facades-bangalore' },
    ],
  },
  { label: 'Projects', href: '/projects' },
  { label: 'Architects & Builders', href: '/architects-builders' },
  { label: 'Design Journal', href: '/design-journal' },
  { label: 'About', href: '/about' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-stone/95 backdrop-blur border-b border-ink/10">
      <div className="container-page flex items-center justify-between h-20">
        <Link href="/" className="font-display text-2xl tracking-tight">
          GATEFAB
        </Link>

        <nav className="hidden lg:flex items-center gap-8 font-body text-sm">
          {nav.map((item) => (
            <div key={item.label} className="relative group">
              <Link href={item.href} className="hover:text-bronze transition-colors py-2 inline-block">
                {item.label}
              </Link>
              {item.children && (
                <div className="absolute left-0 top-full hidden group-hover:block bg-paper border border-ink/10 shadow-lg min-w-[220px] py-2">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block px-4 py-2 text-sm hover:bg-stone hover:text-bronze transition-colors"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={telLink()} className="text-sm font-mono text-ink/80 hover:text-bronze">
            {siteConfig.phone}
          </a>
          <Link href="/contact" className="btn-primary text-xs px-5 py-2.5">
            Design My Gate
          </Link>
        </div>

        {/* Mobile: kept intentionally minimal — a real build should wire this
            to a slide-out menu component with the same nav data above. */}
        <a
          href={whatsappLink(
            'Hi Gatefab, I am interested in a custom designer gate for my property in Bangalore. I would like to discuss design, material and quotation details.'
          )}
          className="md:hidden btn-whatsapp text-xs px-4 py-2.5"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
