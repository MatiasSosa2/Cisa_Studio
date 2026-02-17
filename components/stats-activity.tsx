"use client";
import { motion } from "framer-motion";

type ActivityData = {
  label: string;
  value: number; // porcentaje 0-100
  color: string;
  size: number;
  current: number | string;
  target: number | string;
  unit: string;
};

const activities: ActivityData[] = [
  {
    label: "PROYECTOS",
    value: 80,
    color: "#04C7DD",
    size: 200,
    current: 20,
    target: "+",
    unit: "",
  },
  {
    label: "ENTREGA",
    value: 100,
    color: "#A3F900",
    size: 160,
    current: "≤3",
    target: "semanas",
    unit: "",
  },
  {
    label: "SATISFACCIÓN",
    value: 95,
    color: "#FF2D55",
    size: 120,
    current: "95",
    target: "%",
    unit: "",
  },
];

function CircleProgress({ data, index }: { data: ActivityData; index: number }) {
  const strokeWidth = 16;
  const radius = (data.size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const progress = ((100 - data.value) / 100) * circumference;

  const gradientId = `gradient-${data.label.toLowerCase()}`;
  const gradientUrl = `url(#${gradientId})`;

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="relative">
        <svg
          width={data.size}
          height={data.size}
          viewBox={`0 0 ${data.size} ${data.size}`}
          className="-rotate-90"
          aria-label={`${data.label} — ${data.value}%`}
        >
          <title>{`${data.label} — ${data.value}%`}</title>

          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: data.color, stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: data.color, stopOpacity: 0.7 }} />
            </linearGradient>
          </defs>

          <circle
            cx={data.size / 2}
            cy={data.size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-zinc-200/40 dark:text-zinc-800/40"
          />

          <motion.circle
            cx={data.size / 2}
            cy={data.size / 2}
            r={radius}
            fill="none"
            stroke={gradientUrl}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: progress }}
            transition={{ duration: 1.6, delay: index * 0.2, ease: "easeInOut" }}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(0,0,0,0.15))" }}
          />
        </svg>
      </div>
    </motion.div>
  );
}

export default function StatsActivity({ title = "Resultados y métricas", inline = false }: { title?: string; inline?: boolean }) {
  const Card = (
    <div className="h-full w-full rounded-3xl border border-border bg-bg-surface/80 p-8 text-text-high shadow-elevation-1">
        <div className="flex flex-col items-center gap-8">
          <motion.h2
            className="text-2xl font-medium"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          <div className="flex items-center">
            <div className="relative w-[180px] h-[180px]">
              {activities.map((activity, index) => (
                <CircleProgress key={activity.label} data={activity} index={index} />
              ))}
            </div>
            <motion.div
              className="flex flex-col gap-6 ml-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {activities.map((a) => (
                <div key={a.label} className="flex flex-col">
                  <span className="text-sm font-medium text-text-low">{a.label}</span>
                  <span className="text-2xl font-semibold" style={{ color: a.color }}>
                    {a.current}{typeof a.target === "string" ? a.target : `/${a.target}`}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
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
