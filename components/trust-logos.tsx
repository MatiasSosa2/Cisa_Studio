export default function TrustLogos() {
  const logos = ["Orion", "Nebula", "Apex", "Lumen", "Quantum", "Zenith"];
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
        {logos.map((name) => (
          <div
            key={name}
            className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 h-16 text-white/70 grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition"
            aria-label={`Logo de confianza: ${name}`}
          >
            <span className="text-sm tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
