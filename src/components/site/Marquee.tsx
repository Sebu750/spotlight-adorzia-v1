const PARTNERS = [
  "Indus Valley", "PSFD", "Sapphire", "Khaadi", "Textile Institute of Pakistan",
  "Lucky Knits", "Gul Ahmed", "Interloop", "Frieze", "Dawn News",
];

export function Marquee() {
  const items = [...PARTNERS, ...PARTNERS];
  return (
    <section className="border-y border-border bg-background py-6 overflow-hidden">
      <div className="container-cut mb-4">
        <span className="eyebrow">Seeking Partnership with</span>
      </div>
      <div className="relative">
        <div className="marquee-track">
          {items.map((p, i) => (
            <span key={i} className="display text-2xl md:text-3xl text-foreground/80 whitespace-nowrap">
              {p} <span className="text-primary px-4">✕</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
