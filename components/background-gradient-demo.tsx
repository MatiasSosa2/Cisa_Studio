"use client";
import { BackgroundGradient } from './ui/background-gradient';

export function BackgroundGradientDemo() {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-black border border-white/20">
        <div className="h-48 w-full rounded-xl bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_70%)]" />
        <p className="text-base sm:text-xl text-white mt-4 mb-2">
          Demo de borde iluminado
        </p>
        <p className="text-sm text-neutral-300">
          Ejemplo de tarjeta con luz perimetral sutil en fondo negro.
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-zinc-800 mt-4 text-xs font-bold">
          <span>Ver más</span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">Demo</span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
