import { MessageCircle } from "lucide-react";
import { WHATSAPP_GENERAL } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_GENERAL}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar por WhatsApp con Clínica Pucalán"
      className="animate-soft-pulse fixed right-5 bottom-5 z-[70] flex size-14 items-center justify-center rounded-full bg-blue text-blue-foreground transition-transform duration-300 ease-out hover:scale-105 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="size-6" strokeWidth={1.6} />
    </a>
  );
}
