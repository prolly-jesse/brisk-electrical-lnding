import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "How much does a typical electrical job cost in Nairobi?",
    answer:
      "Most residential jobs fall between KSh 1,000 for a quick fault call-out and KSh 250,000 for a full 3-bedroom house rewire. Solar systems start around KSh 19,500 per panel, and smart-home packages typically range from KSh 30,000 to KSh 150,000+ depending on devices and integration depth. We always provide an itemised written quote before work starts.",
  },
  {
    question: "How quickly can you respond to a call-out or quote request?",
    answer:
      "We offer same-day fault call-outs across Nairobi and neighbouring areas, seven days a week. For larger projects, we usually schedule a site visit within 24–48 hours and send a written scope and quote shortly after. Emergency work can often be prioritised the same day.",
  },
  {
    question: "Are you EPRA licensed and insured?",
    answer:
      "Yes. Brisk Electricals is EPRA-licensed and fully insured. Every completed installation is signed off with the statutory Form C1/C2 documentation required for compliance in Kenya, so your work is safe, legal, and ready for inspection.",
  },
  {
    question: "Do you install solar panels, inverters, and battery backups?",
    answer:
      "Yes. We design and install residential solar panel systems, inverter upgrades, generator integrations, and battery backup solutions. We start with a load audit to size the right system for your home and budget, then provide a clear proposal with payback estimates.",
  },
  {
    question: "Can you set up smart lighting, smart switches, and voice control?",
    answer:
      "Absolutely. We install smart lighting, smart switches, app and voice-controlled devices, CCTV and alarm wiring, and architectural lighting schemes. We recommend reliable brands, plan the wiring for future expansion, and configure everything so it works from one interface.",
  },
  {
    question: "Do you work on new builds, renovations, and existing homes?",
    answer:
      "We work on all three. New builds get full wiring, panel, and smart infrastructure design. Renovations get safe upgrades and extensions. Existing homes benefit from fault diagnosis, LED retrofits, panel upgrades, and solar or backup additions.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in Nairobi and cover the wider Nairobi metropolitan area and neighbouring counties. If you are unsure whether we serve your location, send us a WhatsApp message with your estate or area name and we will confirm availability.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-10 place-items-center rounded-xl bg-primary/15 text-primary"
          >
            <HelpCircle className="size-5" />
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl">
            Questions? <span className="text-gradient-accent">We have answers</span>
          </h2>
        </div>
        <p className="mt-3 text-muted-foreground">
          Quick answers to help you self-qualify before requesting a quote.
        </p>

        <Accordion type="single" collapsible className="mt-10 space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="glass rounded-2xl border border-border px-5 data-[state=open]:shadow-[var(--shadow-glow)]"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold hover:no-underline [&>svg]:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
