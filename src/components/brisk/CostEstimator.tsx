import { useMemo, useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { formatKsh, whatsappLink, type EstimatorState } from "@/lib/brisk";

const PROPERTY_TYPES = [
  { id: "new-build", label: "New House Build", multiplier: 1.15 },
  { id: "apartment", label: "Apartment / Renovation", multiplier: 0.9 },
  { id: "commercial", label: "Commercial Office", multiplier: 1.45 },
];

const SERVICES = [
  { id: "full-wiring", label: "Full Wiring", base: 90000 },
  { id: "panel-upgrade", label: "Panel Upgrade", base: 22000 },
  { id: "smart-home", label: "Smart Home Tech", base: 45000 },
  { id: "solar", label: "Solar Installation", base: 78000 },
  { id: "inspection", label: "Fault Inspection", base: 2500 },
];

const SCALES = [
  { label: "Studio / 1 Bedroom", factor: 0.7 },
  { label: "2 Bedroom", factor: 0.9 },
  { label: "3 Bedroom", factor: 1.1 },
  { label: "4+ Bedroom / Maisonette", factor: 1.45 },
  { label: "Large Commercial Floor", factor: 1.9 },
];

export function CostEstimator() {
  return null;
  const [state, setState] = useState<EstimatorState>({
    propertyType: PROPERTY_TYPES[0]!.id,
    service: SERVICES[0]!.id,
    scale: 2,
  });

  const property = PROPERTY_TYPES.find((p) => p.id === state.propertyType)!;
  const service = SERVICES.find((s) => s.id === state.service)!;
  const scale = SCALES[state.scale] ?? SCALES[0]!;

  const { low, high } = useMemo(() => {
    const base = service.base * property.multiplier * scale.factor;
    return { low: Math.round(base / 500) * 500, high: Math.round((base * 1.45) / 500) * 500 };
  }, [service, property, scale]);

  const waMessage = `Hello Brisk Electricals, I'd like an exact quote.
Property type: ${property.label}
Service required: ${service.label}
Property size: ${scale.label}
Estimated budget shown: ${formatKsh(low)} - ${formatKsh(high)}`;

  return (
    <section id="estimator" className="surface-grid py-20 lg:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <Calculator className="size-3.5" aria-hidden="true" /> Instant Estimator
          </span>
          <h2 className="mt-4 text-3xl font-bold sm:text-4xl">Instant Project Cost Estimator</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Pick your property, service and scale for an indicative budget range in Kenyan
            Shillings.
          </p>
        </div>

        <div className="glass mt-10 rounded-3xl p-6 sm:p-8">
          <fieldset>
            <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              1. Property type
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {PROPERTY_TYPES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={state.propertyType === p.id}
                  onClick={() => setState((s) => ({ ...s, propertyType: p.id }))}
                  className={`min-h-12 rounded-xl border px-4 text-sm font-semibold transition-all duration-300 ${
                    state.propertyType === p.id
                      ? "border-primary/50 bg-primary/15 text-foreground"
                      : "border-border bg-background/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-7">
            <legend className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              2. Service required
            </legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  aria-pressed={state.service === s.id}
                  onClick={() => setState((prev) => ({ ...prev, service: s.id }))}
                  className={`min-h-12 rounded-xl border px-4 text-sm font-semibold transition-all duration-300 ${
                    state.service === s.id
                      ? "border-primary/50 bg-primary/15 text-foreground"
                      : "border-border bg-background/50 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-7">
            <label
              htmlFor="scale-slider"
              className="text-sm font-semibold uppercase tracking-wider text-muted-foreground"
            >
              3. Property size / scale
            </label>
            <input
              id="scale-slider"
              type="range"
              min={0}
              max={SCALES.length - 1}
              step={1}
              value={state.scale}
              aria-valuetext={scale.label}
              onChange={(e) => setState((s) => ({ ...s, scale: Number(e.target.value) }))}
              className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-accent accent-primary"
            />
            <p className="mt-3 font-display text-lg font-bold text-primary">{scale.label}</p>
          </div>

          <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/10 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Estimated budget
            </p>
            <p aria-live="polite" className="mt-2 font-display text-2xl font-bold sm:text-4xl">
              {formatKsh(low)} <span className="text-muted-foreground">–</span> {formatKsh(high)}
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Indicative range only. Final quote follows a free site assessment.
            </p>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-14 items-center justify-center gap-2 rounded-xl px-6 text-base font-bold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:brightness-110"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Claim Exact Quote on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
