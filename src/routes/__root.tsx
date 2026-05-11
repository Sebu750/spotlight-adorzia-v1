import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">This look isn't in the collection.</p>
        <div className="mt-6">
          <Link to="/" className="btn-cut"><span className="label">Back to runway</span><span className="label-alt">Go home</span></Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Try again or head home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-cut"><span className="label">Try again</span><span className="label-alt">Retry</span></button>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0A0A0A" },
      { title: "SPOTLIGHT × ADORZIA — Pakistan's Boldest Fashion Competition | Win PKR 300K + Funded Launch" },
      { name: "description", content: "Stop interning. Start competing. SPOTLIGHT is Pakistan's premier fashion competition: 100 shortlisted, 10 finalists, 1 winner. PKR 300K cash, 12 months funded production, 100% brand ownership. Apply before July 15." },
      { name: "keywords", content: "Pakistan fashion competition, fashion designer competition, emerging designers Pakistan, fashion week Karachi Lahore, runway show 2026, ADORZIA, SPOTLIGHT competition, fashion startup funding, designer incubator Pakistan, HSY Maheen Khan Deepak Perwani Nomi Ansari" },
      { name: "author", content: "ADORZIA" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow" },

      { property: "og:site_name", content: "SPOTLIGHT × ADORZIA" },
      { property: "og:title", content: "SPOTLIGHT × ADORZIA — Pakistan's Boldest Fashion Competition | Win PKR 300K + Funded Launch" },
      { property: "og:description", content: "Stop interning. Start competing. SPOTLIGHT is Pakistan's premier fashion competition: 100 shortlisted, 10 finalists, 1 winner. PKR 300K cash, 12 months funded production, 100% brand ownership. Apply before July 15." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://spotlight-adorzia.lovable.app" },
      { property: "og:locale", content: "en_PK" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/de8216b7-1805-4c1a-9e8e-937fe0cb121e" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "SPOTLIGHT × ADORZIA — Pakistan fashion competition runway" },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@adorzia" },
      { name: "twitter:title", content: "SPOTLIGHT × ADORZIA — Pakistan's Boldest Fashion Competition | Win PKR 300K + Funded Launch" },
      { name: "twitter:description", content: "Stop interning. Start competing. SPOTLIGHT is Pakistan's premier fashion competition: 100 shortlisted, 10 finalists, 1 winner. PKR 300K cash, 12 months funded production, 100% brand ownership. Apply before July 15." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/de8216b7-1805-4c1a-9e8e-937fe0cb121e" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "canonical", href: "https://spotlight-adorzia.lovable.app/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://spotlight-adorzia.lovable.app/#organization",
              name: "ADORZIA",
              url: "https://spotlight-adorzia.lovable.app/",
              sameAs: [
                "https://instagram.com/spotlight.adorzia",
                "https://www.tiktok.com/@spotlight.adorzia",
                "https://www.facebook.com/spotlight.adorzia",
                "https://www.youtube.com/@spotlight.adorzia",
                "https://www.linkedin.com/company/spotlight-adorzia",
              ],
            },
            {
              "@type": "Event",
              name: "SPOTLIGHT × ADORZIA — Fashion Competition Fall 2026",
              description: "Pakistan's premier fashion competition discovering, funding, and accelerating emerging designers. PKR 300K cash, 12 months funded production, runway finale.",
              startDate: "2026-06-01",
              endDate: "2026-09-14",
              eventStatus: "https://schema.org/EventScheduled",
              eventAttendanceMode: "https://schema.org/MixedEventAttendanceMode",
              location: {
                "@type": "Place",
                name: "Karachi · Lahore · Islamabad",
                address: { "@type": "PostalAddress", addressCountry: "PK" },
              },
              organizer: { "@id": "https://spotlight-adorzia.lovable.app/#organization" },
              offers: {
                "@type": "Offer",
                url: "https://spotlight-adorzia.lovable.app/#apply",
                price: "0",
                priceCurrency: "PKR",
                availability: "https://schema.org/InStock",
                validFrom: "2026-06-01",
              },
              image: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/70b3984f-6305-4862-bef7-598701790ca1",
            },
            {
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "Who owns the rights to my brand?", acceptedAnswer: { "@type": "Answer", text: "You retain 100% legal ownership of your trademarks, IP, and designs. ADORZIA is an investment and launch partner, not an owner." } },
                { "@type": "Question", name: "Is the production funding a loan?", acceptedAnswer: { "@type": "Answer", text: "No. For the Top 10 finalists, ADORZIA covers the manufacturing and production costs as an investment in your brand's market entry." } },
                { "@type": "Question", name: "Who is eligible to apply?", acceptedAnswer: { "@type": "Answer", text: "Final-year fashion students, recent alumni, and independent designers across Pakistan who specialize in slow fashion and heritage craft." } },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
