export const PHONE_DISPLAY = "+254 722 648 765";
export const PHONE_WA = "254722648765";
export const EMAIL = "Briskelectricals2407@gmail.com";
export const INSTAGRAM = "briskelectricals.kenya";

/** Strip characters that could be used for markup/script injection and cap length. */
export function sanitizeText(value: string, maxLength = 500): string {
  return value
    .replace(/[<>{}\\$`]/g, "")
    .replace(/https?:\/\/\S+/gi, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

export function sanitizePhone(value: string, maxLength = 20): string {
  return value
    .replace(/[^\d+\s-]/g, "")
    .trim()
    .slice(0, maxLength);
}

/** Builds a safe wa.me deep link with fully encoded text. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(sanitizeText(message, 900))}`;
}

export function formatKsh(amount: number): string {
  return `KSh ${Math.round(amount).toLocaleString("en-KE")}`;
}

export interface ServiceItem {
  name: string;
  price: string;
  note?: string;
}

export interface ServicePillar {
  id: string;
  title: string;
  tagline: string;
  icon: "home" | "cpu" | "sun";
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface EstimatorState {
  propertyType: string;
  service: string;
  scale: number;
}
