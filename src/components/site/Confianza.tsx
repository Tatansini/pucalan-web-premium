import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { WHATSAPP_GENERAL } from "@/lib/site";
import resolucionAsset from "@/assets/resolucion-sanitaria-pucalan.jpg.asset.json";

export function Confianza() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <Reveal className="mx-auto max-w-5xl text-center">
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
          <img
            src={resolucionAsset.url}
            alt="Clínica Pucalán cuenta con Resolución Sanitaria otorgada por la SEREMI de Salud de la Región del Biobío"
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
        <a
          href={WHATSAPP_GENERAL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-blue px-7 py-4 text-sm font-semibold text-blue-foreground transition-colors duration-300 hover:bg-blue/90"
        >
          <MessageCircle className="size-4" strokeWidth={2} />
          Reservar hora
        </a>
      </Reveal>
    </section>
  );
}
