"use client";

import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const plans = [
  {
    name: "Landing Page",
    subtitle: "(One Page)",
    price: "Cotiza tu proyecto",
    description: "Ideal para lanzar tu producto o servicio con impacto inmediato.",
    features: [
      "Diseño de 1 página",
      "Diseño Responsive",
      "3 Secciones personalizadas",
      "Entrega en 5-7 días",
      "Formulario de contacto",
      "Optimización SEO básica",
      "Integración Google Analytics"
    ],
    highlighted: false
  },
  {
    name: "Sitio Corporativo",
    subtitle: "",
    price: "Cotiza tu proyecto",
    description: "Perfecto para empresas que necesitan presencia profesional en línea.",
    features: [
      "Hasta 8 páginas",
      "Diseño UI/UX Personalizado",
      "Blog integrado",
      "Entrega en 15-20 días",
      "Panel de administración",
      "SEO Avanzado",
      "Integración Redes Sociales",
      "Soporte 3 meses"
    ],
    highlighted: true
  },
  {
    name: "Sitio E-commerce",
    subtitle: "",
    price: "Cotiza tu proyecto",
    description: "Solución completa para vender tus productos en línea de forma efectiva.",
    features: [
      "Tienda online completa",
      "Catálogo ilimitado de productos",
      "Pasarela de pagos integrada",
      "Entrega en 25-30 días",
      "Sistema de inventario",
      "Carrito de compras avanzado",
      "Panel administrador completo",
      "Soporte y mantenimiento 6 meses"
    ],
    highlighted: false
  }
];

export default function PricingMinimal() {
  return (
    <section className="bg-[#0A0A0A] py-32">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4"
          >
            Elige el plan adecuado para ti
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-[#A1A1AA]"
          >
            Planes flexibles diseñados para individuos, equipos y negocios en crecimiento.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-md:max-w-md max-lg:max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <BackgroundGradient className={`rounded-3xl p-6 sm:p-8 ${
                plan.highlighted 
                  ? 'bg-[#3B82F6]' 
                  : 'bg-[#161616]'
              }`}>
                <h3 className={`text-xl font-semibold ${plan.highlighted ? 'text-white' : 'text-[#EDEDED]'}`}>
                {plan.name}
                {plan.subtitle && (
                  <span className={`block text-sm font-normal mt-1 ${
                    plan.highlighted ? 'text-white/70' : 'text-[#A1A1AA]'
                  }`}>
                    {plan.subtitle}
                  </span>
                )}
              </h3>
              <p className={`text-[15px] mt-3 leading-relaxed ${
                plan.highlighted ? 'text-white/90' : 'text-[#A1A1AA]'
              }`}>
                {plan.description}
              </p>

              <div className="mt-6">
                <h2 className={`text-3xl font-semibold ${plan.highlighted ? 'text-white' : 'text-[#EDEDED]'}`}>
                  {plan.price}
                </h2>
                <p className={`text-xs mt-2 ${
                  plan.highlighted ? 'text-white/60' : 'text-[#A1A1AA]'
                }`}>
                  Precio adaptado a tus necesidades
                </p>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  className={`w-full px-4 py-3 text-[15px] font-medium tracking-wide rounded-full transition-all ${
                    plan.highlighted
                      ? 'bg-white text-[#0A0A0A] hover:bg-[#EDEDED]'
                      : 'bg-[#3B82F6] text-white hover:bg-[#2563EB]'
                  }`}
                >
                  Comenzar
                </button>
              </div>

              <div className="mt-8">
                <h4 className={`text-base font-semibold mb-6 ${
                  plan.highlighted ? 'text-white' : 'text-[#EDEDED]'
                }`}>
                  El Plan Incluye
                </h4>
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className={`flex items-center text-[15px] font-medium ${
                        plan.highlighted ? 'text-white/90' : 'text-[#A1A1AA]'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 p-1 rounded-full mr-4 flex-shrink-0 ${
                          plan.highlighted
                            ? 'bg-white fill-[#3B82F6]'
                            : 'bg-[#3B82F6] fill-white'
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
