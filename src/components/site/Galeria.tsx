import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
// Fotos reales de Clínica Pucalán (CDN)
import boxDental from "@/assets/clinica-box-dental.jpg.asset.json";
import boxDental2 from "@/assets/clinica-box-dental-2.jpg.asset.json";
import rayosX from "@/assets/clinica-rayos-x.jpg.asset.json";
import salaEstetica from "@/assets/clinica-sala-estetica.jpg.asset.json";
import salaFacial from "@/assets/clinica-sala-facial.jpg.asset.json";
import salaProcedimientos from "@/assets/clinica-sala-procedimientos.jpg.asset.json";

const fotos = [
  { src: boxDental.url, alt: "Box dental de Clínica Pucalán con sillón odontológico" },
  { src: salaEstetica.url, alt: "Sala de estética corporal con láser diodo y HIFU" },
  { src: rayosX.url, alt: "Sala de rayos X habilitada de Clínica Pucalán" },
  { src: boxDental2.url, alt: "Segundo box dental con equipamiento completo" },
  { src: salaFacial.url, alt: "Sala de estética facial con camilla profesional" },
  { src: salaProcedimientos.url, alt: "Sala de procedimientos de medicina estética" },
];

export function Galeria() {
  const [activa, setActiva] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiva(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="clinica" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          overline="Nuestras instalaciones"
          title="Conoce la clínica por dentro"
          description="Boxes dentales, salas de estética y radiología digital habilitadas con Resolución Sanitaria."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {fotos.map((foto, i) => (
            <Reveal key={foto.alt} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActiva(i)}
                aria-label={`Ampliar foto: ${foto.alt}`}
                className="group relative block w-full overflow-hidden rounded-xl border border-border shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activa !== null && fotos[activa] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={() => setActiva(null)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy/85 p-5 backdrop-blur-sm"
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setActiva(null)}
            className="absolute top-6 right-6 rounded-full bg-card p-3 text-navy shadow"
          >
            <X className="size-5" />
          </button>
          <img
            src={fotos[activa].src}
            alt={fotos[activa].alt}
            className="max-h-[85vh] w-auto rounded-xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
