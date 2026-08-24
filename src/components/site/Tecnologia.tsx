import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { useReveal } from "@/hooks/use-reveal";
// Foto sugerida: sala-estetica.jpg — sala de estética con aparatología
import salaEstetica from "@/assets/clinica-sala-estetica.jpg";

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
    <span ref={ref} className="font-display text-4xl font-light text-graphite">
      {n}
      {sufijo}
    </span>
  );
}

export function Tecnologia() {
  return (
    <section id="tecnologia" className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={salaEstetica}
              alt="Sala de estética de Clínica Pucalán con camilla y equipos de láser diodo y HIFU"
              loading="lazy"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 to-blue-pastel/10" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[0.62rem] tracking-[0.38em] text-primary">
            TECNOLOGÍA
          </p>
          <h2 className="mt-5 text-3xl tracking-wide text-graphite sm:text-4xl">
            Equipamiento propio, resultados que puedes seguir.
          </h2>
          <p className="mt-6 text-muted-foreground">
            Trabajamos con aparatología de última generación dentro de la misma
            clínica: láser diodo para depilación, HIFU para tratamientos
            faciales y corporales, y radiología digital en sala habilitada. Eso
            significa diagnósticos más rápidos, menos derivaciones y un
            tratamiento que avanza contigo.
          </p>

          <ul className="mt-10 grid gap-6 sm:grid-cols-3">
            {datos.map((d) => (
              <li key={d.label} className="glass rounded-2xl p-5">
                <Contador valor={d.valor} sufijo={d.sufijo} />
                <p className="mt-2 text-xs tracking-wide text-muted-foreground">
                  {d.label}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
