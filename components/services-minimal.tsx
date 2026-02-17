"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Landing Pages",
    skills: ["Diseño de alta conversión", "Optimización SEO", "Formularios de contacto", "Integración con Analytics", "Responsive Design", "Entrega en menos de 1 semana"]
  },
  {
    number: "02",
    title: "Sitios Corporativos",
    skills: ["Hasta 8 páginas personalizadas", "Blog integrado", "Panel de administración", "SEO avanzado", "Integración redes sociales", "Soporte 3 meses incluido"]
  },
  {
    number: "03",
    title: "E-commerce",
    skills: ["Tienda online completa", "Catálogo ilimitado de productos", "Pasarela de pagos", "Sistema de inventario", "Carrito de compras", "Panel administrador", "Soporte 6 meses"]
  },
  {
    number: "04",
    title: "Integración con IA",
    skills: ["Chatbots conversacionales 24/7", "WhatsApp Business automatizado", "Conexión con Google Sheets/Excel", "Cierre de ventas automático", "Registro de datos en tiempo real", "Sin límite de mensajes"]
  }
];

export default function ServicesMinimal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="relative bg-gradient-to-r from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A] py-32">
      {/* Subtle accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4"
        >
          Nuestras Soluciones
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#A1A1AA] mb-16"
        >
          Desarrollo web moderno con inteligencia artificial integrada
        </motion.p>

        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-4xl font-bold text-[#3B82F6] opacity-40">
                    {service.number}
                  </span>
                  <span className="text-2xl font-bold text-[#EDEDED] group-hover:text-[#3B82F6] transition-colors">
                    {service.title}
                  </span>
                </div>
                <motion.svg
                  animate={{ rotate: openIndex === index ? 0 : 180 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="w-6 h-6 shrink-0 text-[#EDEDED]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m5 15 7-7 7 7"
                  />
                </motion.svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pl-20">
                      <ul className="space-y-3">
                        {service.skills.map((skill, i) => (
                          <li key={i} className="text-[#A1A1AA] flex items-center gap-3 text-lg">
                            <span className="w-2 h-2 bg-[#3B82F6] rounded-full"></span>
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
