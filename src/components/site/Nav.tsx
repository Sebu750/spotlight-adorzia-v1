import { useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#prize", label: "Prize" },
  { href: "#winners", label: "Founding" },
  { href: "#dates", label: "Dates" },
  { href: "#sponsors", label: "Sponsors" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-cut flex items-center justify-between h-14">
        <a href="#top" className="display text-xl tracking-tighter" onClick={() => setOpen(false)}>
          SPOT<span className="text-primary">/</span>LIGHT
        </a>
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-mono">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="hover:text-primary transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#apply" className="btn-cut text-xs px-3 py-2 md:px-4 md:py-2.5">
            <span className="label">Apply</span>
            <span className="label-alt">Now</span>
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 border border-border text-foreground"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-border bg-background">
          <div className="container-cut py-4 flex flex-col gap-4 text-sm uppercase tracking-[0.18em] font-mono">
            {LINKS.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="hover:text-primary transition-colors">{l.label}</a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
