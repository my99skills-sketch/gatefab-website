import { whatsappLink } from '@/lib/site-config'

export default function WhatsAppButton({ message }: { message: string }) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Gatefab on WhatsApp"
      className="fixed bottom-6 right-6 z-50 btn-whatsapp rounded-full w-14 h-14 shadow-xl md:w-auto md:h-auto md:rounded-md md:px-5 md:py-3"
    >
      <span className="hidden md:inline">WhatsApp Gatefab</span>
      <span className="md:hidden text-xl">💬</span>
    </a>
  )
}
