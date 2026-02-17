"use client";
import { useState } from 'react';
import WhatsAppCTA from '@/components/whatsapp-cta';
import { BackgroundGradientDemo } from '@/components/background-gradient-demo';
import MotionReveal from '@/components/ui/motion-reveal';

export default function Hero() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  return (
    <section
      id="hero"
      className="container mx-auto px-6"
      onMouseMove={(e) => {
        const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
      }}
      style={{
        backgroundImage: `radial-gradient(200px 200px at ${pos.x}% ${pos.y}%, rgba(58,209,255,0.12), rgba(58,209,255,0))`,
        backgroundClip: 'padding-box',
      }}
    >
      <MotionReveal className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-semibold">Sitios web atractivos que generan ventas</h1>
          <p className="mt-4 text-text-low">Diseño premium, performance y seguridad incluida. Efectos elegantes que guían y convierten.</p>
          <div className="mt-8">
            <WhatsAppCTA section="hero" />
          </div>
        </div>
        <div className="justify-self-end">
          <BackgroundGradientDemo />
        </div>
      </MotionReveal>
    </section>
  );
}
