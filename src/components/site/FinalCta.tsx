import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const CATEGORIES = [
  { v: "womenswear", l: "Womenswear" },
  { v: "menswear", l: "Menswear" },
  { v: "accessories", l: "Accessories" },
  { v: "genderless", l: "Genderless / Conceptual" },
];

export function FinalCta() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      portfolio_url: String(fd.get("portfolio") || "").trim(),
      category: String(fd.get("category") || ""),
    };

    if (!payload.name || !payload.email || !payload.portfolio_url) {
      setError("Please fill in every field."); setLoading(false); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError("That email doesn't look right."); setLoading(false); return;
    }
    if (!/^https?:\/\//i.test(payload.portfolio_url)) {
      setError("Portfolio link must start with http:// or https://"); setLoading(false); return;
    }

    const { error: dbError } = await supabase.from("applications").insert(payload);
    setLoading(false);
    if (dbError) { setError("Submission failed. Try again."); return; }
    setSubmitted(true);
  }

  return (
    <section id="apply" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-20" />
      <div className="container-cut relative grid lg:grid-cols-12 gap-8 md:gap-12 items-center">
        <div className="lg:col-span-6">
          <span className="eyebrow">— Last call</span>
          <h2 className="mt-4 text-4xl md:text-7xl lg:text-8xl">
            Your breakout<br />
            is <span className="text-primary">4 clicks</span><br />
            away.
          </h2>
          <p className="mt-5 md:mt-6 font-serif text-base md:text-lg text-foreground/75 max-w-md">
           Launch Season: 100 designers  will be shortlisted for 10 finalist spots. Apply by <span className="text-primary font-bold">July 15 </span> to secure your place.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-6 bg-surface border border-border p-6 md:p-10 space-y-5">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="display text-3xl text-primary">You're in the queue.</div>
              <p className="mt-3 font-serif text-foreground/70">Check your inbox for your application link. Registration opens June 1st.</p>
            </div>
          ) : (
            <>
              <div className="eyebrow">Application — 4 fields</div>
              <Field label="Name" name="name" placeholder="First Last" maxLength={120} />
              <Field label="Email" name="email" type="email" placeholder="you@studio.com" maxLength={255} />
              <Field label="Portfolio link" name="portfolio" placeholder="https://" maxLength={500} />
              <div>
                <label htmlFor="category" className="eyebrow block mb-2">Category</label>
                <select id="category" name="category" required defaultValue="womenswear"
                  className="w-full bg-background border border-border px-4 py-3.5 font-serif text-foreground focus:outline-none focus:border-primary">
                  {CATEGORIES.map(c => <option key={c.v} value={c.v}>{c.l}</option>)}
                </select>
              </div>
              {error && <p className="font-mono text-xs text-destructive">{error}</p>}
              <button type="submit" disabled={loading} className="btn-cut w-full disabled:opacity-60">
                <span className="label">{loading ? "Submitting…" : "Pay entry fee & upload portfolio"}</span>
                <span className="label-alt">No turning back</span>
              </button>
              <p className="text-xs font-mono text-foreground/50 text-center">Applications open June 1st · Need-based waivers available</p>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, maxLength }: { label: string; name: string; type?: string; placeholder?: string; maxLength?: number }) {
  return (
    <div>
      <label className="eyebrow block mb-2" htmlFor={name}>{label}</label>
      <input
        id={name} name={name} type={type} required placeholder={placeholder} maxLength={maxLength}
        className="w-full bg-background border border-border px-4 py-3.5 font-serif text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-primary"
      />
    </div>
  );
}
