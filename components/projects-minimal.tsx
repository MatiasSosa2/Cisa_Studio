"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Festival Vibras de Verano",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800"
  },
  {
    id: 2,
    title: "Rediseño ShopEase",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
  },
  {
    id: 3,
    title: "Dashboard TechFlow",
    category: "Diseño Web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800"
  },
  {
    id: 4,
    title: "Portafolio Minimalista",
    category: "Desarrollo",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800"
  }
];

function ProjectCard({ 
  project, 
  index, 
  onInView,
  isLast = false
}: { 
  project: typeof projects[0]; 
  index: number;
  onInView: (index: number, progress: number) => void;
  isLast?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Altura donde la tarjeta se "pega" - más abajo para mejor visualización
  // Aproximadamente 30% más abajo desde el top original
  const stickyTop = 250;
  
  // Detectamos el progreso del scroll de esta tarjeta específica
  // Offset ajustado para un scroll más fluido y continuo
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 50%"], // Extiende la animación más allá
  });

  // Reportar progreso al componente padre
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      onInView(index, latest);
    });
    return () => unsubscribe();
  }, [scrollYProgress, index, onInView]);

  // TRANSFORMACIONES CLAVE - Efecto de carpeta vertical equilibrado
  // El último proyecto NO se transforma, se queda fijo
  const scaleX = useTransform(scrollYProgress, [0, 0.4, 1], isLast ? [1, 1, 1] : [1, 0.9, 0.7]);
  const scaleY = useTransform(scrollYProgress, [0, 0.4, 1], isLast ? [1, 1, 1] : [1, 0.92, 0.75]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], isLast ? [1, 1, 1] : [1, 0.6, 0.2]);
  
  // Movimiento vertical HACIA ABAJO - el último NO se mueve
  const yMovement = useTransform(scrollYProgress, [0, 0.3, 1], isLast ? [0, 0, 0] : [0, 50, 400]);

  // Desenfoque - el último NO se desenfoca
  const blurValue = useTransform(scrollYProgress, [0, 0.6, 1], isLast ? [0, 0, 0] : [0, 2, 6]);
  const filter = useTransform(blurValue, (v) => `blur(${v}px)`);
  const zIndex = useTransform(scrollYProgress, [0, 1], [10, 1]);

  return (
    <div 
      ref={containerRef} 
      // Altura balanceada para scroll suave pero dinámico
      className="relative h-[80vh] flex flex-col items-center mb-[8vh]"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Un poco más lento
        className="sticky w-full group cursor-pointer"
        style={{
          top: `${stickyTop}px`,
          scaleX,
          scaleY,
          y: yMovement,
          opacity,
          filter,
          zIndex, // Z-index dinámico para mejor apilamiento
          transformOrigin: 'top center',
          willChange: 'transform, opacity', // Optimización de performance
        }}
      >
        <div 
          className="relative h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden bg-transparent"
        >
          <div className="h-full flex items-center justify-center">
            <div className="relative h-full w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover rounded-3xl"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-3xl"
          >
            <div className="bg-[#3B82F6] text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base">
              Ver Caso de Estudio
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsMinimal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [projectProgress, setProjectProgress] = useState<number[]>([0, 0, 0, 0]);

  const handleProjectInView = (index: number, progress: number) => {
    // Actualizar el progreso de cada proyecto
    setProjectProgress(prev => {
      const newProgress = [...prev];
      newProgress[index] = progress;
      return newProgress;
    });

    // Determinar qué proyecto está más activo basado en el progreso
    if (progress > 0.1 && progress < 0.9) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="proyectos" className="relative bg-[radial-gradient(ellipse_at_center,#0F0F0F_0%,#000000_100%)] py-32">
      {/* Progress Indicator - Fijo en viewport pero solo visible en esta sección */}
      <div className="sticky top-1/2 -translate-y-1/2 h-0 z-40 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="absolute right-8 hidden md:flex flex-col gap-4 pointer-events-auto"
        >
        {projects.map((project, index) => (
          <div key={project.id} className="relative group">
            <motion.div
              animate={{
                scale: activeIndex === index ? 1.5 : 1,
                backgroundColor: activeIndex === index ? "#3B82F6" : "rgba(255,255,255,0.2)",
                y: [0, -8, 0],
              }}
              transition={{ 
                scale: { duration: 0.3 },
                backgroundColor: { duration: 0.3 },
                y: { 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }
              }}
              className="w-2 h-2 rounded-full cursor-pointer"
              onClick={() => {
                const element = document.getElementById(`project-${index}`);
                element?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
            />
            
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#161616] border border-white/10 px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none"
            >
              <p className="text-xs text-[#EDEDED] font-medium">{project.title}</p>
              <p className="text-xs text-[#A1A1AA]">{project.category}</p>
            </motion.div>

            {/* Progress Line */}
            {index < projects.length - 1 && (
              <motion.div
                className="absolute left-1/2 -translate-x-1/2 top-full w-[2px] h-4 bg-white/10 origin-top"
                style={{
                  scaleY: projectProgress[index] > 0.5 ? 1 : 0,
                }}
              />
            )}
          </div>
        ))}
      </motion.div>
      </div>

      <div className="w-[90%] max-w-[900px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#EDEDED] mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-lg text-[#A1A1AA]">
            Trabajo seleccionado mostrando calidad sobre cantidad
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={project.id} id={`project-${index}`}>
              <ProjectCard 
                project={project} 
                index={index}
                onInView={handleProjectInView}
                isLast={index === projects.length - 1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
