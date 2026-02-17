"use client";

import { useMemo, useState } from 'react';
import { buildWhatsAppLink } from '@/lib/whatsapp';

type PlanId = 'landing' | 'corporate' | 'ecommerce';

const PLANS: Record<PlanId, { title: string; price: number }> = {
  landing: { title: 'Landing Page', price: 150 },
  corporate: { title: 'Sitio Corporativo', price: 250 },
  ecommerce: { title: 'Tienda Online', price: 350 },
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState<PlanId>('landing');
  const [security, setSecurity] = useState(false);
  const [assistant, setAssistant] = useState(false);
  const [notes, setNotes] = useState('');

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || '';

  const total = useMemo(() => {
    const base = PLANS[plan].price;
    const addons = (security ? 1 : 0) * 50 + (assistant ? 1 : 0) * 50; // Placeholder costos addons
    return base + addons;
  }, [plan, security, assistant]);

  const message = useMemo(() => {
    const p = PLANS[plan];
    const addons = [security ? 'Seguridad' : null, assistant ? 'Asistente 24/7' : null]
      .filter(Boolean)
      .join(', ');
    const addonsText = addons ? addons : 'Sin addons';
    const summary = `Plan: ${p.title} — USD ${p.price}\nAddons: ${addonsText}\nTotal estimado: USD ${total}`;
    const notesText = notes ? `\nNotas: ${notes}` : '';
    return `Hola, quiero contratar. ${summary}${notesText}\nDesde: Sección Contacto`;
  }, [plan, security, assistant, notes, total]);

  const href = phone ? buildWhatsAppLink(phone, message) : '#';

  return (
    <section id="contacto" className="container mx-auto px-6">
      <h2 className="text-2xl md:text-3xl font-semibold">Contacto Interactivo</h2>
      <p className="mt-2 text-text-low">Elige tu plan y extras. Te llevamos a WhatsApp con el mensaje listo.</p>
      {/* Stepper visual */}
      <ul className="mt-6 relative flex flex-col md:flex-row gap-2 w-full md:w-[70%] mx-auto">
        {[1, 2, 3].map((n) => {
          const labels: Record<number, string> = { 1: 'Plan', 2: 'Extras', 3: 'Resumen' };
          const active = step === n;
          return (
            <li key={n} className="flex flex-col md:flex-row md:items-center gap-x-2 shrink basis-0 flex-1 group">
              <div className="min-w-7 min-h-7 inline-flex items-center text-xs align-middle grow md:grow-0">
                <span className={[
                  'size-7 flex justify-center items-center shrink-0 rounded-full font-medium',
                  active ? 'bg-white text-black' : 'bg-white/10 text-text-high',
                ].join(' ')}>
                  {n}
                </span>
                <span className="ms-2 block grow md:grow-0 text-sm font-medium text-text-high">
                  {labels[n]}
                </span>
              </div>
              <div className="mt-2 w-px h-4 md:mt-0 ms-3.5 md:ms-0 md:w-full md:h-px md:flex-1 bg-border group-last:hidden"></div>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 w-full md:w-[70%] mx-auto beam-border rounded-2xl p-4">
        {/* Paso 1: Plan */}
        {step === 1 && (
          <div aria-labelledby="step1-title">
            <h3 id="step1-title" className="text-xl font-semibold">1. Elige tu plan</h3>
            <div role="radiogroup" aria-label="Planes" className="mt-4 grid gap-3 sm:grid-cols-3">
              {Object.keys(PLANS).map((id) => {
                const pid = id as PlanId;
                const active = plan === pid;
                return (
                  <button
                    key={pid}
                    role="radio"
                    aria-checked={active}
                    onClick={() => setPlan(pid)}
                    className={`rounded-xl border px-4 py-3 text-left ${active ? 'border-accent-primary text-text-high' : 'border-border text-text-low'}`}
                  >
                    <span className="block text-sm">{PLANS[pid].title}</span>
                    <span className="block text-xs">Desde USD {PLANS[pid].price}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-6 flex justify-end">
              <button className="rounded-xl bg-white px-5 py-3 text-black" onClick={() => setStep(2)}>Continuar</button>
            </div>
          </div>
        )}

        {/* Paso 2: Addons */}
        {step === 2 && (
          <div aria-labelledby="step2-title">
            <h3 id="step2-title" className="text-xl font-semibold">2. Extras</h3>
            <div className="mt-4 space-y-3">
              <label className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
                <span className="text-sm">Seguridad en el sitio</span>
                <input type="checkbox" checked={security} onChange={(e) => setSecurity(e.target.checked)} aria-label="Seguridad" />
              </label>
              <label className="flex items-center justify-between rounded-xl border border-border px-4 py-3">
                <span className="text-sm">Asistente 24/7</span>
                <input type="checkbox" checked={assistant} onChange={(e) => setAssistant(e.target.checked)} aria-label="Asistente 24/7" />
              </label>
            </div>
            <div className="mt-6 flex justify-between">
              <button className="rounded-xl border border-border px-5 py-3 text-text-high" onClick={() => setStep(1)}>Volver</button>
              <button className="rounded-xl bg-white px-5 py-3 text-black" onClick={() => setStep(3)}>Continuar</button>
            </div>
          </div>
        )}

        {/* Paso 3: Resumen */}
        {step === 3 && (
          <div aria-labelledby="step3-title">
            <h3 id="step3-title" className="text-xl font-semibold">3. Resumen</h3>
            <div className="mt-2 text-sm text-text-low">
              <p>Plan: {PLANS[plan].title} — USD {PLANS[plan].price}</p>
              <p>Addons: {(security ? 'Seguridad' : '') + (security && assistant ? ', ' : '') + (assistant ? 'Asistente 24/7' : (!security ? 'Ninguno' : ''))}</p>
              <p>Total estimado: USD {total}</p>
            </div>
            <label className="mt-4 block text-sm">Notas opcionales
              <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} className="mt-2 w-full rounded-xl border border-border bg-bg-surface/80 p-3 text-text-high" />
            </label>
            <div className="mt-6 flex justify-between">
              <button className="rounded-xl border border-border px-5 py-3 text-text-high" onClick={() => setStep(2)}>Volver</button>
              <a
                href={href}
                target={phone ? '_blank' : undefined}
                rel={phone ? 'noopener noreferrer' : undefined}
                className="rounded-xl bg-white px-5 py-3 text-black"
                aria-label="Hablar por WhatsApp con resumen"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
