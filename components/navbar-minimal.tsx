"use client";
import { Button } from "@/components/ui/moving-border";

export default function NavbarMinimal() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <Button
        as="div"
        borderRadius="2rem"
        className="bg-[#161616]/90 backdrop-blur-xl text-[#EDEDED] px-4 py-2 border-white/10 border"
        containerClassName="h-auto"
        duration={3000}
        borderClassName="h-8 w-48 opacity-[0.9] bg-[radial-gradient(ellipse,#3B82F6_20%,#3B82F6_40%,transparent_70%)]"
      >
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-8 h-8 rounded-full bg-[#3B82F6] flex items-center justify-center overflow-hidden flex-shrink-0">
            <span className="text-white text-xs font-bold">MG</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm text-[#A1A1AA]">
            <a href="#home"       className="hover:text-[#EDEDED] transition-colors whitespace-nowrap">Inicio</a>
            <a href="#servicios"  className="hover:text-[#EDEDED] transition-colors whitespace-nowrap">Servicios</a>
            <a href="#proyectos"  className="hover:text-[#EDEDED] transition-colors whitespace-nowrap">Proyectos</a>
          </div>

          {/* CTA */}
          <button className="bg-white text-[#0A0A0A] px-4 py-1.5 rounded-full font-medium hover:bg-[#EDEDED] transition-all text-sm whitespace-nowrap">
            Contactar
          </button>
        </div>
      </Button>
    </nav>
  );
}

