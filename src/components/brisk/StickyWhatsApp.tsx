import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/brisk";

export function StickyWhatsApp() {
  return (
    <a
      href={whatsappLink("Hello Brisk Electricals, I need help with an electrical project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Brisk Electricals on WhatsApp"
      className="fixed inset-x-4 bottom-4 z-50 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl text-base font-bold text-cta-foreground shadow-[var(--shadow-cta)] transition-all duration-300 hover:brightness-110 sm:hidden"
      style={{ backgroundImage: "var(--gradient-cta)" }}
    >
      <MessageCircle className="size-5" aria-hidden="true" />
      Chat on WhatsApp
    </a>
  );
}
