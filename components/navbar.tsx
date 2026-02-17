"use client";
import { Button } from "@/components/ui/moving-border";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <Button
          as="div"
          borderRadius="2rem"
          className="bg-neutral-900/80 backdrop-blur-xl text-white px-4 py-2 border-cyan-500/50 border"
          containerClassName="h-auto"
          duration={3000}
        >
          {/* Versión móvil */}
          <div className="flex md:hidden items-center gap-4">
            {/* Foto circular */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center overflow-hidden">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            
            <button className="text-cyan-400 tracking-tight font-medium hover:text-cyan-300 transition-colors">
              Empezar Proyecto
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1 w-10 h-10 justify-center items-center rounded-full bg-cyan-400 hover:bg-cyan-300 transition-colors"
              aria-label="Menu"
            >
              <span className="w-5 h-0.5 bg-black rounded"></span>
              <span className="w-5 h-0.5 bg-black rounded"></span>
              <span className="w-5 h-0.5 bg-black rounded"></span>
            </button>
          </div>

          {/* Versión desktop */}
          <div className="hidden md:flex items-center gap-8">
            {/* Foto circular */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center overflow-hidden">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-cyan-300">
              <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
              <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
              <a href="#proyectos" className="hover:text-cyan-400 transition-colors">Proyectos</a>
            </div>
            
            <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-neutral-200 transition-all text-sm">
              Contactar
            </button>
          </div>
        </Button>
      </nav>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 z-40">
          <div className="bg-neutral-900/95 backdrop-blur-xl rounded-2xl border border-cyan-500/50 px-6 py-4 shadow-2xl">
            <div className="flex flex-col gap-3 text-sm text-cyan-300">
              <a 
                href="#servicios" 
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition-colors py-2"
              >
                Servicios
              </a>
              <a 
                href="#proyectos" 
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition-colors py-2"
              >
                Proyectos
              </a>
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="hover:text-cyan-400 transition-colors py-2"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
