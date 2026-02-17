"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Consulta Gratuita",
    description: "Analizamos tu proyecto, objetivos y necesidades específicas sin ningún compromiso.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    duration: "Sin compromiso"
  },
  {
    number: "02",
    title: "Propuesta Personalizada",
    description: "Recibes una cotización detallada con alcance, timeline y precio adaptado a tu presupuesto.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    duration: "24-48 hrs"
  },
  {
    number: "03",
    title: "Desarrollo con Revisiones",
    description: "Trabajo iterativo con checkpoints regulares. Revisas el progreso y ajustamos sobre la marcha.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    duration: "Según proyecto"
  },
  {
    number: "04",
    title: "Entrega y Soporte",
    description: "Lanzamiento del proyecto con capacitación incluida y soporte post-entrega garantizado.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    ),
    duration: "Soporte incluido"
  }
];

export default function ProcessTransparent() {
  return (
    <section className="bg-[#0A0A0A] py-32 relative overflow-hidden">
      
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4"
          >
            Proceso Simple
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            De la idea al lanzamiento
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[#A1A1AA] max-w-2xl mx-auto"
          >
            Un flujo de trabajo transparente, sin sorpresas ni costos ocultos
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line - solo visible en desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-blue-500/20 to-transparent" />
              )}

              {/* Card */}
              <div className="bg-[#161616]/50 border border-white/5 rounded-3xl p-6 hover:border-blue-500/20 transition-all duration-300 h-full">
                {/* Number Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-6">
                  <span className="text-2xl font-bold text-blue-500">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-4 text-blue-500">
                  {step.icon}
                </div>

                {/* Content */}
                <h4 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h4>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* Duration badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <svg className="w-3 h-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs text-[#A1A1AA] font-medium">{step.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-[#A1A1AA] mb-6">
            ¿Listo para empezar tu proyecto?
          </p>
          <button className="px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-white/90 transition-all">
            Solicitar Consulta Gratuita
          </button>
        </motion.div>
      </div>
    </section>
  );
}
