import { Reveal } from "./Reveal";
import { WHATSAPP_GENERAL } from "@/lib/site";
import resolucionAsset from "@/assets/resolucion-sanitaria-pucalan.jpg.asset.json";

export function Confianza() {
  return (
    <section className="bg-white py-0">
      <Reveal>
        <a
          href={WHATSAPP_GENERAL}
          target="_blank"
          rel="noreferrer"
          className="block w-full overflow-hidden"
        >
          <img
            src={resolucionAsset.url}
            alt="Clínica Pucalán cuenta con Resolución Sanitaria otorgada por la SEREMI de Salud de la Región del Biobío"
            className="h-auto w-full object-cover object-center"
            loading="lazy"
          />
        </a>
      </Reveal>
    </section>
  );
}
