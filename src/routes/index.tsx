import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/brisk/Navbar";
import { Hero } from "@/components/brisk/Hero";
import { TrustBar } from "@/components/brisk/TrustBar";
import { Services } from "@/components/brisk/Services";

import { Testimonials } from "@/components/brisk/Testimonials";
import { WhyUs } from "@/components/brisk/WhyUs";

import { ContactSection } from "@/components/brisk/ContactSection";
import { Footer } from "@/components/brisk/Footer";
import { StickyWhatsApp } from "@/components/brisk/StickyWhatsApp";

const TITLE = "Brisk Electricals | EPRA Electrician & Smart Homes Nairobi";
const DESCRIPTION =
  "EPRA-licensed electrical contracting, smart home automation and solar installation in Nairobi. Transparent KSh pricing, instant cost estimator and WhatsApp quotes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />

        <Testimonials />
        <WhyUs />

        <ContactSection />
      </main>
      <Footer />
      <StickyWhatsApp />
      <script
        type="application/ld+json"
        // Static, developer-authored JSON-LD: no user input is interpolated.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Electrician",
            name: "Brisk Electricals",
            description: DESCRIPTION,
            telephone: "+254722648765",
            email: "Briskelectricals2407@gmail.com",
            areaServed: "Nairobi, Kenya",
            address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
            sameAs: ["https://instagram.com/briskelectricals.kenya"],
          }),
        }}
      />
    </div>
  );
}
