"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

export default function AIServicesFeatured() {
  return (
    <section className="relative bg-black py-32 overflow-hidden">
      {/* Subtle blue glow top-left */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[150px]" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Cabecera de Sección Especial */}
        <div className="mb-16">
          <div className="max-w-2xl">
            <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4">
              Intelligence Layer
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Lleva tu negocio al <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Piloto Automático
              </span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* SERVICIO 1: AI CONCIERGE (Bento Principal) */}
          <motion.div 
            className="md:col-span-7"
            whileHover={{ y: -5 }}
          >
            <BackgroundGradient className="rounded-3xl p-8 bg-[#161616] min-h-[595px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                    <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <span className="px-4 py-1 rounded-full border border-blue-500/30 text-blue-400 text-xs font-mono uppercase">
                    Capa de Conversión
                  </span>
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">AI Web Concierge</h4>
                <p className="text-[#A1A1AA] text-lg mb-8 leading-relaxed">
                  Integramos un cerebro digital en tu landing page que entiende el contexto de cada visitante. Entrenado con tus datos, productos y servicios, responde dudas en tiempo real, personaliza recomendaciones y guía al usuario paso a paso hasta la conversión final.
                </p>
                <ul className="grid grid-cols-2 gap-4 text-sm text-[#EDEDED]/80">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                    Entrenamiento con Llama 3.3
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                    Memoria de conversación
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                    Cierre de ventas 24/7
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2" />
                    Multilenguaje nativo
                  </li>
                </ul>
              </div>
              <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-6">
                <span className="text-sm text-[#A1A1AA]">Precio personalizado según tu proyecto</span>
                <button className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  Consultar →
                </button>
              </div>
            </BackgroundGradient>
          </motion.div>

          {/* SERVICIO 2: BUSINESS AGENT (Bento Vertical) */}
          <motion.div 
            className="md:col-span-5"
            whileHover={{ y: -5 }}
          >
            <BackgroundGradient className="rounded-3xl p-6 bg-[#3B82F6] min-h-[500px] flex flex-col justify-between text-white">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="px-4 py-1 rounded-full border border-white/30 text-white text-xs font-mono uppercase">
                    Capa Operativa
                  </span>
                </div>
                <h4 className="text-3xl font-bold mb-3">WhatsApp Business Agent</h4>
                <p className="text-white/80 text-base mb-6">
                  Tu asistente virtual responde clientes, cierra ventas y registra todo automáticamente. Tú solo revisas los resultados.
                </p>
                <div className="p-3 bg-black/20 rounded-2xl border border-white/10 backdrop-blur-md space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">Cliente consulta servicio</p>
                      <p className="text-xs text-white/60">→ IA asesora profesionalmente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">Confirma pedido</p>
                      <p className="text-xs text-white/60">→ Se agenda en tu calendario</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-white">Datos guardados</p>
                      <p className="text-xs text-white/60">→ En tu hoja de cálculo, sin mover un dedo</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-xs text-white/70 text-center">
                    ✨ <strong className="text-white">Nunca más respondas el mismo mensaje</strong> — La IA trabaja 24/7 mientras duermes
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-sm font-medium text-white/70 mb-2">Inversión según complejidad</p>
                <button className="w-full py-4 bg-white text-[#3B82F6] rounded-2xl font-bold hover:shadow-xl transition-all">
                  Consultar Presupuesto
                </button>
              </div>
            </BackgroundGradient>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
