import type { CSSProperties } from "react";

type ParticleConfig = {
  top: string;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
};

const PARTICLES: ParticleConfig[] = [
  { top: "4%", left: "10%", size: 2, duration: 20, delay: 0, opacity: 0.45 },
  { top: "7%", left: "26%", size: 3, duration: 26, delay: 2, opacity: 0.52 },
  { top: "12%", left: "48%", size: 2, duration: 18, delay: 3, opacity: 0.4 },
  { top: "20%", left: "32%", size: 4, duration: 28, delay: 5, opacity: 0.55 },
  { top: "24%", left: "12%", size: 2, duration: 22, delay: 7, opacity: 0.35 },
  { top: "28%", left: "58%", size: 3, duration: 25, delay: 1, opacity: 0.48 },
  { top: "32%", left: "72%", size: 2, duration: 19, delay: 4, opacity: 0.4 },
  { top: "36%", left: "84%", size: 3, duration: 24, delay: 6, opacity: 0.5 },
  { top: "42%", left: "66%", size: 4, duration: 27, delay: 8, opacity: 0.6 },
  { top: "46%", left: "38%", size: 2, duration: 21, delay: 9, opacity: 0.42 },
  { top: "52%", left: "18%", size: 3, duration: 22, delay: 10, opacity: 0.44 },
  { top: "56%", left: "8%", size: 2, duration: 20, delay: 4, opacity: 0.32 },
  { top: "58%", left: "28%", size: 3, duration: 23, delay: 6, opacity: 0.45 },
  { top: "60%", left: "52%", size: 3, duration: 24, delay: 12, opacity: 0.5 },
  { top: "64%", left: "70%", size: 3, duration: 22, delay: 11, opacity: 0.52 },
  { top: "68%", left: "38%", size: 2, duration: 19, delay: 6, opacity: 0.42 },
  { top: "72%", left: "15%", size: 3, duration: 21, delay: 9, opacity: 0.38 },
  { top: "74%", left: "58%", size: 2, duration: 18, delay: 13, opacity: 0.36 },
  { top: "76%", left: "82%", size: 2, duration: 18, delay: 10, opacity: 0.4 },
  { top: "80%", left: "45%", size: 3, duration: 23, delay: 7, opacity: 0.47 },
  { top: "82%", left: "28%", size: 2, duration: 19, delay: 5, opacity: 0.35 },
  { top: "84%", left: "72%", size: 3, duration: 24, delay: 14, opacity: 0.48 },
  { top: "88%", left: "60%", size: 2, duration: 20, delay: 11, opacity: 0.4 },
  { top: "90%", left: "76%", size: 3, duration: 25, delay: 15, opacity: 0.5 },
  { top: "18%", left: "90%", size: 3, duration: 25, delay: 6, opacity: 0.46 },
  { top: "34%", left: "5%", size: 2, duration: 21, delay: 3, opacity: 0.34 },
  { top: "48%", left: "90%", size: 2, duration: 22, delay: 7, opacity: 0.4 },
  { top: "66%", left: "94%", size: 3, duration: 23, delay: 5, opacity: 0.5 },
  { top: "12%", left: "64%", size: 2, duration: 17, delay: 2, opacity: 0.38 },
  { top: "40%", left: "50%", size: 3, duration: 26, delay: 9, opacity: 0.56 },
  { top: "8%", left: "54%", size: 2, duration: 21, delay: 4, opacity: 0.42 },
  { top: "16%", left: "38%", size: 3, duration: 24, delay: 6, opacity: 0.5 },
  { top: "22%", left: "64%", size: 2, duration: 19, delay: 8, opacity: 0.37 },
  { top: "26%", left: "86%", size: 2, duration: 21, delay: 5, opacity: 0.4 },
  { top: "30%", left: "44%", size: 3, duration: 22, delay: 7, opacity: 0.48 },
  { top: "38%", left: "24%", size: 2, duration: 20, delay: 3, opacity: 0.36 },
  { top: "44%", left: "58%", size: 3, duration: 24, delay: 10, opacity: 0.5 },
  { top: "50%", left: "72%", size: 2, duration: 19, delay: 6, opacity: 0.38 },
  { top: "54%", left: "34%", size: 2, duration: 22, delay: 9, opacity: 0.4 },
  { top: "62%", left: "48%", size: 3, duration: 21, delay: 11, opacity: 0.52 },
  { top: "70%", left: "62%", size: 2, duration: 20, delay: 5, opacity: 0.4 },
  { top: "78%", left: "32%", size: 2, duration: 19, delay: 8, opacity: 0.36 },
  { top: "86%", left: "40%", size: 3, duration: 25, delay: 12, opacity: 0.48 },
  { top: "92%", left: "24%", size: 2, duration: 21, delay: 14, opacity: 0.38 },
  { top: "94%", left: "52%", size: 3, duration: 26, delay: 16, opacity: 0.5 },
  { top: "82%", left: "90%", size: 2, duration: 20, delay: 9, opacity: 0.4 },
  { top: "58%", left: "12%", size: 3, duration: 22, delay: 13, opacity: 0.46 },
  { top: "46%", left: "6%", size: 2, duration: 20, delay: 4, opacity: 0.34 }
];

export default function SpaceBg() {
  return (
    <div className="space-bg fixed inset-0 -z-10 overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(6,182,212,0.18)_0%,_transparent_65%)] blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-1/4 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.14)_0%,_transparent_65%)] blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.05),_transparent_70%)]" />
      </div>

      <div className="absolute inset-0">
        {PARTICLES.map((particle, index) => {
          const style: CSSProperties = {
            top: particle.top,
            left: particle.left,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`
          };

          return <span key={`particle-${index}`} className="space-particle" style={style} />;
        })}
      </div>

    </div>
  );
}
