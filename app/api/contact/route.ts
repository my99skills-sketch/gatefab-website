import { NextRequest, NextResponse } from 'next/server'

/**
 * Lead capture endpoint.
 * ---------------------------------------------------------------
 * TODO before launch — this currently only validates and logs the
 * submission. Wire it to real lead storage / notification, e.g.:
 *   1. Insert into PostgreSQL `leads` table (see README "Database").
 *   2. Send an email/SMS/WhatsApp notification to the sales team.
 *   3. Optionally forward to a CRM (HubSpot/Zoho/custom) via its API.
 * Keep any API keys or DB credentials in environment variables —
 * never in this file or in client-side code.
 * ---------------------------------------------------------------
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const name = formData.get('name')?.toString().trim()
    const phone = formData.get('phone')?.toString().trim()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 })
    }

    const lead = {
      name,
      phone,
      whatsapp: formData.get('whatsapp')?.toString() ?? '',
      location: formData.get('location')?.toString() ?? '',
      propertyType: formData.get('propertyType')?.toString() ?? '',
      gateType: formData.get('gateType')?.toString() ?? '',
      openingSize: formData.get('openingSize')?.toString() ?? '',
      material: formData.get('material')?.toString() ?? '',
      message: formData.get('message')?.toString() ?? '',
      submittedAt: new Date().toISOString(),
      // formData.get('file') contains the uploaded drawing/reference image —
      // stream it to object storage (e.g. S3/Cloudflare R2) rather than
      // holding it in memory, then store the resulting URL with the lead.
    }

    // Placeholder: replace with a real DB insert / CRM call.
    console.log('New Gatefab lead:', lead)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: 'Unexpected error.' }, { status: 500 })
  }
}
