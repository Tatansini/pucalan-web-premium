import { Smile, Sparkles, Waves, Salad, Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { SERVICIOS, wa } from "@/lib/site";

const icons = [Smile, Sparkles, Waves, Salad];
const iconThemes = [
  { bg: "bg-blue/10", text: "text-blue" },
  { bg: "bg-green/12", text: "text-green" },
  { bg: "bg-blue/10", text: "text-blue" },
  { bg: "bg-green/12", text: "text-green" },
];

export function Servicios() {
  return (
    <section id="servicios" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          overline="Áreas de atención"
          title="Especialidades de la clínica"
          description="Cuatro áreas clínicas integradas en un mismo lugar, con profesionales especializados y equipamiento propio."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((servicio, i) => {
            const Icon = icons[i % icons.length]!;
            const theme = iconThemes[i % iconThemes.length]!;
            return (
              <Reveal key={servicio.titulo} delay={i * 80}>
                <article className="flex h-full flex-col rounded-xl border border-border bg-card p-7 shadow-sm transition-shadow duration-300 hover:shadow-md">
                  <span
                    className={`flex size-12 items-center justify-center rounded-lg ${theme.bg} ${theme.text}`}
                  >
                    <Icon className="size-6" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-navy">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {servicio.descripcion}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2 border-t border-border pt-5">
                    {servicio.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <Check
                          className={`mt-1 size-3.5 shrink-0 ${theme.text}`}
                          strokeWidth={2.2}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={wa(
                      `Hola, quiero reservar una hora de ${servicio.titulo} en Clínica Pucalán`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue hover:underline"
                  >
                    Reservar hora
                    <ArrowRight className="size-4" strokeWidth={2} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
