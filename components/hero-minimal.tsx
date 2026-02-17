"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function HeroMinimal() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-[#050505] overflow-hidden">
      
      {/* CAPA DE IMAGEN: Integración total */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMG_2458.jpg"
          alt="Cisa Studio"
          fill
          className="object-cover object-right lg:object-center opacity-40 grayscale-[0.5] contrast-[1.1]"
          priority
        />
        {/* Máscaras de Gradiente para "limpiar" la foto y dar seriedad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 w-full pt-20">
        <div className="max-w-3xl">
          {/* Badge Minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-blue-500/80">
              Impulsando negocios digitales · 2026
            </span>
          </motion.div>

          {/* Título Principal Tipográfico */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-[0.85] mb-8">
              Cisa <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/20">
                Studio.
              </span>
            </h1>
          </motion.div>

          {/* Subtítulo con seriedad técnica */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col md:flex-row md:items-center gap-6 mb-12"
          >
            <p className="text-xl text-[#A1A1AA] max-w-sm leading-relaxed border-l border-blue-500/30 pl-6">
              Diseño y desarrollo de
              <span className="text-white"> soluciones digitales.</span>
            </p>
            
            <div className="flex flex-col gap-1 text-[11px] font-mono text-white/40 uppercase tracking-widest">
              <span>Basado en Argentina</span>
              <span>Software & Design Boutique</span>
            </div>
          </motion.div>

          {/* Call to Action Directo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <button className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:pr-12">
              <span className="relative z-10">Solicitar Consulta Gratuita</span>
              <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all w-5 h-5" />
            </button>
            
            <button className="px-8 py-4 border border-white/10 text-white rounded-full font-medium hover:bg-white/5 transition-all">
              Ver Cotización Personalizada
            </button>
          </motion.div>
        </div>
      </div>

      {/* Indicador de Scroll Minimalista */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20"
      >
        <span className="text-[9px] font-mono uppercase tracking-widest text-white">Scroll</span>
        <ChevronDown className="w-4 h-4 text-white" />
      </motion.div>
    </section>
  );
}
