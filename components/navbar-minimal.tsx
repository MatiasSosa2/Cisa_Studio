"use client";
import { Button } from "@/components/ui/moving-border";
import { useState } from "react";

export default function NavbarMinimal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <Button
          as="div"
          borderRadius="2rem"
          className="bg-[#161616]/90 backdrop-blur-xl text-[#EDEDED] px-4 py-2 border-white/10 border"
          containerClassName="h-auto"
          duration={3000}
          borderClassName="h-8 w-48 opacity-[0.9] bg-[radial-gradient(ellipse,#3B82F6_20%,#3B82F6_40%,transparent_70%)]"
        >
          {/* Versión móvil */}
          <div className="flex md:hidden items-center gap-4">
            {/* Foto circular */}
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center overflow-hidden">
              <span className="text-white text-sm font-bold">MG</span>
            </div>
            
            <button className="text-[#EDEDED] tracking-tight font-medium hover:text-[#3B82F6] transition-colors">
              Empezar Proyecto
            </button>
            
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col gap-1 w-10 h-10 justify-center items-center rounded-full bg-[#3B82F6] hover:bg-[#2563EB] transition-colors"
              aria-label="Menu"
            >
              <span className="w-5 h-0.5 bg-white rounded"></span>
              <span className="w-5 h-0.5 bg-white rounded"></span>
              <span className="w-5 h-0.5 bg-white rounded"></span>
            </button>
          </div>

          {/* Versión desktop */}
          <div className="hidden md:flex items-center gap-8">
            {/* Foto circular */}
            <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center overflow-hidden">
              <span className="text-white text-sm font-bold">MG</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[#A1A1AA]">
              <a href="#home" className="hover:text-[#EDEDED] transition-colors">Inicio</a>
              <a href="#servicios" className="hover:text-[#EDEDED] transition-colors">Servicios</a>
              <a href="#proyectos" className="hover:text-[#EDEDED] transition-colors">Proyectos</a>
            </div>
            
            <button className="bg-white text-[#0A0A0A] px-6 py-2 rounded-full font-medium hover:bg-[#EDEDED] transition-all text-sm">
              Contactar
            </button>
          </div>
        </Button>
      </nav>

      {/* Menú desplegable móvil */}
      {isOpen && (
        <div className="md:hidden fixed top-24 left-1/2 -translate-x-1/2 z-40">
          <div className="bg-[#161616]/95 backdrop-blur-xl rounded-2xl border border-white/10 px-6 py-4 shadow-2xl">
            <div className="flex flex-col gap-3 text-sm text-[#A1A1AA]">
              <a 
                href="#servicios" 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#EDEDED] transition-colors py-2"
              >
                Servicios
              </a>
              <a 
                href="#proyectos" 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#EDEDED] transition-colors py-2"
              >
                Proyectos
              </a>
              <a 
                href="#contacto" 
                onClick={() => setIsOpen(false)}
                className="hover:text-[#EDEDED] transition-colors py-2"
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
