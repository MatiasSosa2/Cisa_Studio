"use client";
import { motion } from "framer-motion";

export default function FooterMinimal() {
  const socialLinks = [
    { name: "Dribbble", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" }
  ];

  return (
    <footer className="bg-[#0A0A0A] py-16 border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        {/* Trust Badges Realistas */}
        <div className="mb-16 pb-12 border-b border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Código Limpio</p>
                <p className="text-[#A1A1AA] text-xs">Escalable y mantenible</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Soporte Incluido</p>
                <p className="text-[#A1A1AA] text-xs">Post-lanzamiento</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Consulta Gratuita</p>
                <p className="text-[#A1A1AA] text-xs">Sin compromiso</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <div>
                <p className="text-white font-semibold text-sm mb-1">Precio Justo</p>
                <p className="text-[#A1A1AA] text-xs">Según tu proyecto</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo y descripción */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-[#3B82F6] flex items-center justify-center">
                <span className="text-white font-bold">CS</span>
              </div>
              <span className="text-[#EDEDED] font-bold text-xl">
                Cisa Studio
              </span>
            </div>
            <p className="text-[#A1A1AA] leading-relaxed">
              Estudio de diseño y desarrollo web creando experiencias digitales significativas.
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-[#EDEDED] font-bold mb-4 uppercase text-sm tracking-wider">
              Contáctanos
            </h3>
            <div className="space-y-2">
              <a href="mailto:hola@cisastudio.com" className="block text-[#A1A1AA] hover:text-[#3B82F6] transition-colors">
                hola@cisastudio.com
              </a>
              <a href="tel:+5491112345678" className="block text-[#A1A1AA] hover:text-[#3B82F6] transition-colors">
                +54 9 11 1234-5678
              </a>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-[#EDEDED] font-bold mb-4 uppercase text-sm tracking-wider">
              Sígueme
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="px-4 py-2 bg-[#161616] text-[#A1A1AA] rounded-full text-sm hover:bg-[#3B82F6] hover:text-white transition-colors border border-white/10"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 text-center text-[#A1A1AA] text-sm">
          <p>© {new Date().getFullYear()} Cisa Studio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
