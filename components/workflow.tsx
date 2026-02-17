"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Step = {
  id: number;
  text: string;
  description: string;
  checked: boolean;
};

const initialSteps: Step[] = [
  {
    id: 1,
    text: "1. Discovery call",
    checked: false,
    description:
      "Reunión inicial para entender objetivos, audiencia, presupuesto y tiempos. Alistamos referencias y prioridades.",
  },
  {
    id: 2,
    text: "2. Alcance y propuesta",
    checked: false,
    description:
      "Definimos funcionalidades, secciones y entregables. Presentamos propuesta con tiempos, inversión y cronograma.",
  },
  {
    id: 3,
    text: "3. Diseño y tokens",
    checked: false,
    description:
      "Armamos moodboard, paleta Apple Dark y componentes clave (Hero, Servicios, Contacto). Validamos antes de construir.",
  },
  {
    id: 4,
    text: "4. Desarrollo",
    checked: false,
    description:
      "Implementación con Next.js + Tailwind, microinteracciones con Framer Motion y optimización de performance.",
  },
  {
    id: 5,
    text: "5. QA y lanzamiento",
    checked: false,
    description:
      "Pruebas, accesibilidad, métricas, últimos ajustes y despliegue. Activamos analítica y CTAs (WhatsApp).",
  },
];

export default function SortableListDemo({ inline = false }: { inline?: boolean }) {
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleCheck = (id: number) => {
    setSteps((prev) => prev.map((s) => (s.id === id ? { ...s, checked: !s.checked } : s)));
  };

  const Card = (
    <div className="h-full w-full rounded-2xl border border-border bg-bg-surface/80 p-4 text-text-high shadow-elevation-1">
        <h3 className="text-xl font-semibold text-center">Pasos para iniciar tu proyecto</h3>
        <p className="mt-2 text-center text-text-low">Transparencia y enfoque en valor desde el primer día.</p>
        <ul className="mt-6 space-y-3">
          {steps.map((step) => {
            const isOpen = openId === step.id;
            return (
              <li key={step.id} className="rounded-xl border border-border bg-black/20">
                <button
                  className="flex w-full items-center justify-between gap-3 px-4 py-3"
                  onClick={() => setOpenId(isOpen ? null : step.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={step.checked}
                      onChange={() => toggleCheck(step.id)}
                      aria-label={`Completar: ${step.text}`}
                    />
                    <span className="text-sm md:text-base font-medium">{step.text}</span>
                  </div>
                  <span className="text-xs text-text-low">{isOpen ? "Ocultar" : "Ver más"}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="px-4 pb-4"
                    >
                      <p className="text-sm text-text-low">{step.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
  );

  if (inline) {
    return Card;
  }
  return (
    <section className="container mx-auto px-6">
      <div className="mx-auto max-w-3xl">{Card}</div>
    </section>
  );
}
