
import w1 from "@/assets/winner-1.jpg";
import w2 from "@/assets/winner-2.jpg";
import w3 from "@/assets/winner-3.jpg";

const ALUMNI = [
  { 
    img: w1, 
    name: "The Emerging Visionary", 
    year: "Founding Class - 2026", 
    before: "Final year student with a thesis ready to launch.", 
    after: "Creative Director of an Adorzia-funded label.", 
    quote: "I have the vision but lacked the capital. ADORZIA is the only platform providing 100% ownership with full production support." 
  },
  { 
    img: w2, 
    name: "The Industry Pivot", 
    year: "Founding Class - 2026", 
    before: "Working professional designing for major retail brands.", 
    after: "Independent Founder with a 50/50 profit-sharing partner.", 
    quote: "I was tired of building someone else's brand. ADORZIA gives me the investment to finally build and own my own name." 
  },
  { 
    img: w3, 
    name: "The Heritage Artisan", 
    year: "Founding Class - 2026", 
    before: "Self-taught designer focused on traditional craft.", 
    after: "Marketplace-ready brand with a year of mentorship.", 
    quote: "The PKR 300K prize and manufacturing backing mean I can scale my artisanal craft without the financial risk of a startup." 
  },
];

export function Winners() {
  return (
    <section id="winners" className="py-16 md:py-32 border-b border-border">
      <div className="container-cut">
        <div className="mb-10 md:mb-14">
          <span className="eyebrow">— The ADORZIA Legacy</span>
          <h2 className="mt-3 text-4xl md:text-7xl">Who we are looking for.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {ALUMNI.map((a) => (
            <article key={a.name} className="group">
              <div className="relative overflow-hidden bg-surface aspect-[4/5]">
                <img src={a.img} alt={a.name} loading="lazy" width={640} height={800}
                  className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute top-4 left-4 font-mono text-[10px] tracking-[0.3em] uppercase bg-background/80 px-2 py-1">{a.year}</div>
              </div>
              <h3 className="mt-5 text-2xl">{a.name}</h3>
              <div className="mt-3 font-mono text-xs uppercase tracking-wider text-foreground/60 space-y-1">
                <div><span className="text-primary">Background →</span> {a.before}</div>
                <div><span className="text-primary">Opportunity →</span> {a.after}</div>
              </div>
              <blockquote className="mt-4 font-serif italic text-foreground/80 border-l-2 border-primary pl-4">
                "{a.quote}"
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

