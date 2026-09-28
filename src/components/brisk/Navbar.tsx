import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";
import { whatsappLink } from "@/lib/brisk";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Us", href: "#why-us" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const quote = whatsappLink(
    "Hello Brisk Electricals, I'd like to request a quote for an electrical project in Nairobi.",
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="glass border-x-0 border-t-0">
        <nav
          aria-label="Main navigation"
          className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:py-4"
        >
          <a href="#top" className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary shadow-[0_0_24px_-6px_var(--color-primary)]"
            >
              <Zap className="size-5" strokeWidth={2.4} />
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold tracking-tight sm:text-lg">
                Brisk Electricals
              </span>
              <span className="mt-0.5 inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-primary">
                EPRA Certified
              </span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <ul className="hidden items-center gap-1 lg:flex">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-accent hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={quote}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-12 items-center justify-center rounded-xl px-5 text-sm font-bold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:brightness-110 sm:inline-flex"
              style={{ backgroundImage: "var(--gradient-cta)" }}
            >
              Request Quote
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-12 place-items-center rounded-xl border border-border text-foreground transition-all duration-300 hover:bg-accent lg:hidden"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>

        {open && (
          <ul className="border-t border-border px-4 pb-4 pt-2 lg:hidden">
            {NAV.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center rounded-lg px-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
