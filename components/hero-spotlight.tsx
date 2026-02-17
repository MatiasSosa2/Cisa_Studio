"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSpotlight() {
  return (
    <section className="relative min-h-screen w-full flex items-start justify-center bg-transparent antialiased overflow-hidden pt-4 md:pt-8">
      <div className="max-w-[1400px] mx-auto relative z-10 w-full px-6 lg:px-12 mt-[12vh]">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Texto a la izquierda */}
          <div className="flex-1 text-left space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[0.95]"
            >
              Diseño que orbita<br />la <span className="text-cyan-400">perfección</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-base md:text-lg text-neutral-400 max-w-xl leading-relaxed font-medium"
            >
              Ayudo a marcas a navegar el universo digital con <span className="text-white font-semibold">interfaces de alto impacto</span> y experiencias de otro planeta.
            </motion.p>

            {/* Botones con microanimaciones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {/* CTA Principal - Verde Agua */}
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-emerald-500 text-black px-10 py-4 rounded-full font-bold text-base shadow-[0_8px_32px_rgba(16,185,129,0.3)] hover:bg-emerald-400 transition-all duration-300 overflow-hidden group"
              >
                <span className="relative z-10">Lanzar Proyecto</span>
                {/* Efecto de brillo al hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
              
              {/* CTA Secundario - Celeste con borde */}
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgb(34, 211, 238)" }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 group"
              >
                <span>Explorar</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M7 10l5 5 5-5z"/>
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>

          {/* Imagen a la derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            {/* Glow sutil en verde agua */}
            <div className="absolute inset-0 bg-emerald-400/5 blur-[100px] rounded-full" />
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative h-[325px] md:h-[420px] lg:h-[490px]"
            >
              <div 
                className="w-full h-full bg-transparent backdrop-blur-xl flex items-center justify-center relative rounded-[3rem] overflow-hidden"
              >
                <div className="absolute -inset-8 bg-[radial-gradient(circle,_rgba(6,182,212,0.18),_transparent_60%)] opacity-40 blur-3xl" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/10 to-transparent" aria-hidden />
                <div className="absolute inset-0 opacity-70 mix-blend-screen">
                  <div className="absolute -top-12 right-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,_rgba(6,182,212,0.4),_transparent_65%)] blur-3xl" />
                  <div className="absolute bottom-0 left-1/4 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.35),_transparent_70%)] blur-3xl" />
                </div>
                <div className="absolute inset-0 opacity-35 mix-blend-overlay">
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,_rgba(6,182,212,0.18),_rgba(16,185,129,0.05),_rgba(0,0,0,0))]" />
                </div>
                <Image
                  src="https://st2.depositphotos.com/1017228/11074/i/450/depositphotos_110744734-stock-photo-serious-man-using-computer-and.jpg"
                  alt="Profesional trabajando"
                  fill
                  className="object-cover saturate-[0.85] brightness-[1.05] contrast-[1.1] mix-blend-screen"
                  priority
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_rgba(6,182,212,0.35),_transparent_55%)] opacity-45 mix-blend-lighten" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,_rgba(16,185,129,0.3),_transparent_60%)] opacity-40 mix-blend-lighten" />
                {/* Fade negro hacia abajo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-[3rem]"></div>
                {/* Fade negro hacia la izquierda (conecta con el texto) */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/80 rounded-[3rem]"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
