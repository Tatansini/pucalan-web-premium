import { BadgeCheck, MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_GENERAL } from "@/lib/site";

export function Confianza() {
  return (
    <section className="bg-navy px-5 py-16 sm:px-8 sm:py-20">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
        <span className="flex size-16 shrink-0 items-center justify-center rounded-xl bg-blue text-blue-foreground">
          <BadgeCheck className="size-8" strokeWidth={1.6} />
        </span>
        <div className="flex-1">
          <p className="text-xs font-bold tracking-[0.22em] text-blue-foreground/70 uppercase">
            Autorización sanitaria
          </p>
          <p className="mt-3 text-xl leading-relaxed font-semibold text-navy-foreground sm:text-2xl">
            Clínica Pucalán cuenta con Resolución Sanitaria otorgada por la
            SEREMI de Salud de la Región del Biobío.
          </p>
        </div>
        <a
          href={WHATSAPP_GENERAL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue px-7 py-4 text-sm font-semibold text-blue-foreground transition-colors duration-300 hover:bg-blue/90"
        >
          <MessageCircle className="size-4" strokeWidth={2} />
          Reservar hora
        </a>
      </Reveal>
    </section>
  );
}
