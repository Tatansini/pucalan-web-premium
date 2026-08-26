import { Smile, Sparkles, Waves, Salad, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SERVICIOS } from "@/lib/site";

const icons = [Smile, Sparkles, Waves, Salad];
const iconThemes = [
  { bg: "bg-blue/12", text: "text-blue", border: "hover:border-blue/40" },
  { bg: "bg-green/12", text: "text-green", border: "hover:border-green/40" },
  { bg: "bg-blue/12", text: "text-blue", border: "hover:border-blue/40" },
  { bg: "bg-green/12", text: "text-green", border: "hover:border-green/40" },
];

export function Servicios() {
  return (
    <section id="servicios" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.62rem] tracking-[0.38em] text-primary">
            ÁREAS DE ATENCIÓN
          </p>
          <h2 className="mt-5 text-3xl tracking-wide text-graphite sm:text-4xl">
            Cuatro especialidades, un mismo estándar de cuidado.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((servicio, i) => {
            const Icon = icons[i % icons.length]!;
            const theme = iconThemes[i % iconThemes.length]!;
            return (
              <Reveal key={servicio.titulo} delay={i * 90}>
                <article className={`glass lift group h-full rounded-3xl p-7 ${theme.border}`}>
                  <span className={`flex size-12 items-center justify-center rounded-2xl ${theme.bg} ${theme.text}`}>
                    <Icon className="size-6" strokeWidth={1.2} />
                  </span>
                  <h3 className="mt-6 text-xl tracking-wide text-graphite">
                    {servicio.titulo}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {servicio.descripcion}
                  </p>
                  <ul className="mt-6 space-y-2 border-t border-border/60 pt-5">
                    {servicio.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-deep/85"
                      >
                        <Check
                          className={`mt-1 size-3.5 shrink-0 ${theme.text}`}
                          strokeWidth={2}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
