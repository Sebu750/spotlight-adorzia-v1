
const PERKS = [
  { k: "PKR 300K", v: "Cash prize", d: "Awarded to the Top 1 winner to accelerate their brand's growth." },
  { k: "100%", v: "Ownership", d: "You remain the sole legal owner of your brand, trademarks, and IP." },
  { k: "12 months", v: "Investment", d: "Full production and manufacturing funding for the Top 10 designers." },
  { k: "50%", v: "Profit share", d: "Net profit split after all production and marketing expenses are recovered." },
  { k: "Market", v: "Global Launch", d: "Exclusive featured collection drop on the ADORZIA digital marketplace." },
  { k: "Runway", v: "Fall 2026", d: "Professional showcase for the Top 10 finalists on Sept 14th." },
];

export function Prize() {
  return (
    <section id="prize" className="py-16 md:py-32 border-b border-border">
      <div className="container-cut">
        <div className="grid lg:grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
          <div className="lg:col-span-5">
            <span className="eyebrow">— For designers</span>
            <h2 className="mt-3 text-4xl md:text-7xl">The prize<br /><span className="italic font-serif normal-case font-normal text-foreground/80">isn't just</span> cash.</h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 self-end">
            <p className="font-serif text-base md:text-lg text-foreground/70 leading-relaxed">
              Most competitions hand you a check and a photo op. We hand you a year of access to the people who decide which collections get bought, photographed, and worn.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {PERKS.map((p) => (
            <div key={p.v} className="bg-background p-6 md:p-8 lg:p-10 relative">
              <div className="display text-4xl md:text-5xl lg:text-6xl text-primary">{p.k}</div>
              <div className="mt-3 md:mt-4 display text-lg md:text-xl">{p.v}</div>
              <p className="mt-2 md:mt-3 font-serif text-foreground/65 leading-relaxed text-sm md:text-base">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
