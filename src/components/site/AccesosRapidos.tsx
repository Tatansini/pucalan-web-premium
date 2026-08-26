import { CalendarCheck, Stethoscope, Building2, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

const accesos = [
  {
    icon: CalendarCheck,
    titulo: "Reserva tu hora",
    descripcion: "Agenda en línea por especialidad y profesional.",
    href: "#reserva",
  },
  {
    icon: Stethoscope,
    titulo: "Encuentra tu profesional",
    descripcion: "Conoce al equipo que te va a atender.",
    href: "#equipo",
  },
  {
    icon: Building2,
    titulo: "Nuestras instalaciones",
    descripcion: "Boxes dentales, sala de rayos X y salas de estética.",
    href: "#clinica",
  },
  {
    icon: MapPin,
    titulo: "Horarios y ubicación",
    descripcion: "Brisas del Sol, Talcahuano. Estacionamiento propio.",
    href: "#contacto",
  },
];

export function AccesosRapidos() {
  return (
    <section aria-label="Accesos rápidos" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {accesos.map((a, i) => (
            <Reveal key={a.titulo} delay={i * 80}>
              <a
                href={a.href}
                className="glass lift group flex h-full flex-col items-start rounded-3xl p-6 hover:border-blue/40"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-blue/12 text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-blue-foreground">
                  <a.icon className="size-6" strokeWidth={1.4} />
                </span>
                <p className="mt-5 text-base font-extrabold tracking-wide text-navy">
                  {a.titulo}
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {a.descripcion}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
