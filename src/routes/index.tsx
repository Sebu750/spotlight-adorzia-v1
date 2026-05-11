import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Prize } from "@/components/site/Prize";
import { Sponsors } from "@/components/site/Sponsors";
import { Winners } from "@/components/site/Winners";
import { Dates } from "@/components/site/Dates";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Prize />
      <Winners />
      <Sponsors />
      <Dates />
      <Faq />
      <FinalCta />
      <Footer />
    </main>
  );
}
