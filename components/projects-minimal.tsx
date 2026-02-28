"use client";

import { motion, useMotionValue, animate, MotionValue } from "framer-motion";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef, useMemo, MutableRefObject } from "react";

/* ─── Datos (orden fijo, sin shuffle) ───────────────────────────────────── */

const SOURCE = [
  { id: 1,  image: "/Imagenes/Comentarios.png" },
  { id: 2,  image: "/Imagenes/Fantech.png"     },
  { id: 3,  image: "/Imagenes/Fantech2.png"    },
  { id: 4,  image: "/Imagenes/Fantech3.png"    },
  { id: 5,  image: "/Imagenes/Handoff.png"     },
  { id: 6,  image: "/Imagenes/Handoff2.png"    },
  { id: 7,  image: "/Imagenes/Handoff3.png"    },
  { id: 8,  image: "/Imagenes/Handoff4.png"    },
  { id: 9,  image: "/Imagenes/Handoff5.png"    },
  { id: 10, image: "/Imagenes/Menswear.png"    },
];
type Item = typeof SOURCE[number];

const SLIDE_H = 300;  // altura de cada card (px)
const GAP     = 4;    // separación pequeña para efecto de andén circular
const VISIBLE = 3;    // cards visibles a la vez

/* ─── Card individual ────────────────────────────────────────────────────── */
// Usa trackX.on("change") + DOM directo para evitar closures stale en useTransform

function SlideCard({
  item,
  slideW,      // ancho para el layout (del estado del padre)
  loopIndex,   // posición en el array triplicado, estable
  slideWRef,   // ref al ancho real, siempre actualizado
  trackX,
  viewportW,
}: {
  item: Item;
  slideW: number;
  loopIndex: number;
  slideWRef: MutableRefObject<number>;
  trackX: MotionValue<number>;
  viewportW: MutableRefObject<number>;
}) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = (tx: number) => {
      const el = divRef.current;
      if (!el) return;
      const sw = slideWRef.current;
      const leftEdge   = loopIndex * (sw + GAP);
      const cardCenter = tx + leftEdge + sw / 2;
      const dist       = cardCenter - viewportW.current / 2;
      const rotY = Math.max(-55, Math.min(55, -dist * 0.07));
      const sc   = Math.max(0.65, 1 - Math.abs(dist) * 0.00055);
      const op   = Math.max(0.30, 1 - Math.abs(dist) * 0.0009);
      el.style.transform = `perspective(900px) rotateY(${rotY}deg) scale(${sc})`;
      el.style.opacity   = String(op);
    };
    update(trackX.get());
    return trackX.on("change", update);
  }, [trackX, loopIndex, slideWRef, viewportW]);

  return (
    <div
      ref={divRef}
      className="flex-shrink-0 overflow-hidden rounded-2xl"
      style={{ width: slideW, height: SLIDE_H, willChange: "transform, opacity" }}
    >
      <Image
        src={item.image}
        alt=""
        width={1360}
        height={632}
        className="w-full h-full object-cover pointer-events-none"
        draggable={false}
        loading="eager"
        unoptimized
      />
    </div>
  );
}

/* ─── Componente principal ───────────────────────────────────────────────── */

export default function ProjectsMinimal() {
  // `current` va de 0 a N-1 (lineal, sin loop)
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideW, setSlideW]   = useState(400); // estado para forzar re-render al medir
  const N = SOURCE.length;

  const trackX     = useMotionValue(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const vpW        = useRef(1280);
  const slideWRef  = useRef(400);

  // Triplicamos para que los laterales siempre muestren fotos contiguas (con wrap)
  const loop = useMemo(() => [...SOURCE, ...SOURCE, ...SOURCE], []);

  // El bloque del medio es siempre el punto de referencia
  const targetX = useCallback((idx: number, sw: number) =>
    vpW.current / 2 - ((N + idx) * (sw + GAP) + sw / 2),
  [N]);

  // Medir viewport y ancho de slide
  useEffect(() => {
    const measure = () => {
      vpW.current = window.innerWidth;
      const padding = 48 * 2;
      const sw = Math.floor((vpW.current - padding - GAP * (VISIBLE - 1)) / VISIBLE);
      slideWRef.current = sw;
      setSlideW(sw); // fuerza re-render con dimensiones reales
      trackX.set(targetX(current, sw));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Navegar a un índice concreto con animación spring
  const goTo = useCallback((idx: number) => {
    const sw = slideWRef.current;
    const target = targetX(idx, sw);
    setSliding(true);
    animate(trackX, target, {
      type: "spring", stiffness: 280, damping: 34,
      onComplete: () => setSliding(false),
    });
  }, [trackX, targetX]);

  // Navegar: lineal 0→N-1; al pasar de N-1 bajar a la siguiente sección (una sola vez)
  const done = useRef(false);
  const navigate = useCallback((dir: 1 | -1) => {
    if (sliding) return;
    if (dir === 1 && done.current) return; // ya salió, no repetir scroll
    if (dir === -1) done.current = false;  // si vuelve, resetear
    const next = current + dir;

    if (next >= N) {
      done.current = true; // bloquea futuros intentos de navegar
      const nextSection = sectionRef.current?.nextElementSibling as HTMLElement | null;
      nextSection?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    if (next < 0) return;

    setCurrent(next);
    goTo(next);
  }, [current, sliding, goTo, N]);

  // Scroll vertical → navegar el slider
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    let acc = 0, rafId = 0;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      acc += e.deltaY;
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        if (Math.abs(acc) > 40) { navigate(acc > 0 ? 1 : -1); acc = 0; }
      });
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [navigate]);

  // Autoplay: avanza solo cada 3 s, se pausa al hacer hover
  const hovering = useRef(false);
  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) navigate(1);
    }, 3000);
    return () => clearInterval(id);
  }, [navigate]);

  // Drag horizontal
  const dragStart = useRef(0);
  const onPointerDown = (e: React.PointerEvent) => { dragStart.current = e.clientX; };
  const onPointerUp   = (e: React.PointerEvent) => {
    const diff = e.clientX - dragStart.current;
    if (Math.abs(diff) > 60) navigate(diff < 0 ? 1 : -1);
  };

  return (
    <section
      ref={sectionRef}
      id="proyectos"
      className="relative bg-[radial-gradient(ellipse_at_center,#0F0F0F_0%,#000000_100%)] py-32 overflow-hidden"
    >
      {/* Encabezado */}
      <motion.div
        className="flex flex-col items-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Proyectos Destacados
        </h2>
        <span className="mt-3 block h-[3px] w-24 rounded-full bg-[#3B82F6]" />
      </motion.div>

      {/* ── Track del slider ── */}
      <div
        className="relative select-none overflow-hidden"
        style={{ cursor: "grab", height: SLIDE_H }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onMouseEnter={() => { hovering.current = true; }}
        onMouseLeave={() => { hovering.current = false; }}
      >
        <motion.div
          className="absolute top-0 flex items-center"
          style={{ x: trackX, gap: GAP, height: SLIDE_H }}
        >
          {loop.map((item, i) => (
            <SlideCard
              key={`${item.id}-${i}`}
              item={item}
              slideW={slideW}
              loopIndex={i}
              slideWRef={slideWRef}
              trackX={trackX}
              viewportW={vpW}
            />
          ))}
        </motion.div>
      </div>

      {/* ── Controles: sólo dots + contador ── */}
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          {SOURCE.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!sliding) { setCurrent(i); goTo(i); } }}
              className={`rounded-full transition-all duration-300 ${
                current === i
                  ? "w-6 h-[3px] bg-[#3B82F6]"
                  : "w-3 h-[3px] bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        <span className="text-[#A1A1AA] text-sm tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
