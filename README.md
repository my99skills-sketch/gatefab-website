# Gatefab.in — Website Rebuild (V1 Foundation)

Premium Designer Gates & Architectural Metalwork — Bangalore.
Next.js 14 (App Router) + React 18 + TypeScript + Tailwind CSS.

## Honest scope — read this first

This is a **real, structured V1 codebase** covering the site architecture, SEO system,
schema, homepage, all core SEO landing pages, project template, lead form and
copy from the brief. It is **not** a finished, launch-ready site, and it was
**not** run through `npm run build` — this sandbox has no internet access, so
`npm install` can't reach the npm registry here. Run the two commands in
**"1. Verify it builds"** below the moment you have this locally; that's the
real test, and it takes about two minutes.

What's genuinely built:
- Full page structure: Home, 9 SEO landing pages (`/designer-gates-bangalore`,
  `/laser-cut-gates-bangalore`, `/villa-gates-bangalore`, `/ms-gates-bangalore`,
  `/ss-gates-bangalore`, `/sliding-gates-bangalore`, `/swing-gates-bangalore`,
  `/architectural-railings-bangalore`, `/laser-cut-facades-bangalore`), Projects
  (listing + dynamic detail page), Architects & Builders, About, Contact
  (working form UI + API route), Design Journal (listing), sitemap.xml, robots.txt, 404.
- Schema.org JSON-LD: Organization/LocalBusiness, WebSite, BreadcrumbList,
  Service, FAQPage — wired per page, not just on the homepage.
- Unique title/meta/H1/OG per page, canonical URLs, mobile-first layout,
  sticky WhatsApp button, click-to-call.
- A distinct visual identity (see "Design system" below) instead of a
  generic template look.

What's intentionally **not** built yet, and why:
- **No real photography, project data, reviews, pricing, or business
  address/phone.** The brief is explicit: never invent projects, customers,
  addresses, certifications, or prices. Every one of those is a clearly
  marked placeholder — see `lib/site-config.ts` and `data/projects.ts`.
- **No database / CMS / auth.** Content currently lives in
  `data/products.ts` and `data/projects.ts` (TypeScript, easy to edit) so
  you have a working site immediately. Swapping this for PostgreSQL + a
  headless CMS is a real, scoped follow-up — see "Next build phase" below.
- **Location pages (Whitefield, Sarjapur Road, etc.) are not generated.**
  The brief says not to publish thin location pages without genuine local
  content/projects — so this ships a working `serviceAreas` list in
  `lib/site-config.ts` and a template pattern (copy any `/xxx-gates-bangalore`
  folder) rather than 12 empty pages that would hurt SEO, not help it.
- **Design Journal articles, image optimization pipeline, GA4/GTM, and
  CRM integration** are scaffolded with clear TODOs but not implemented,
  since they depend on accounts/credentials only you have.

---

## 1. Verify it builds

```bash
npm install
npm run build
```

If `npm run build` completes with no red errors, the codebase is sound.
Then run it locally:

```bash
npm run dev
# open http://localhost:3000
```

## 2. Fill in real business data (do this before anything else)

Open **`lib/site-config.ts`** and replace every value marked `PLACEHOLDER` —
address, phone, WhatsApp number, email, social links, and the `serviceAreas`
list (remove any area without genuine service/project evidence). This file
is the single source of truth: the footer, contact page, WhatsApp links and
all Schema.org markup all read from it, so fixing it here fixes it
everywhere.

## 3. Replace placeholder imagery

Every `[ image placeholder ]` block (hero, category cards, project photos)
is a plain `<div>` marking where a real photo goes. To swap one in:

1. Drop the real photo into `public/images/` with a descriptive filename,
   e.g. `designer-laser-cut-villa-gate-bangalore.webp`.
2. Replace the placeholder `<div>...</div>` with Next's `<Image>` component:
   ```tsx
   import Image from 'next/image'
   <Image src="/images/designer-laser-cut-villa-gate-bangalore.webp"
          alt="Laser cut designer gate at a villa entrance in Sarjapur, Bangalore"
          fill className="object-cover" />
   ```
   `next/image` gives you WebP/AVIF, lazy loading and responsive sizing
   automatically — the brief's image-SEO requirements are satisfied by using
   it consistently rather than plain `<img>` tags.

## 4. Add real projects

Edit **`data/projects.ts`**. Copy the placeholder object, set
`isPlaceholder: false`, and fill in real project details. The page at
`/projects/[slug]` and the sitemap both pick up new entries automatically —
no other file needs to change.

## 5. Add more SEO location/product pages

Every page under `app/*-bangalore/` follows the same 15-line pattern reading
from `data/products.ts`. To add a new one (e.g. a genuine `/automatic-gates-bangalore`
page):

1. Add an entry to the `products` array in `data/products.ts` with a unique
   `seoTitle`, `metaDescription`, `h1`, `intro`, `highlights`, and `faqs`.
2. Copy any existing `app/xxx-gates-bangalore/page.tsx` file into a new
   folder, e.g. `app/automatic-gates-bangalore/page.tsx`, and change the
   `SLUG` constant.
3. It will automatically appear in the header nav (edit `components/Header.tsx`
   nav array) and the sitemap.

---

## Design system

Rather than a generic AI-template look (cream background + terracotta
accent, or dark mode + neon), this uses a palette and type system pulled
from the subject itself — architectural drawings and laser-cut metalwork:

- **Colors:** `ink` #1A1A18 (charcoal, primary text/dark sections), `stone`
  #EDE9E1 (warm architectural background), `paper` #FAF9F6 (card surfaces),
  `slate` #4A5568 (secondary/structural text), `bronze` #8C6A4A (signature
  accent — evokes cut/finished metal, used sparingly for CTAs and links).
- **Type:** Fraunces (display serif, architectural gravitas) for headings,
  Inter for body text, IBM Plex Mono for labels, specs and captions — the
  monospace reinforces the "technical drawing" feel for dimensions, FAQs
  eyebrows and process step numbers.
- **Signature motif:** `.blueprint-frame` — thin bronze corner brackets on
  hero/project imagery, borrowed from technical drawing annotation marks,
  used consistently instead of a generic drop-shadow or rounded card.

All defined in `tailwind.config.ts` and `app/globals.css`.

---

## Next build phase (not in this delivery)

In priority order for making this genuinely production-ready:

1. **CMS/database.** Stand up PostgreSQL + Prisma (or a headless CMS like
   Sanity/Payload) with tables/collections for `products`, `projects`,
   `locations`, `blog_posts`, `faqs`, `testimonials`, `leads` — mirroring
   the shapes already used in `data/products.ts` / `data/projects.ts`, so
   the migration is a data-layer swap, not a rewrite.
2. **Lead pipeline.** Wire `app/api/contact/route.ts` to that database plus
   an email/WhatsApp notification (the TODO comments in that file spell out
   the exact steps).
3. **Real photography and copy review** for every page, especially the
   About page and product highlight lists — the copy here is a solid
   starting draft grounded in the brief, not final marketing copy.
4. **Genuine location pages**, one at a time, only once you have real
   project photos/evidence for that area.
5. **Design Journal articles** — write the ~11 planned articles listed on
   `/design-journal`, each as its own page with Article schema, following
   the AEO pattern from the brief (question → direct answer → detail).
6. **Analytics** — add GA4/GTM script via `next/script`, track WhatsApp
   clicks, phone clicks, and form submissions as events.
7. **Migration/redirects** — crawl the current gatefab.in, list every
   indexed URL, and add 301s in `next.config.js` `redirects()` for any URL
   that's changing, so existing SEO equity isn't lost.

---

## Deploy to Vercel (recommended, fastest path)

1. Push this project to a GitHub repository.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: Next.js (auto-detected). No config needed for V1
   (no database yet).
4. Add environment variables from `.env.example` once you have real values
   (not required for the site to deploy — only for the lead pipeline).
5. Deploy. Then in **Vercel → Domains**, add `gatefab.in` and follow the
   DNS instructions Vercel gives you (usually an A record + CNAME at your
   domain registrar).
6. Once live, submit `https://gatefab.in/sitemap.xml` in Google Search
   Console and verify the domain there.

Any Node-hosting platform (Render, Railway, a VPS with PM2) works the same
way: `npm run build` then `npm run start`.
