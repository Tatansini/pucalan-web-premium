import { Asterisk } from "lucide-react";

const items = [
  "Odontología general",
  "Ortodoncia",
  "Endodoncia",
  "Estética dental",
  "Armonización facial",
  "Depilación láser diodo",
  "HIFU",
  "Nutrición personalizada",
  "Radiografías en sala",
  "Rehabilitación oral",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <section aria-label="Servicios destacados" className="overflow-hidden py-10">
      <div className="animate-marquee flex w-max items-center gap-4">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-4">
            <span className="rounded-full border border-navy/15 bg-card px-6 py-3 text-sm font-bold whitespace-nowrap text-navy shadow-sm">
              {item}
            </span>
            <Asterisk className="size-6 shrink-0 text-coral" />
          </span>
        ))}
      </div>
    </section>
  );
}
