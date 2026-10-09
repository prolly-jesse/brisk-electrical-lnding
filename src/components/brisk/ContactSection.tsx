import { useState, type FormEvent } from "react";
import { MessageCircle, PhoneCall } from "lucide-react";
import { PHONE_DISPLAY, sanitizePhone, sanitizeText, whatsappLink } from "@/lib/brisk";

const SERVICE_OPTIONS = [
  "Instant Hot Showers",
  "Electrical Fittings",
  "Power Protection",
  "Electrical Installations",
  "Solar Installation & Repair",
  "Electrical Maintenance & Repair",
  "Others",
];

interface FormState {
  name: string;
  phone: string;
  location: string;
  service: string;
  details: string;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    location: "",
    service: SERVICE_OPTIONS[0]!,
    details: "",
  });
  const [error, setError] = useState<string | null>(null);

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = sanitizeText(form.name, 80);
    const phone = sanitizePhone(form.phone);
    const location = sanitizeText(form.location, 80);
    const details = sanitizeText(form.details, 600);

    if (name.length < 2) return setError("Please enter your name.");
    if (phone.replace(/\D/g, "").length < 9) return setError("Please enter a valid phone number.");
    if (location.length < 2) return setError("Please enter your location.");
    setError(null);

    const message = `New enquiry — Brisk Electricals
Name: ${name}
Phone: ${phone}
Location: ${location}
Service: ${sanitizeText(form.service, 60)}${details ? `\nDetails: ${details}` : ""}`;

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  const field =
    "min-h-12 w-full rounded-xl border border-input bg-background/60 px-4 text-sm text-foreground placeholder:text-muted-foreground transition-all duration-300 focus:border-primary/60";

  return (
    <section id="contact" className="surface-grid py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Book a <span className="text-gradient-accent">free site assessment</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Send your details and we'll reply on WhatsApp with a firm, itemised quote. No call
            centre, no hidden fees.
          </p>
          <a
            href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
            className="mt-6 inline-flex min-h-12 items-center gap-3 rounded-xl border border-primary/40 bg-primary/10 px-5 font-semibold text-primary transition-all duration-300 hover:bg-primary/20"
          >
            <PhoneCall className="size-5" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
        </div>

        <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 sm:p-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-semibold">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                className={field}
                maxLength={80}
                placeholder="Jane Wanjiku"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="mb-2 block text-sm font-semibold">
                Phone number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                className={field}
                maxLength={20}
                placeholder="07XX XXX XXX"
                value={form.phone}
                onChange={(e) => update("phone", sanitizePhone(e.target.value))}
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <label htmlFor="contact-location" className="mb-2 block text-sm font-semibold">
              Location
            </label>
            <input
              id="contact-location"
              name="location"
              className={field}
              maxLength={80}
              placeholder="Nairobi / neighbouring areas"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
              required
            />
          </div>

          <div className="mt-4">
            <label htmlFor="contact-service" className="mb-2 block text-sm font-semibold">
              Service needed
            </label>
            <select
              id="contact-service"
              name="service"
              className={field}
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
            >
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-4">
            <label htmlFor="contact-details" className="mb-2 block text-sm font-semibold">
              Project details <span className="text-muted-foreground">(optional)</span>
            </label>
            <textarea
              id="contact-details"
              name="details"
              rows={4}
              maxLength={600}
              className={`${field} py-3`}
              placeholder="e.g. 3-bedroom house, needs full rewiring and CCTV points"
              value={form.details}
              onChange={(e) => update("details", e.target.value)}
            />
          </div>

          {error && (
            <p role="alert" className="mt-4 text-sm font-semibold text-destructive">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-xl px-6 text-base font-bold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:brightness-110"
            style={{ backgroundImage: "var(--gradient-cta)" }}
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Send via WhatsApp
          </button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Opens WhatsApp with your details pre-filled. Nothing is stored on our servers.
          </p>
        </form>
      </div>
    </section>
  );
}
