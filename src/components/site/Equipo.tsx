import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { EQUIPO, wa } from "@/lib/site";

export function Equipo() {
  return (
    <section id="equipo" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          overline="Equipo médico"
          title="Profesionales que acompañan cada etapa"
          description="Reserva directamente con el especialista que necesitas. Todo el equipo atiende en nuestra clínica de Brisas del Sol, Talcahuano."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {EQUIPO.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 80}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md">
                <div className="flex items-center gap-4 border-b border-border p-6">
                  {p.foto ? (
                    <img
                      src={p.foto}
                      alt={`${p.nombre} — ${p.especialidad} en Clínica Pucalán`}
                      loading="lazy"
                      className="size-20 rounded-full object-cover object-top ring-2 ring-blue/15"
                    />
                  ) : (
                    <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-navy text-xl font-bold tracking-widest text-navy-foreground">
                      {p.iniciales}
                    </span>
                  )}
                  <div>
                    <h3 className="text-base font-bold text-navy">{p.nombre}</h3>
                    <span className="mt-2 inline-block rounded-full bg-blue/10 px-3 py-1 text-[0.68rem] font-semibold tracking-wide text-blue">
                      {p.especialidad}
                    </span>
                  </div>
                </div>
                <ul className="flex-1 space-y-2 p-6">
                  {p.detalle.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <Check
                        className="mt-1 size-3.5 shrink-0 text-blue"
                        strokeWidth={2.2}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="p-6 pt-0">
                  <a
                    href={wa(
                      `Hola, quiero agendar una hora con ${p.agendar} en Clínica Pucalán`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full rounded-lg bg-blue px-5 py-3 text-center text-sm font-semibold text-blue-foreground transition-colors duration-300 hover:bg-blue/90"
                  >
                    Agendar hora
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
