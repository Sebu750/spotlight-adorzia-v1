import { useState } from "react";

const FAQS = [
  { q: "Do I need to submit a full collection?", a: "No. Your initial application only requires your portfolio and design vision. We judge your creative point of view, not your current inventory." },
  { q: "Who owns the rights to my brand?", a: "You do. You retain 100% legal ownership of your trademarks, IP, and designs. ADORZIA is an investment and launch partner, not an owner." },
  { q: "Is the production funding a loan?", a: "No. For the Top 10 finalists, ADORZIA covers the manufacturing and production costs as an investment in your brand's market entry." },
  { q: "What happens if I don't win the grand prize?", a: "All Top 10 finalists receive professional runway exposure, a year of mentorship, and their collections are launched on our digital marketplace." },
  { q: "How does the profit-sharing work?", a: "For the funded collections, we use a 50/50 net profit split after production and marketing costs are recovered, ensuring you earn while you grow." },
  { q: "Who is eligible to apply?", a: "We are open to final-year fashion students, recent alumni, and independent designers across Pakistan who specialize in slow fashion and heritage craft." },
];


export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-32 border-b border-border">
      <div className="container-cut grid lg:grid-cols-12 gap-8 md:gap-10">
        <div className="lg:col-span-4">
          <span className="eyebrow">— FAQ</span>
          <h2 className="mt-3 text-4xl md:text-6xl">Read this first.</h2>
          <p className="mt-4 md:mt-6 font-serif text-foreground/65 text-sm md:text-base">Still unsure? Email <a href="mailto:spotlight@adorzia.com" className="text-primary underline underline-offset-4">spotlight@adorzia.com</a>.</p>
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-t border-border last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left py-6 flex items-start justify-between gap-6 group"
                >
                  <span className="display text-xl md:text-2xl group-hover:text-primary transition-colors">{f.q}</span>
                  <span className="text-primary text-2xl shrink-0 font-mono">{isOpen ? "−" : "+"}</span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="font-serif text-foreground/75 text-lg leading-relaxed max-w-2xl">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
