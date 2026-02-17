import ServiceCard from '@/components/service-card';
import WhatsAppCTA from '@/components/whatsapp-cta';

const SERVICES: Array<{
  id: 'landing' | 'corporate' | 'ecommerce';
  title: string;
  priceUsd: number;
  description: string;
  features: string[];
}> = [
  { id: 'landing', title: 'Landing Page', priceUsd: 150, description: 'Página única optimizada para conversiones y contacto.', features: ['Secciones clave', 'SEO básico', 'Performance optimizada', 'CTA WhatsApp'] },
  { id: 'corporate', title: 'Sitio Corporativo', priceUsd: 250, description: 'Multipágina con branding, servicios y blog básico.', features: ['Navegación estándar', 'Blog ligero', 'SEO on‑page', 'Escalable'] },
  { id: 'ecommerce', title: 'Tienda Online', priceUsd: 350, description: 'Catálogo, carrito y pasarela de pagos.', features: ['Fichas de producto', 'Checkout', 'Envíos', 'Gestión básica'] }
];

export default function Services() {
  return (
    <section id="servicios" className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-semibold">Servicios</h2>
      <p className="mt-2 text-text-low">Elige tu plan y consulta por WhatsApp.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => (
          <ServiceCard key={s.id} planId={s.id} title={s.title} priceUsd={s.priceUsd} description={s.description} features={s.features} />
        ))}
      </div>
      <div className="mt-8">
        <WhatsAppCTA section="services" />
      </div>
    </section>
  );
}
