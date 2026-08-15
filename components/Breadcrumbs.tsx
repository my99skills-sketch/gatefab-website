import Link from 'next/link'

export default function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-page pt-6 text-xs font-mono text-ink/50">
      <ol className="flex flex-wrap gap-1.5 items-center">
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            {i > 0 && <span>/</span>}
            {i === items.length - 1 ? (
              <span className="text-ink/80">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-bronze">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
