import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";


const BUDGETS = [
  { v: "", l: "Select a sponsorship tier" },
  { v: "tier_founding", l: "Founding Partner (Headline)" },
  { v: "tier_production", l: "Production & Manufacturing Sponsor" },
  { v: "tier_award", l: "Award & Prize Sponsor (PKR 300K+)" },
  { v: "tier_logistics", l: "Logistics & Venue Sponsor" },
  { v: "tier_digital", l: "Digital & Media Partner" },
];



export function Sponsors() {
  const [open, setOpen] = useState(false);
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null); setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      company: String(fd.get("company") || "").trim(),
      contact_name: String(fd.get("contact_name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      budget: (String(fd.get("budget") || "") || null) as string | null,
      message: String(fd.get("message") || "").trim() || null,
    };
    if (!payload.company || !payload.contact_name || !payload.email) {
      setError("Company, name and email are required."); setLoading(false); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError("That email doesn't look right."); setLoading(false); return;
    }
    const { error: dbError } = await supabase.from("sponsor_inquiries").insert(payload);
    setLoading(false);
    if (dbError) { setError("Submission failed. Try again."); return; }
    setDone(true);
  }

  return (
    <section id="sponsors" className="py-16 md:py-28 border-b border-border">
      <div className="container-cut grid lg:grid-cols-12 gap-8 md:gap-10">
        <div className="lg:col-span-5">
          <span className="eyebrow">— For brands & mills</span>
          <h2 className="mt-3 text-3xl md:text-5xl">Own the next generation of talent.</h2>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
         <ul className="font-serif text-foreground/80 text-lg space-y-4 mb-8">
            <li className="flex gap-3">
                <span className="text-primary font-mono text-sm pt-1">01</span> 
                  Direct access to Pakistan’s top 100 shortlisted emerging designers.
                        </li>
                        <li className="flex gap-3">
                          <span className="text-primary font-mono text-sm pt-1">02</span> 
                            Exclusive brand integration in the Runway Finale and Jury Panel.
                                  </li>
 <li className="flex gap-3">
    <span className="text-primary font-mono text-sm pt-1">03</span> 
    Strategic partnership in the inaugural Adorzia Founding Designers Program.
  </li>
</ul>
          <button onClick={() => setOpen(o => !o)} className="btn-ghost">
            {open ? "Close form ×" : "Request sponsorship deck →"}
          </button>

          {open && (
            <form onSubmit={handleSubmit} className="mt-8 bg-surface border border-border p-6 md:p-8 space-y-4">
              {done ? (
                <div className="py-6 text-center">
                  <div className="display text-2xl text-primary">Deck on the way.</div>
                  <p className="mt-2 font-serif text-foreground/70">We'll be in touch within 2 business days.</p>
                </div>
              ) : (
                <>
                  <SField label="Company" name="company" maxLength={160} />
                  <SField label="Your name" name="contact_name" maxLength={120} />
                  <SField label="Work email" name="email" type="email" maxLength={255} />
                  <div>
                    <label htmlFor="budget" className="eyebrow block mb-2">Budget</label>
                    <select id="budget" name="budget"
                      className="w-full bg-background border border-border px-4 py-3 font-serif focus:outline-none focus:border-primary">
                      {BUDGETS.map(b => <option key={b.v} value={b.v}>{b.l}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="eyebrow block mb-2">Notes (optional)</label>
                    <textarea id="message" name="message" rows={3} maxLength={2000}
                      className="w-full bg-background border border-border px-4 py-3 font-serif focus:outline-none focus:border-primary resize-none" />
                  </div>
                  {error && <p className="font-mono text-xs text-destructive">{error}</p>}
                  <button type="submit" disabled={loading} className="btn-cut w-full disabled:opacity-60">
                    <span className="label">{loading ? "Sending…" : "Send inquiry"}</span>
                    <span className="label-alt">Let's talk</span>
                  </button>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function SField({ label, name, type = "text", maxLength }: { label: string; name: string; type?: string; maxLength?: number }) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block mb-2">{label}</label>
      <input id={name} name={name} type={type} required maxLength={maxLength}
        className="w-full bg-background border border-border px-4 py-3 font-serif placeholder:text-foreground/30 focus:outline-none focus:border-primary" />
    </div>
  );
}
