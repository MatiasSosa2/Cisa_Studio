"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
};

export default function ContactMinimal() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const totalSteps = 3;

  const nextStep = () => {
    if (step < totalSteps) {
      setDirection(1);
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setDirection(-1);
      setStep(step - 1);
    }
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica de envío
  };

  const services = [
    { id: "landing", name: "Landing Page", time: "1 semana" },
    { id: "corporate", name: "Sitio Corporativo", time: "3 semanas" },
    { id: "ecommerce", name: "E-commerce", time: "4 semanas" },
    { id: "ai", name: "Integración IA", time: "Según alcance" },
  ];

  const budgets = [
    { id: "basico", label: "Proyecto Básico" },
    { id: "profesional", label: "Proyecto Profesional" },
    { id: "premium", label: "Proyecto Premium" },
    { id: "consultar", label: "A consultar" },
  ];

  const timelines = [
    { id: "urgente", label: "Urgente (1-2 semanas)" },
    { id: "normal", label: "Normal (3-4 semanas)" },
    { id: "flexible", label: "Flexible (+1 mes)" },
  ];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-[#161616] py-32" id="contacto">
      <div className="max-w-[700px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4">
            Comencemos tu Proyecto
          </h2>
          <p className="text-[#A1A1AA]">
            Solo {totalSteps} pasos rápidos — menos de 60 segundos
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`text-sm font-mono ${
                  s === step ? "text-[#3B82F6]" : s < step ? "text-[#3B82F6]/50" : "text-[#A1A1AA]"
                }`}
              >
                {s === 1 && "Tus Datos"}
                {s === 2 && "Tu Proyecto"}
                {s === 3 && "Detalles"}
              </div>
            ))}
          </div>
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06b6d4]"
              initial={{ width: "0%" }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <form onSubmit={handleSubmit} className="relative overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            {step === 1 && (
              <motion.div
                key="step1"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    ¿Cómo te llamas?
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#3B82F6] rounded-2xl px-6 py-4 text-[#EDEDED] text-lg outline-none transition-colors"
                    placeholder="Tu nombre"
                    autoFocus
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    Tu email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#3B82F6] rounded-2xl px-6 py-4 text-[#EDEDED] text-lg outline-none transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    WhatsApp (opcional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#3B82F6] rounded-2xl px-6 py-4 text-[#EDEDED] text-lg outline-none transition-colors"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-4 uppercase tracking-wider">
                    ¿Qué tipo de proyecto necesitas?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => updateField("service", service.id)}
                        className={`p-4 rounded-2xl border-2 transition-all text-left ${
                          formData.service === service.id
                            ? "border-[#3B82F6] bg-[#3B82F6]/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="font-semibold text-[#EDEDED] mb-1">{service.name}</div>
                        <div className="text-xs text-[#A1A1AA]">
                          {service.time}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-4 uppercase tracking-wider">
                    Presupuesto aproximado
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {budgets.map((budget) => (
                      <button
                        key={budget.id}
                        type="button"
                        onClick={() => updateField("budget", budget.id)}
                        className={`p-4 rounded-2xl border-2 transition-all ${
                          formData.budget === budget.id
                            ? "border-[#3B82F6] bg-[#3B82F6]/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="text-[#EDEDED] font-medium">{budget.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-4 uppercase tracking-wider">
                    ¿Cuándo lo necesitas?
                  </label>
                  <div className="space-y-3">
                    {timelines.map((timeline) => (
                      <button
                        key={timeline.id}
                        type="button"
                        onClick={() => updateField("timeline", timeline.id)}
                        className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                          formData.timeline === timeline.id
                            ? "border-[#3B82F6] bg-[#3B82F6]/10"
                            : "border-white/10 hover:border-white/20"
                        }`}
                      >
                        <div className="text-[#EDEDED] font-medium">{timeline.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 uppercase tracking-wider">
                    Cuéntame sobre tu proyecto
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-white/10 focus:border-[#3B82F6] rounded-2xl px-6 py-4 text-[#EDEDED] outline-none transition-colors resize-none"
                    rows={4}
                    placeholder="Describe brevemente lo que necesitas..."
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <motion.button
                type="button"
                onClick={prevStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="px-8 py-4 rounded-full border-2 border-white/10 text-[#EDEDED] hover:border-white/20 transition-colors"
              >
                ← Atrás
              </motion.button>
            )}

            {step < totalSteps ? (
              <motion.button
                type="button"
                onClick={nextStep}
                className="flex-1 bg-gradient-to-r from-[#3B82F6] to-[#06b6d4] text-white py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Siguiente →
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="flex-1 bg-gradient-to-r from-[#3B82F6] to-[#06b6d4] text-white py-4 rounded-full font-semibold hover:opacity-90 transition-opacity"
              >
                Enviar Proyecto 🚀
              </motion.button>
            )}
          </div>
        </form>

        {/* Trust Badge */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#A1A1AA] text-sm mt-8"
        >
          🔒 Respuesta en menos de 24 horas · 100% confidencial
        </motion.p>
      </div>
    </section>
  );
}
