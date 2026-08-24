import { BadgeCheck } from "lucide-react";
import { Reveal } from "./Reveal";

export function Confianza() {
  return (
    <section className="px-5 py-16 sm:px-8">
      <Reveal className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 rounded-[2.5rem] bg-[linear-gradient(120deg,color-mix(in_oklab,var(--blue-pastel)_45%,white),color-mix(in_oklab,var(--primary)_38%,white))] px-8 py-14 text-center sm:flex-row sm:text-left">
          <span className="glass flex size-16 shrink-0 items-center justify-center rounded-2xl text-primary">
            <BadgeCheck className="size-8" strokeWidth={1.3} />
          </span>
          <div>
            <p className="text-[0.62rem] tracking-[0.38em] text-deep">
              AUTORIZACIÓN SANITARIA
            </p>
            <p className="mt-4 font-display text-xl leading-relaxed font-light tracking-wide text-graphite sm:text-2xl">
              Clínica Pucalán cuenta con Resolución Sanitaria otorgada por la
              SEREMI de Salud de la Región del Biobío.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
