import { buildWhatsAppLink } from '@/lib/whatsapp';

type Props = { section: 'hero' | 'projects' | 'services' | 'contact' };

export default function WhatsAppCTA({ section }: Props) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';
  const text = `Hola, quiero cotizar diseño web. Sección: ${section}.`;
  const href = phone ? buildWhatsAppLink(phone, text) : '#';
  return (
    <a
      href={href}
      target={phone ? '_blank' : undefined}
      rel={phone ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center rounded-xl bg-white px-5 py-3 text-black"
      aria-label={`Hablar por WhatsApp — sección ${section}`}
    >
      Hablar por WhatsApp
    </a>
  );
}
