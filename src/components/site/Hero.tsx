import hero from "@/assets/hero-runway.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden grain">
      <img
        src={hero}
        alt="Model walking the runway, motion blur"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />

      <div className="relative container-cut pt-24 md:pt-36 pb-12 md:pb-16 min-h-[100svh] flex flex-col">
        <div className="flex items-center gap-3 eyebrow">
          <span className="inline-block w-8 h-px bg-primary" />
          Fall 2026 · Open Call
        </div>

        <h1 className="mt-6 md:mt-8 text-[15vw] md:text-[8.5vw] lg:text-[7.2rem] xl:text-[8.5rem] leading-[0.85]">
          Stop interning.<br />
          <span className="text-primary">Start</span> competing.
        </h1>

        <p className="mt-6 md:mt-8 max-w-xl font-serif text-base md:text-xl text-foreground/85 leading-snug">
          3 rounds. 10 finalists. 1 winner.<br />
          Judged by HSY, Maheen Khan, Deepak Perwani, and Nomi Ansari.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
          <a href="#apply" className="btn-cut text-sm md:text-base">
            <span className="label">Apply Now — Early bird ends June 1st</span>
            <span className="label-alt">Yes, I'm ready</span>
          </a>
          <a href="#prize" className="btn-ghost justify-center">Download prospectus →</a>
        </div>

        <div className="mt-12 md:mt-auto pt-10 md:pt-16 grid grid-cols-3 gap-3 md:gap-6 max-w-2xl">
          <Stat n="300K" l="PKR Cash prize" />
          <Stat n="100" l="Shortlisted" />
          <Stat n="10" l="Finalist spots" />
        </div>
      </div>

      {/* Side ticker */}
      <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 origin-right">
        <span className="font-mono text-xs tracking-[0.4em] uppercase text-foreground/60">
         KARACHI · LAHORE · ISLAMABAD · MULTAN · FAISALABAD
        </span>
      </div>
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div className="border-t border-foreground/40 pt-3">
      <div className="display text-xl md:text-4xl">{n}</div>
      <div className="eyebrow mt-1 text-[0.6rem] md:text-xs">{l}</div>
    </div>
  );
}
