import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container-page py-32 text-center">
      <div className="eyebrow mb-4">404</div>
      <h1 className="text-4xl mb-5">This page hasn&rsquo;t been built yet.</h1>
      <p className="text-ink/60 mb-8 max-w-md mx-auto">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Try one of our gate categories, or
        head back home.
      </p>
      <Link href="/" className="btn-primary">Back to Home</Link>
    </section>
  )
}
