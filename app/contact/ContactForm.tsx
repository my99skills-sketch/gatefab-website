'use client'

import { useState } from 'react'

const fieldClass = 'w-full border border-ink/20 bg-paper px-4 py-3 text-sm focus:border-bronze outline-none transition-colors'
const labelClass = 'block text-xs font-mono uppercase tracking-wide text-ink/50 mb-2'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      e.currentTarget.reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="border border-bronze/30 bg-bronze/5 p-8 text-center">
        <p className="font-display text-xl mb-2">Thank you.</p>
        <p className="text-ink/60 text-sm">
          Your enquiry has been received. The Gatefab team will get back to you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-6" encType="multipart/form-data">
      <div>
        <label className={labelClass} htmlFor="name">Name *</label>
        <input required id="name" name="name" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="phone">Phone *</label>
        <input required id="phone" name="phone" type="tel" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="whatsapp">WhatsApp</label>
        <input id="whatsapp" name="whatsapp" type="tel" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="location">Location in Bangalore</label>
        <input id="location" name="location" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="propertyType">Property Type</label>
        <select id="propertyType" name="propertyType" className={fieldClass}>
          <option>Villa</option>
          <option>Independent House</option>
          <option>Apartment / Community</option>
          <option>Commercial / Hospitality</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="gateType">Gate Type</label>
        <select id="gateType" name="gateType" className={fieldClass}>
          <option>Designer Gate</option>
          <option>Laser Cut Gate</option>
          <option>MS Gate</option>
          <option>SS Gate</option>
          <option>Sliding Gate</option>
          <option>Swing Gate</option>
          <option>Railing</option>
          <option>Facade / Screen</option>
          <option>Not sure</option>
        </select>
      </div>
      <div>
        <label className={labelClass} htmlFor="openingSize">Approx. Opening Size</label>
        <input id="openingSize" name="openingSize" placeholder="e.g. 12 ft width" className={fieldClass} />
      </div>
      <div>
        <label className={labelClass} htmlFor="material">Material Preference</label>
        <select id="material" name="material" className={fieldClass}>
          <option>Not sure</option>
          <option>MS</option>
          <option>SS</option>
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="file">Upload Drawing / Reference Image</label>
        <input id="file" name="file" type="file" accept="image/*,.pdf,.dwg,.dxf" className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass} htmlFor="message">Design Requirement / Message</label>
        <textarea id="message" name="message" rows={4} className={fieldClass} />
      </div>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full sm:w-auto disabled:opacity-50">
          {status === 'submitting' ? 'Sending…' : 'Get Quote'}
        </button>
        {status === 'error' && (
          <p className="mt-3 text-sm text-red-700">
            Something went wrong sending your enquiry — please try WhatsApp instead, or check back
            shortly.
          </p>
        )}
      </div>
    </form>
  )
}
