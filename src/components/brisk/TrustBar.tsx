import { BadgeCheck, Wallet, PanelTop } from "lucide-react";

const PARTNERS = ["Schneider Electric", "Siemens", "EPRA Kenya", "Schneider Electric", "Siemens", "EPRA Kenya"];

const METRICS = [
  { icon: PanelTop, value: "50+", label: "Panel Upgrades Completed" },
  { icon: BadgeCheck, value: "100%", label: "EPRA Code Compliance (Form C1/C2)" },
  { icon: Wallet, value: "KSh 0", label: "Hidden Fees — Upfront Rates Only" },
];

export function TrustBar() {
  return (
    <section aria-label="Trust and credibility" className="border-y border-border bg-surface/40 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Commercial components sourced from industry leaders
        </p>
        <div className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <ul className="marquee-track flex w-max items-center gap-10">
            {PARTNERS.map((partner, i) => (
              <li
                key={`${partner}-${i}`}
                className="font-display text-lg font-bold text-foreground/70 sm:text-2xl"
              >
                {partner}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {METRICS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="glass glass-hover rounded-2xl p-5">
              <Icon className="size-6 text-primary" aria-hidden="true" />
              <p className="mt-3 font-display text-2xl font-bold">{value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
