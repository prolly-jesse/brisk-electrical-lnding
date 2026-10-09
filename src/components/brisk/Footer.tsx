import { useState } from "react";
import { Zap, Mail, PhoneCall, MapPin, Instagram, Loader2 } from "lucide-react";
import { EMAIL, INSTAGRAM, PHONE_DISPLAY } from "@/lib/brisk";

const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8109782161846!2d36.8286491!3d-1.287534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1105873f6233%3A0x90a9d4cd1fd41472!2sBrisk%20Electricals!5e0!3m2!1sen!2ske!4v1785917753467!5m2!1sen!2ske";

export function Footer() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <footer className="border-t border-border bg-surface/60 py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary"
            >
              <Zap className="size-5" strokeWidth={2.4} />
            </span>
            <p className="font-display text-lg font-bold">Brisk Electricals</p>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Wired for safety,Built on Trust.Approved electricians for electrical Work in Nairobi and
            neighbouring areas.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:+${PHONE_DISPLAY.replace(/\D/g, "")}`}
                className="inline-flex min-h-11 items-center gap-2 transition-colors duration-300 hover:text-primary"
              >
                <PhoneCall className="size-4 text-primary" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 items-center gap-2 break-all transition-colors duration-300 hover:text-primary"
              >
                <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {EMAIL}
              </a>
            </li>
            <li className="flex min-h-11 items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              Nairobi, Kenya
            </li>
            <li>
              <a
                href={`https://instagram.com/${INSTAGRAM}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 transition-colors duration-300 hover:text-primary"
              >
                <Instagram className="size-4 text-primary" aria-hidden="true" />@{INSTAGRAM}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Safety &amp; quality assurance
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            All works are executed by EPRA-licensed technicians in line with the Energy Act and
            Kenyan wiring regulations. Statutory completion certificates (Form C1/C2) are issued on
            every installation, and materials are sourced from certified suppliers.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl px-4 sm:px-6">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface/40">
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Find our shop
            </h2>
          </div>
          <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] md:aspect-[21/9]">
            {!mapLoaded && (
              <div
                className="absolute inset-0 z-10 grid place-items-center bg-surface"
                aria-label="Loading map"
              >
                <div className="flex flex-col items-center gap-3">
                  <Loader2 className="size-8 animate-spin text-primary" aria-hidden="true" />
                  <span className="text-sm font-medium text-muted-foreground">Loading map…</span>
                </div>
              </div>
            )}
            <iframe
              title="Brisk Electricals shop location on Google Maps"
              src={GOOGLE_MAPS_EMBED_URL}
              className="absolute inset-0 h-full w-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setMapLoaded(true)}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
        <p className="border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Brisk Electricals. EPRA licensed electrical contractor.
        </p>
      </div>
    </footer>
  );
}
