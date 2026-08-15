/**
 * PRODUCT CATEGORY DATA
 * ---------------------------------------------------------------
 * This drives the SEO landing pages (/designer-gates-bangalore etc).
 * Copy, FAQs and descriptions below are template starting points
 * based on the brief — review and edit with real specification
 * details (materials, thickness options, finishes actually offered)
 * before publishing. Nothing here states a price, count or claim
 * that wasn't in the brief.
 */

export type Product = {
  slug: string
  name: string
  seoTitle: string
  metaDescription: string
  h1: string
  intro: string
  highlights: string[]
  faqs: { question: string; answer: string }[]
}

export const products: Product[] = [
  {
    slug: 'designer-gates-bangalore',
    name: 'Designer Gates',
    seoTitle: 'Designer Gates in Bangalore | Custom Villa & Laser Cut Gates | Gatefab',
    metaDescription:
      'Custom-designed gates for villas and premium homes in Bangalore. Gatefab combines design, 3D visualization, laser cutting and precision fabrication into one process.',
    h1: 'Designer Gates in Bangalore',
    intro:
      'A Gatefab designer gate starts as a concept built around your architecture, not a catalogue number. Every gate is designed to the actual dimensions, style and structure of the entrance it will sit in, then engineered, laser-cut and fabricated to match.',
    highlights: [
      'Custom design built around your entrance and architecture',
      '3D visualization before fabrication begins',
      'Precision CNC laser cutting for detailed patterns',
      'MS and SS construction options',
      'Premium finishing and professional installation',
    ],
    faqs: [
      {
        question: 'How much does a designer gate cost in Bangalore?',
        answer:
          'Gate pricing depends on dimensions, design complexity, material, thickness, fabrication structure, finish, hardware and installation requirements. Share your opening size and design preference on WhatsApp for a custom estimate.',
      },
      {
        question: 'Can Gatefab create a fully custom gate design?',
        answer:
          'Yes — every Gatefab gate begins with a design conversation about your architecture and preferences, followed by a concept and 3D visualization before fabrication.',
      },
      {
        question: 'Can I see a 3D design before fabrication?',
        answer:
          'Yes. Gatefab develops a 3D visualization of the proposed gate so you can review the design before manufacturing begins.',
      },
    ],
  },
  {
    slug: 'laser-cut-gates-bangalore',
    name: 'Laser Cut Gates',
    seoTitle: 'Laser Cut Gates in Bangalore | Precision Designer Patterns | Gatefab',
    metaDescription:
      'Precision laser-cut gates for Bangalore villas and premium homes. Detailed patterns manufactured with CNC laser technology and integrated into engineered gate structures.',
    h1: 'Laser Cut Gates in Bangalore',
    intro:
      'Laser-cut gates let Gatefab translate a design concept — geometric, floral, contemporary or architectural — into precise, repeatable metalwork. Every pattern is cut with CNC laser technology and integrated into an engineered gate frame.',
    highlights: [
      'CNC laser-cut patterns, not hand-cut approximations',
      'Design flexibility: geometric, floral, contemporary motifs',
      'Integrated into an engineered structural frame',
      'Available in MS and SS',
    ],
    faqs: [
      {
        question: 'How much does a laser cut gate cost?',
        answer:
          'Laser-cut gate pricing depends on pattern complexity, panel size, material and finish. Share your requirement on WhatsApp for an estimate.',
      },
      {
        question: 'Can Gatefab cut a custom pattern I provide?',
        answer:
          'Yes — share a reference image, elevation or drawing and the design team will develop it into a laser-cuttable pattern.',
      },
    ],
  },
  {
    slug: 'villa-gates-bangalore',
    name: 'Villa Gates',
    seoTitle: 'Villa Gates in Bangalore | Statement Entrances for Premium Homes | Gatefab',
    metaDescription:
      'Statement entrance gates designed specifically for premium villas in Bangalore — matched to villa architecture, scale and material palette.',
    h1: 'Villa Gates in Bangalore',
    intro:
      'A villa gate is the first thing anyone sees of the property. Gatefab designs villa gates as statement entrances — scaled and detailed to match the architecture, materials and proportions of the home behind them.',
    highlights: [
      'Designed to match villa architecture and materials',
      'Sliding and swing configurations',
      'Engineered for wider villa openings',
      'Coordinated with matching railings on request',
    ],
    faqs: [
      {
        question: 'What is the best material for a villa gate?',
        answer:
          'Both MS and SS are used for villa gates in Bangalore. MS offers strength and design flexibility at a lower cost with proper finishing; SS offers corrosion resistance with a premium look. The right choice depends on your design, budget and maintenance preference.',
      },
    ],
  },
  {
    slug: 'ms-gates-bangalore',
    name: 'MS Gates',
    seoTitle: 'MS Gates in Bangalore | Custom Mild Steel Designer Gates | Gatefab',
    metaDescription:
      'Strong, durable and fully customizable mild-steel gates for Bangalore homes and villas, engineered and finished by Gatefab.',
    h1: 'MS Gates in Bangalore',
    intro:
      'Mild steel gives Gatefab the structural strength and design flexibility to build large-format designer and laser-cut gates at a more accessible cost, with premium finishing to protect against the elements.',
    highlights: ['High structural strength', 'Cost-effective for larger openings', 'Wide design flexibility', 'Premium powder-coat finishing options'],
    faqs: [
      {
        question: 'How do I maintain an MS gate?',
        answer:
          'A quality powder-coat or paint finish, applied correctly, is the main protection for an MS gate. Periodic inspection of the finish and prompt touch-ups at any scratch or chip point will extend its life.',
      },
    ],
  },
  {
    slug: 'ss-gates-bangalore',
    name: 'SS Gates',
    seoTitle: 'SS Gates in Bangalore | Premium Stainless Steel Designer Gates | Gatefab',
    metaDescription:
      'Premium stainless-steel gates for contemporary Bangalore homes and villas — corrosion-resistant and finished by Gatefab.',
    h1: 'SS Gates in Bangalore',
    intro:
      'Stainless steel is chosen for its corrosion resistance and clean, contemporary finish — well suited to modern villa architecture and laser-cut designer patterns that stay looking sharp with less maintenance.',
    highlights: ['Corrosion-resistant', 'Contemporary finish', 'Lower long-term maintenance', 'Well suited to laser-cut detailing'],
    faqs: [
      {
        question: 'MS vs SS gate — which is better?',
        answer:
          'Neither is universally "better" — MS is stronger for the cost and highly flexible for design, while SS resists corrosion and needs less maintenance over time. The right choice depends on your budget, design and how exposed the gate is to weather.',
      },
    ],
  },
  {
    slug: 'sliding-gates-bangalore',
    name: 'Sliding Gates',
    seoTitle: 'Sliding Gates in Bangalore | Designer Sliding Entrance Systems | Gatefab',
    metaDescription:
      'Elegant sliding entrance gate systems engineered for wider openings — designed and fabricated by Gatefab for Bangalore villas and homes.',
    h1: 'Sliding Gates in Bangalore',
    intro:
      'Sliding gates suit wider entrances and driveways where swing clearance is limited. Gatefab engineers the track, structure and panel design together so the gate operates smoothly for years.',
    highlights: ['Suited to wide openings and driveways', 'No swing clearance required', 'Automation-ready structures', 'Custom panel and laser-cut design options'],
    faqs: [
      {
        question: 'Do you manufacture sliding gates?',
        answer: 'Yes — Gatefab designs and fabricates sliding gate systems engineered for wider Bangalore villa and home entrances.',
      },
    ],
  },
  {
    slug: 'swing-gates-bangalore',
    name: 'Swing Gates',
    seoTitle: 'Swing Gates in Bangalore | Single & Double-Leaf Designer Gates | Gatefab',
    metaDescription:
      'Single and double-leaf designer swing gates engineered and fabricated by Gatefab for premium Bangalore homes and villas.',
    h1: 'Swing Gates in Bangalore',
    intro:
      'Swing gates remain the classic entrance format for independent homes and villas with adequate clearance. Gatefab builds single and double-leaf swing gates in custom designer and laser-cut patterns.',
    highlights: ['Single and double-leaf configurations', 'Classic and contemporary design options', 'Automation-ready structures'],
    faqs: [
      {
        question: 'Do you manufacture swing gates?',
        answer: 'Yes — single and double-leaf swing gates are one of Gatefab\u2019s core gate formats.',
      },
    ],
  },
  {
    slug: 'architectural-railings-bangalore',
    name: 'Architectural Railings',
    seoTitle: 'Architectural Railings in Bangalore | Balcony & Staircase Railings | Gatefab',
    metaDescription:
      'Designer architectural railings for balconies, staircases and terraces — engineered and fabricated by Gatefab to match your villa or home in Bangalore.',
    h1: 'Architectural Railings in Bangalore',
    intro:
      'Gatefab extends the same design-first process used for gates to railings — balcony, staircase and terrace railings designed to coordinate with your entrance gate and overall architecture.',
    highlights: ['Balcony, staircase and terrace railings', 'MS and SS options', 'Laser-cut detailing available', 'Designed to coordinate with matching gates'],
    faqs: [
      {
        question: 'Can Gatefab manufacture matching railings?',
        answer: 'Yes — railings can be designed to coordinate with your Gatefab gate in material, pattern and finish.',
      },
    ],
  },
  {
    slug: 'laser-cut-facades-bangalore',
    name: 'Laser Cut Facades',
    seoTitle: 'Laser Cut Facades in Bangalore | Architectural Screens & Panels | Gatefab',
    metaDescription:
      'Laser-cut facade panels and architectural screens for Bangalore homes and commercial projects, precision-manufactured by Gatefab.',
    h1: 'Laser Cut Facades in Bangalore',
    intro:
      'Laser-cut facade panels and architectural screens bring the same precision-cut detailing used in Gatefab gates to building elevations — used for privacy screening, shading and architectural expression.',
    highlights: ['Geometric and parametric pattern options', 'Privacy and shading screens', 'MS and SS panel construction'],
    faqs: [
      {
        question: 'Can Gatefab manufacture facade panels?',
        answer: 'Yes — laser-cut facade panels and architectural screens are part of Gatefab\u2019s architectural metalwork offering.',
      },
    ],
  },
]

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}
