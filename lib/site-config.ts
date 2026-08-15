/**
 * SITE-WIDE BUSINESS CONFIG
 * ---------------------------------------------------------------
 * Every value here MUST be verified against the real, current
 * Gatefab business details before launch. Schema.org structured
 * data, the footer, contact page and Google Business Profile
 * alignment all read from this single file — keep it as the one
 * source of truth so NAP (Name/Address/Phone) never drifts.
 *
 * PLACEHOLDER values are marked below. Do not deploy with them.
 * ---------------------------------------------------------------
 */

export const siteConfig = {
  brandName: 'Gatefab',
  legalName: 'Gatefab', // PLACEHOLDER — replace with registered legal entity name if different
  tagline: 'Designed for Villas. Engineered for Architecture. Built to Last.',
  category: 'Premium Designer Gates & Architectural Metalwork',
  url: 'https://gatefab.in',

  // PLACEHOLDER — replace with the exact, verified Google Business Profile address
  address: {
    streetAddress: 'REPLACE_WITH_VERIFIED_STREET_ADDRESS',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    postalCode: 'REPLACE_WITH_PIN',
    addressCountry: 'IN',
  },

  // PLACEHOLDER — must match Google Business Profile exactly
  phone: '+91-REPLACE',
  whatsappNumber: '91REPLACE', // digits only, country code first, no + or spaces
  email: 'info@gatefab.in', // PLACEHOLDER — confirm

  // PLACEHOLDER — only include profiles that genuinely exist
  social: {
    instagram: 'https://instagram.com/REPLACE',
    youtube: '',
    facebook: '',
  },

  // Only list areas where Gatefab has genuine service/project evidence.
  // Remove any area you can't back with real projects or service coverage.
  serviceAreas: [
    'Whitefield',
    'Sarjapur Road',
    'Electronic City',
    'HSR Layout',
    'Koramangala',
    'JP Nagar',
    'Jayanagar',
    'Bannerghatta Road',
    'Kanakapura Road',
    'Yelahanka',
    'Hebbal',
    'Devanahalli',
  ],

  geo: {
    // PLACEHOLDER — set to the real business location
    latitude: 12.9716,
    longitude: 77.5946,
  },
}

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encoded}`
}

export function telLink() {
  return `tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`
}
