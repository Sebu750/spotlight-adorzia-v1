import { Instagram, Facebook, Twitter, Youtube, Linkedin, Mail } from "lucide-react";

const socials = [
  { href: "https://www.instagram.com/adorziaofficial", label: "Instagram", Icon: Instagram },
  { href: "https://www.tiktok.com/@adorziaofficial", label: "TikTok", Icon: Twitter },
  { href: "https://www.facebook.com/adorziaofficial", label: "Facebook", Icon: Facebook },
  { href: "https://www.youtube.com/@adorziaofficial", label: "YouTube", Icon: Youtube },
  { href: "https://www.linkedin.com/company/adorzia", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:spotlight@adorzia.com", label: "Email", Icon: Mail },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="container-cut grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="display text-3xl">SPOT<span className="text-primary">/</span>LIGHT</div>
          <p className="mt-3 font-serif text-foreground/60 text-sm">Across Pakistan — for designers who refuse to wait their turn.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center justify-center w-10 h-10 border border-border text-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60 space-y-2">
          <div>spotlight@adorzia.com</div>
          <div>KARACHI · LAHORE · ISLAMABAD</div>
        </div>
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/60 md:text-right">
          © {new Date().getFullYear()} SPOTLIGHT — All looks reserved.
        </div>
      </div>
    </footer>
  );
}
