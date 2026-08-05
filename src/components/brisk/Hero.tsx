import { Zap, ShieldCheck, Trophy, MessageCircle, Calculator } from "lucide-react";
import heroImage from "@/assets/hero-electrician.jpg";
import { whatsappLink } from "@/lib/brisk";

const BADGES = [
  { icon: Zap, label: "EPRA Licensed & Compliant" },
  { icon: ShieldCheck, label: "98% Client Satisfaction Rate" },
  { icon: Trophy, label: "5+ Years Technical Experience" },
];

export function Hero() {
  const quote = whatsappLink(
    "Hello Brisk Electricals, I'd like an instant quote. My project: ",
  );

  return (
    <section id="top" className="surface-grid relative overflow-hidden pt-28 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-2 lg:pb-24">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Nairobi, Kenya
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
            EPRA-Licensed{" "}
            <span className="text-gradient-accent">Electrical Contracting</span> &amp; Smart
            Home Automation in Nairobi
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            From full residential wiring to smart home upgrades and solar integrations. Safe,
            certified, and transparent.
          </p>

          <ul className="mt-7 flex flex-wrap gap-2.5">
            {BADGES.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="glass glass-hover flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold sm:text-sm"
              >
                <Icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-6 text-base font-bold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:brightness-110"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Get Instant WhatsApp Quote
            </a>
            <a
              href="#estimator"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-6 text-base font-bold text-primary transition-all duration-300 hover:bg-primary/20"
            >
              <Calculator className="size-5" aria-hidden="true" />
              Calculate Project Cost
            </a>
          </div>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-6 rounded-[2rem] opacity-70 blur-2xl"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />
          <div className="glass relative overflow-hidden rounded-3xl p-2">
            <img
              src={heroImage}
              alt="Brisk Electricals technician installing a smart electrical distribution panel in a Nairobi home"
              width={1600}
              height={1200}
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
