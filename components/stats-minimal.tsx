"use client";
import React, { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { MovingBorder } from "./ui/moving-border";

// Componente de Contador Animado de Alta Precisión
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const displayValue = useTransform(springValue, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
      <motion.span>{displayValue}</motion.span>
      {suffix}
    </span>
  );
};

export default function WhyChooseUs() {
  const stats = [
    {
      label: "Código Personalizado",
      value: 100,
      suffix: "%",
      description: "Cero plantillas. Cada línea de código diseñada específicamente para tu negocio.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      label: "Respuesta",
      value: 24,
      suffix: "hrs",
      description: "Consultas respondidas en menos de un día hábil. Comunicación clara y directa.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      label: "Soporte Post-Lanzamiento",
      value: 100,
      suffix: "%",
      description: "Asistencia incluida después de la entrega. No te dejamos solo con tu proyecto.",
      icon: (
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  const stack = [
    { name: "React JS", desc: "UI Dinámica", icon: "⚛" },
    { name: "Next.js", desc: "Performance", icon: "▲" },
    { name: "Llama 3.3", desc: "IA Cognitiva", icon: "🤖" },
    { name: "Tailwind", desc: "Elegancia CSS", icon: "🎨" },
  ];

  return (
    <section className="bg-[#0A0A0A] py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Cabecera */}
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Valor Real
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
          >
            Resultados tangibles <br /> que impulsan tu negocio.
          </motion.h3>
        </div>

        {/* Grid de Métricas con Moving Border */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative p-px rounded-3xl overflow-hidden group h-full"
            >
              {/* Moving Border en hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <MovingBorder duration={3500} rx="24px" ry="24px">
                  <div className="h-20 w-20 bg-[radial-gradient(circle,#3B82F6_0%,transparent_70%)]" />
                </MovingBorder>
              </div>

              <div className="relative bg-[#111] border border-white/5 rounded-[23px] p-8 h-full flex flex-col justify-between backdrop-blur-3xl">
                <div>
                  <div className="mb-6 p-3 w-fit rounded-xl bg-blue-500/10 border border-blue-500/20">
                    {stat.icon}
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <h4 className="text-xl font-semibold text-[#EDEDED] mt-4 mb-2">{stat.label}</h4>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
