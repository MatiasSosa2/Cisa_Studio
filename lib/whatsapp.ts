export function buildWhatsAppLink(phoneE164: string, text: string) {
  const base = 'https://wa.me/';
  const message = encodeURIComponent(text);
  return `${base}${phoneE164}?text=${message}`;
}
