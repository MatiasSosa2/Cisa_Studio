"use client";
import { motion } from 'framer-motion';

type Props = {
  planId: 'landing' | 'corporate' | 'ecommerce';
  title: string;
  priceUsd: number;
  description: string;
  features: string[];
};

export default function ServiceCard({ planId, title, priceUsd, description, features }: Props) {
  return (
    <div className="service-glow mx-2 md:mx-4">
      <motion.article
        className="relative z-10 flex max-w-sm flex-col rounded-[2rem] border border-border bg-bg-surface/80 p-8 text-text-high shadow-elevation-1 backdrop-blur-sm ring-1 ring-white/10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
      <header className="mb-6 border-b border-border pb-4 text-center">
        <span className="block text-xs uppercase text-text-high">{title}</span>
        <div className="mt-2 flex items-start justify-center gap-1">
          <span className="mt-2 text-2xl">USD</span>
          <span className="text-5xl leading-none">{priceUsd}</span>
          <span className="self-end text-2xl">desde</span>
        </div>
      </header>
      <p className="text-sm text-text-low">{description}</p>
      <ul className="mt-4 flex flex-col gap-2">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/15">
              <svg viewBox="0 0 20 20" className="h-3 w-3" aria-hidden>
                <path fill="currentColor" d="M16.704 5.29a1 1 0 0 1 .006 1.414l-7.2 7.25a1 1 0 0 1-1.422.01L3.29 13.26a1 1 0 1 1 1.42-1.41l3.37 3.396 6.49-6.53a1 1 0 0 1 1.134-.427Z" />
              </svg>
            </span>
            <span className="text-sm">{f}</span>
          </li>
        ))}
      </ul>
        <div className="mt-6">
          <a
            href={process.env.NEXT_PUBLIC_WHATSAPP_PHONE ? `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}?text=${encodeURIComponent(`Hola, me interesa ${title} (${planId}) — precio USD ${priceUsd}.`)}` : '#'}
            target={process.env.NEXT_PUBLIC_WHATSAPP_PHONE ? '_blank' : undefined}
            rel={process.env.NEXT_PUBLIC_WHATSAPP_PHONE ? 'noopener noreferrer' : undefined}
            aria-label={`Consultar por WhatsApp sobre ${title}`}
            className="block w-full rounded-xl bg-white px-5 py-3 text-center text-black"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </motion.article>
    </div>
  );
}
