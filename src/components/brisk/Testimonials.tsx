import { Quote, Star } from "lucide-react";
import type { Testimonial } from "@/lib/brisk";

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Professional, punctual, and knowledgeable. They transformed our outdated wiring into a smart home system seamlessly!",
    name: "Susan",
    role: "Residential Customer",
  },
  {
    quote: "Their expertise in industrial electrical systems saved us weeks of downtime.",
    name: "Francis",
    role: "Industrial Client",
  },
];

export function Testimonials() {
  return (
    <section id="projects" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl">
          Verified <span className="text-gradient-accent">client results</span>
        </h2>
        <p className="mt-3 max-w-xl text-muted-foreground">
          Homes, offices and industrial sites across Nairobi and neighbouring areas.
        </p>

        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li key={t.name} className="glass glass-hover rounded-3xl p-7">
              <Quote className="size-7 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 text-lg leading-relaxed text-foreground">
                “{t.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="grid size-11 shrink-0 place-items-center rounded-full bg-primary/15 font-display font-bold text-primary"
                >
                  {t.name.charAt(0)}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
                <span className="ml-auto flex gap-0.5" aria-label="Rated 5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
                  ))}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
