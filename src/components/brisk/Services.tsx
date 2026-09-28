import { useState } from "react";
import { Home, Cpu, Sun, Check, MessageCircle } from "lucide-react";
import type { ServicePillar } from "@/lib/brisk";
import { whatsappLink } from "@/lib/brisk";

const PILLARS: ServicePillar[] = [
  {
    id: "residential",
    title: "Residential & New Construction",
    tagline: "Certified wiring and safe power distribution for homes and new builds.",
    icon: "home",
    items: [
      { name: "Full House Wiring", price: "" },
      { name: "Domestic Electrical Panels (100A, Surge Protection)", price: "" },
      {
        name: "Outlets, Switches & Fault Diagnosis",
        price: "",
        note: "Same-day response across Nairobi",
      },
    ],
  },
  {
    id: "smart",
    title: "Smart Home & Security Integration",
    tagline: "App and voice control, surveillance and architectural lighting.",
    icon: "cpu",
    items: [
      { name: "Smart Home Automation (Voice & App Control)", price: "" },
      { name: "CCTV & Alarm System Wiring", price: "" },
      { name: "Custom Architectural & Landscape Lighting", price: "" },
    ],
  },
  {
    id: "solar",
    title: "Energy Efficiency & Solar Solutions",
    tagline: "Cut power bills with solar, LED retrofits and backup systems.",
    icon: "sun",
    items: [
      { name: "Residential Solar Panel Systems", price: "" },
      { name: "LED Retrofitting & Light Points", price: "" },
      { name: "Generator & Battery Backup Integrations", price: "" },
    ],
  },
];

const ICONS = { home: Home, cpu: Cpu, sun: Sun } as const;

export function Services() {
  const [active, setActive] = useState(PILLARS[0]!.id);
  const pillar = PILLARS.find((p) => p.id === active) ?? PILLARS[0]!;
  const ActiveIcon = ICONS[pillar.icon];

  return (
    <section id="services" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="max-w-2xl text-3xl font-bold sm:text-4xl">
          Core services for <span className="text-gradient-accent">homes & businesses</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Three service pillars and EPRA-compliant workmanship on every job.
        </p>

        <div
          role="tablist"
          aria-label="Service pillars"
          className="mt-8 flex flex-col gap-2 sm:flex-row"
        >
          {PILLARS.map((p) => {
            const Icon = ICONS[p.icon];
            const selected = p.id === active;
            return (
              <button
                key={p.id}
                role="tab"
                type="button"
                id={`tab-${p.id}`}
                aria-selected={selected}
                aria-controls={`panel-${p.id}`}
                onClick={() => setActive(p.id)}
                className={`flex min-h-14 flex-1 items-center gap-3 rounded-2xl border px-4 text-left text-sm font-semibold transition-all duration-300 ${
                  selected
                    ? "border-primary/50 bg-primary/10 text-foreground shadow-[var(--shadow-glow)]"
                    : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                <Icon className="size-5 shrink-0 text-primary" aria-hidden="true" />
                {p.title}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${pillar.id}`}
          aria-labelledby={`tab-${pillar.id}`}
          className="glass mt-6 rounded-3xl p-6 sm:p-8"
        >
          <div className="flex min-w-0 items-start gap-4">
            <span
              aria-hidden="true"
              className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary"
            >
              <ActiveIcon className="size-6" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-bold sm:text-2xl">{pillar.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{pillar.tagline}</p>
            </div>
          </div>

          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {pillar.items.map((item) => (
              <li
                key={item.name}
                className="glass-hover rounded-2xl border border-border bg-background/50 p-5"
              >
                <Check className="size-5 text-primary" aria-hidden="true" />
                <p className="mt-3 font-semibold leading-snug">{item.name}</p>
                {item.note && <p className="mt-1 text-xs text-muted-foreground">{item.note}</p>}
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink(`Hello Brisk Electricals, I'm interested in: ${pillar.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:brightness-110"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Discuss this on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
