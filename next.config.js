/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      // Add your CDN / image host here once assets move off local /public
      // { protocol: 'https', hostname: 'cdn.gatefab.in' }
    ]
  },
  async redirects() {
    return [
      // Map old gatefab.in URLs to new URLs here once the current
      // sitemap has been crawled, e.g.:
      // { source: '/old-gate-page', destination: '/designer-gates-bangalore', permanent: true },
    ]
  },
}
module.exports = nextConfig
