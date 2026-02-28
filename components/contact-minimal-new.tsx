"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Rocket, Building2, ShoppingBag, Bot, Check } from "lucide-react";

const SERVICES = [
  { id: "landing", title: "Landing Page", icon: Rocket, time: "5-7 días" },
  { id: "corp", title: "Sitio Corporativo", icon: Building2, time: "15-20 días" },
  { id: "ecom", title: "E-commerce", icon: ShoppingBag, time: "25-30 días" },
  { id: "ia", title: "Business IA", icon: Bot, time: "Según alcance" },
];

const BUDGETS = [
  { id: "basic", label: "Proyecto Inicial", range: "Funcionalidades básicas" },
  { id: "pro", label: "Proyecto Profesional", range: "Funcionalidades avanzadas" },
  { id: "premium", label: "Proyecto Premium", range: "Solución completa y escalable" },
];

export default function StepFormDeepSpace() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "", 
    email: "", 
    service: "", 
    budget: "",
    message: ""
  });

  const nextStep = () => setStep((s) => Math.min(3, s + 1));
  const prevStep = () => setStep((s) => Math.max(1, s - 1));

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Aquí iría la lógica de envío
  };

  const selectedService = SERVICES.find(s => s.id === formData.service);
  const selectedBudget = BUDGETS.find(b => b.id === formData.budget);

  return (
    <section className="min-h-screen bg-black py-24 flex items-center justify-center relative" id="contacto">
      <div className="w-full max-w-4xl px-6 relative z-10">
        {/* STEP INDICATOR - REDISEÑO ELITE */}
        <div className="mb-24 relative">
          <div className="flex justify-between items-end relative z-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col gap-4 w-full group">
                <div className="flex items-baseline gap-3">
                  {/* El Número: Ahora con estilo Mono y Kerning amplio */}
                  <span className={cn(
                    "text-2xl font-mono font-light tracking-tighter transition-all duration-700",
                    step >= item ? "text-blue-500" : "text-white/10"
                  )}>
                    0{item}
                  </span>
                  
                  {/* Etiqueta del Paso */}
                  <span className={cn(
                    "text-[10px] uppercase tracking-[0.4em] font-medium transition-colors duration-500",
                    step >= item ? "text-white/90" : "text-white/20"
                  )}>
                    {item === 1 ? "Identidad" : item === 2 ? "Arquitectura" : "Finalización"}
                  </span>
                </div>

                {/* La Barra de Progreso Minimalista */}
                <div className="relative h-[2px] w-full bg-white/[0.03] overflow-hidden">
                  <motion.div 
                    initial={{ x: "-100%" }}
                    animate={{ x: step >= item ? "0%" : "-100%" }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400"
                  />
                  {/* Brillo en la punta de la barra activa */}
                  {step === item && (
                    <motion.div 
                      layoutId="glow"
                      className="absolute right-0 top-0 h-full w-4 bg-blue-400 blur-sm"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Número de Fondo (Marca de Agua) - Le da una profundidad brutal */}
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.03, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute -top-16 -left-8 text-[12rem] font-bold text-white pointer-events-none select-none italic"
            >
              0{step}
            </motion.span>
          </AnimatePresence>
        </div>

        <div className="rounded-[2.5rem] bg-[#161616]/80 backdrop-blur-2xl border border-white/5">
          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-1">Información de Contacto</h2>
                    <p className="text-[#A1A1AA] text-sm">Completá tus datos para iniciar el proceso de consulta.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField 
                      label="Tu Nombre" 
                      placeholder="Ej. Matias Sosa" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <InputField 
                      label="Email Profesional" 
                      placeholder="matias_sosa@gmail.com" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <button 
                    onClick={nextStep} 
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-bold transition-all shadow-lg shadow-blue-600/6"
                  >
                    Continuar
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-5"
                >
                  <h2 className="text-3xl font-bold text-white">¿Qué estamos construyendo?</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {SERVICES.map((s) => (
                      <ServiceCard 
                        key={s.id} 
                        {...s} 
                        isSelected={formData.service === s.id}
                        onClick={() => setFormData({...formData, service: s.id})}
                      />
                    ))}
                  </div>

                  <div className="pt-4">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-blue-500 ml-1 mb-3 block">
                      Presupuesto Aproximado
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {BUDGETS.map((b) => (
                        <BudgetCard
                          key={b.id}
                          {...b}
                          isSelected={formData.budget === b.id}
                          onClick={() => setFormData({...formData, budget: b.id})}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <button 
                      onClick={prevStep} 
                      className="w-1/3 py-3 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all"
                    >
                      Atrás
                    </button>
                    <button 
                      onClick={nextStep} 
                      className="w-2/3 py-3 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-all"
                    >
                      Siguiente
                    </button>
                  </div>
                </motion.div>
              )}
              
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Header personalizado */}
                  <div>
                    <p className="text-xs font-mono uppercase tracking-[0.4em] text-blue-400 mb-1">Resumen del proyecto</p>
                    <h2 className="text-3xl font-bold text-white leading-tight">
                      {formData.name
                        ? <><span className="text-blue-400">{formData.name.split(" ")[0]}</span>, revisá los detalles.</>  
                        : "Revisá los detalles."}
                    </h2>

                  </div>

                  {/* Tarjeta principal — brief del proyecto */}
                  <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden">
                    {/* Acento de color arriba */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Contacto */}
                      <div className="space-y-1">
                        <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-blue-400">Quién</p>
                        <p className="text-white font-semibold text-lg leading-tight">{formData.name || "—"}</p>
                        <p className="text-[#A1A1AA] text-xs break-all">{formData.email || "—"}</p>
                      </div>

                      {/* Servicio */}
                      <div className="space-y-1">
                        <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-blue-400">Qué</p>
                        <div className="flex items-center gap-2">
                          {selectedService?.icon && (
                            <div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                              <selectedService.icon className="w-4 h-4 text-blue-400" />
                            </div>
                          )}
                          <div>
                            <p className="text-white font-semibold leading-tight">{selectedService?.title || "—"}</p>
                            <p className="text-[#A1A1AA] text-xs">{selectedService?.time || "—"}</p>
                          </div>
                        </div>
                      </div>

                      {/* Presupuesto */}
                      <div className="space-y-1">
                        <p className="text-[11px] font-mono uppercase tracking-[0.35em] text-blue-400">Alcance</p>
                        <p className="text-white font-semibold leading-tight">{selectedBudget?.label || "—"}</p>
                        <p className="text-[#A1A1AA] text-xs">{selectedBudget?.range || "—"}</p>
                      </div>
                    </div>
                  </div>

                  {/* Textarea con personalidad */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono uppercase tracking-widest text-blue-500 ml-1">
                      ¿Algo más que debamos saber? <span className="text-white/20 normal-case tracking-normal not-italic font-normal">opcional</span>
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Referencias de estilo, funcionalidades clave, fechas importantes, o lo que quieras que tengamos en cuenta…"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all resize-none text-sm leading-relaxed"
                      rows={3}
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={prevStep}
                      className="w-1/3 py-3 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/5 transition-all"
                    >
                      Atrás
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="w-2/3 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-600/20"
                    >
                      Enviar Proyecto 🚀
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

// Sub-componente: Input Estilizado
function InputField({ label, placeholder, value, onChange }: { 
  label: string; 
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-mono uppercase tracking-widest text-blue-500 ml-1">{label}</label>
      <input 
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-3 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
      />
    </div>
  );
}

// Sub-componente: Card de Servicio
function ServiceCard({ title, icon: Icon, time, isSelected, onClick }: any) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "cursor-pointer p-3 rounded-2xl border transition-all flex flex-col items-center text-center",
        isSelected 
          ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.06)]" 
          : "bg-white/5 border-white/10 hover:border-white/20"
      )}
    >
      <Icon className="w-8 h-8 mb-2 text-blue-400" />
      <h4 className="text-sm font-bold text-white mb-1">{title}</h4>
      <p className="text-[10px] text-[#A1A1AA]">{time}</p>
    </motion.div>
  );
}

// Sub-componente: Card de Presupuesto
function BudgetCard({ label, range, isSelected, onClick }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "cursor-pointer p-3 rounded-2xl border transition-all text-center",
        isSelected 
          ? "bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.06)]" 
          : "bg-white/5 border-white/10 hover:border-white/20"
      )}
    >
      <p className="text-white font-bold mb-1">{label}</p>
      <p className="text-[10px] text-[#A1A1AA]">{range}</p>
    </motion.div>
  );
}
