"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuál es el cronograma típico de un proyecto?",
    answer: "Los plazos de los proyectos varían según el alcance, pero la mayoría toma de 4 a 8 semanas desde el inicio hasta la entrega. Proporcionamos cronogramas detallados durante la consulta inicial."
  },
  {
    question: "¿Cuál es el proceso de diseño?",
    answer: "Nuestro proceso incluye Descubrimiento e Investigación, Wireframing, Conceptos de Diseño, Revisiones y Entrega Final. Te mantenemos involucrado en cada etapa para asegurar la alineación con tu visión."
  },
  {
    question: "¿Cuántas revisiones ofrecen?",
    answer: "Incluimos 3 rondas de revisiones en todos los paquetes. Se pueden acomodar revisiones adicionales si es necesario. Nuestro objetivo es asegurar que estés completamente satisfecho con el producto final."
  },
  {
    question: "¿Qué necesitan para comenzar?",
    answer: "Necesitaremos un brief del proyecto claro, directrices de marca (si están disponibles), acceso a materiales relevantes y tus objetivos para el proyecto. Discutiremos todo en detalle durante nuestra llamada de inicio."
  },
  {
    question: "¿Trabajas con clientes internacionales?",
    answer: "¡Absolutamente! Trabajo con clientes globalmente y soy flexible con diferentes zonas horarias. La comunicación ocurre principalmente por email, Slack y videollamadas."
  }
];

export default function FAQMinimal() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4"
        >
          Preguntas Frecuentes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-[#A1A1AA] mb-16"
        >
          Todo lo que necesitás saber antes de empezar
        </motion.p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
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
                <span className="text-xl font-bold text-[#EDEDED] group-hover:text-[#3B82F6] transition-colors">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  className="text-3xl font-light text-[#EDEDED]"
                >
                  +
                </motion.div>
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
                    <p className="pb-6 text-[#A1A1AA] leading-relaxed">
                      {faq.answer}
                    </p>
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
