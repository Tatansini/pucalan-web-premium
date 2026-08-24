import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "./Reveal";
// Fotos sugeridas: box-dental.jpg, sala-rayos-x.jpg, recepcion.jpg,
// sala-estetica.jpg, box-estetica-facial.jpg, box-nutricion.jpg
import boxDental from "@/assets/clinica-box-dental.jpg";
import rayosX from "@/assets/clinica-rayos-x.jpg";
import recepcion from "@/assets/clinica-recepcion.jpg";
import salaEstetica from "@/assets/clinica-sala-estetica.jpg";
import esteticaFacial from "@/assets/clinica-estetica-facial.jpg";
import nutricion from "@/assets/clinica-nutricion.jpg";

const fotos = [
  { src: boxDental, alt: "Box dental de Clínica Pucalán con sillón odontológico" },
  { src: rayosX, alt: "Sala de radiografías digitales habilitada de la clínica" },
  { src: recepcion, alt: "Recepción y sala de espera de Clínica Pucalán" },
  { src: salaEstetica, alt: "Sala de estética corporal con láser diodo y HIFU" },
  { src: esteticaFacial, alt: "Box de medicina estética facial de la clínica" },
  { src: nutricion, alt: "Consulta de nutrición con equipo de bioimpedancia" },
];

export function Galeria() {
  const [activa, setActiva] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiva(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="clinica" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.62rem] tracking-[0.38em] text-primary">
            NUESTRA CLÍNICA
          </p>
          <h2 className="mt-5 text-3xl tracking-wide text-graphite sm:text-4xl">
            Espacios pensados para que la visita sea tranquila.
          </h2>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          {fotos.map((foto, i) => (
            <Reveal key={foto.alt} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActiva(i)}
                aria-label={`Ampliar foto: ${foto.alt}`}
                className="lift group relative block w-full overflow-hidden rounded-3xl"
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/28 to-transparent" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activa !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Foto ampliada"
          onClick={() => setActiva(null)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-graphite/80 p-5 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setActiva(null)}
            className="glass absolute top-6 right-6 rounded-full p-3 text-graphite"
          >
            <X className="size-5" />
          </button>
          <img
            src={fotos[activa].src}
            alt={fotos[activa].alt}
            className="max-h-[85vh] w-auto rounded-3xl object-contain"
          />
        </div>
      )}
    </section>
  );
}
