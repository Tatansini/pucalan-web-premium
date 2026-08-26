import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { EQUIPO, wa } from "@/lib/site";

export function Equipo() {
  return (
    <section id="equipo" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.62rem] tracking-[0.38em] text-primary">EQUIPO</p>
          <h2 className="mt-5 text-3xl tracking-wide text-graphite sm:text-4xl">
            Profesionales que acompañan cada etapa.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {EQUIPO.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 90}>
              <article className="glass lift flex h-full flex-col items-center rounded-3xl p-8 text-center hover:border-primary/40">
                {p.foto ? (
                  <img
                    src={p.foto}
                    alt={`${p.nombre} — ${p.especialidad} en Clínica Pucalán`}
                    loading="lazy"
                    className="size-28 rounded-full object-cover object-top ring-4 ring-primary/15"
                  />
                ) : (
                  <span className="flex size-28 items-center justify-center rounded-full bg-[var(--gradient-brand)] font-display text-2xl font-light tracking-[0.15em] text-primary-foreground">
                    {p.iniciales}
                  </span>
                )}
                <h3 className="mt-6 text-lg tracking-wide text-graphite">
                  {p.nombre}
                </h3>
                <span className="mt-3 rounded-full bg-primary/12 px-4 py-1.5 text-[0.68rem] tracking-wide text-primary">
                  {p.especialidad}
                </span>
                <ul className="mt-6 flex-1 space-y-2 text-left">
                  {p.detalle.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-deep/85"
                    >
                      <Check
                        className="mt-1 size-3.5 shrink-0 text-primary"
                        strokeWidth={2}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <a
                  href={wa(
                    `Hola, quiero agendar una hora con ${p.agendar} en Clínica Pucalán`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 w-full rounded-full border border-blue/40 px-5 py-3 text-xs tracking-wide text-blue transition-colors duration-300 hover:bg-blue hover:text-blue-foreground"
                >
                  Agendar con {p.nombre.split(" ").slice(-2).join(" ")}
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
