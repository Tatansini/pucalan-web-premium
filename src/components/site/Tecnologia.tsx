import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { useReveal } from "@/hooks/use-reveal";
import salaEstetica from "@/assets/clinica-sala-estetica.jpg.asset.json";

const datos = [
  { valor: 4, sufijo: "", label: "Áreas clínicas integradas" },
  { valor: 100, sufijo: "%", label: "Equipamiento propio en clínica" },
  { valor: 6, sufijo: " días", label: "De atención a la semana" },
];

function Contador({ valor, sufijo }: { valor: number; sufijo: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setN(valor);
      return;
    }
    let frame = 0;
    const total = 48;
    const id = setInterval(() => {
      frame += 1;
      setN(Math.round(valor * (1 - Math.pow(1 - frame / total, 3))));
      if (frame >= total) clearInterval(id);
    }, 22);
    return () => clearInterval(id);
  }, [visible, valor]);

  return (
    <span className="text-4xl font-extrabold text-blue">
      {n}
      {sufijo}
    </span>
  );
}

export function Tecnologia() {
  return (
    <section id="tecnologia" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <SectionHead
            overline="Tecnología"
            title="Equipamiento propio, diagnóstico en la misma clínica"
            description="Trabajamos con aparatología de última generación dentro de la misma clínica: láser diodo para depilación, HIFU para tratamientos faciales y corporales, y radiología digital en sala habilitada. Eso significa diagnósticos más rápidos, menos derivaciones y un tratamiento que avanza contigo."
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {datos.map((d) => (
              <li
                key={d.label}
                className="rounded-xl border border-border bg-muted/40 p-5"
              >
                <Contador valor={d.valor} sufijo={d.sufijo} />
                <p className="mt-2 text-xs font-medium tracking-wide text-muted-foreground">
                  {d.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-xl border border-border shadow-sm">
            <img
              src={salaEstetica.url}
              alt="Sala de estética de Clínica Pucalán con camilla y equipos de láser diodo y HIFU"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
