/**
 * PROJECT DATA
 * ---------------------------------------------------------------
 * ⚠️ IMPORTANT: The single entry below is an EXAMPLE/TEMPLATE ONLY,
 * clearly marked as such in its own content. The brief is explicit
 * that fake projects, customers, locations or claims must never be
 * published. Do not remove the "isPlaceholder" flag or publish this
 * entry as-is — replace it with a genuine, verified Gatefab project
 * (real photos, real location, real specs) before launch, and add
 * one object per real project using this same shape.
 * ---------------------------------------------------------------
 */

export type Project = {
  slug: string
  title: string
  location: string
  propertyType: string
  gateType: string
  material: string
  finish: string
  designConcept: string
  isPlaceholder: boolean
}

export const projects: Project[] = [
  {
    slug: 'example-project-template',
    title: '[EXAMPLE TEMPLATE — replace with a real, verified project before publishing]',
    location: 'Bengaluru',
    propertyType: 'Independent Villa',
    gateType: 'Laser Cut Sliding Gate',
    material: 'Mild Steel (MS)',
    finish: 'Powder coated, matte black',
    designConcept:
      'This is placeholder text showing the structure a real project page should follow: project name, location, gate type, material, finish, the customer requirement, the design concept, and photos of the 3D design, manufacturing, installation and final result.',
    isPlaceholder: true,
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}
