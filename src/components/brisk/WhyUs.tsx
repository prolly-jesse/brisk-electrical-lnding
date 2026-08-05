import { ShieldCheck, Clock, FileCheck2, HandCoins } from "lucide-react";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "EPRA licensed & insured",
    body: "Every installation is signed off with statutory Form C1/C2 documentation for full compliance.",
  },
  {
    icon: FileCheck2,
    title: "Transparent written scopes",
    body: "Itemised quotes in Kenyan Shillings before work starts — no variations without approval.",
  },
  {
    icon: Clock,
    title: "Fast Nairobi response",
    body: "Same-day fault call-outs across Nairobi and neighbouring areas, seven days a week.",
  },
  {
    icon: HandCoins,
    title: "Upfront rates",
    body: "Published price ranges and honest advice on what your property actually needs.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="border-y border-border bg-surface/40 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Why Nairobi chooses <span className="text-gradient-accent">Brisk Electricals</span>
        </h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="glass glass-hover rounded-2xl p-6">
              <span
                aria-hidden="true"
                className="grid size-11 place-items-center rounded-xl bg-primary/15 text-primary"
              >
                <Icon className="size-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
