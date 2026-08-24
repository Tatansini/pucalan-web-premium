import { ShieldCheck, Car, CalendarClock } from "lucide-react";
import { WHATSAPP_GENERAL } from "@/lib/site";

const badges = [
  { icon: ShieldCheck, label: "Resolución Sanitaria SEREMI" },
  { icon: Car, label: "Estacionamiento propio" },
  { icon: CalendarClock, label: "Atención de lunes a sábado" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      {/* Ondas de seda líquida */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="animate-silk absolute -top-32 -left-24 size-[42rem] rounded-full bg-blue-pastel/50 blur-[90px] sm:blur-[130px]" />
        <div className="animate-silk-slow absolute top-10 right-[-10rem] size-[38rem] rounded-full bg-primary/35 blur-[90px] sm:blur-[140px]" />
        <div className="animate-silk absolute bottom-[-14rem] left-1/3 size-[34rem] rounded-full bg-teal-soft/55 blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-6 text-[0.62rem] tracking-[0.38em] text-primary">
            TALCAHUANO · BRISAS DEL SOL
          </p>
          <h1 className="max-w-2xl text-4xl leading-[1.1] tracking-wide text-graphite sm:text-5xl lg:text-6xl">
            Salud y estética,{" "}
            <span className="text-gradient-brand">en un solo lugar.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base text-muted-foreground sm:text-lg">
            Odontología, medicina estética y nutrición en Brisas del Sol,
            Talcahuano. Equipo especializado y tecnología de última generación.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-primary px-8 py-4 text-center text-sm tracking-wide text-primary-foreground transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[var(--shadow-float)]"
            >
              Reservar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="glass rounded-full px-8 py-4 text-center text-sm tracking-wide text-deep transition-all duration-300 ease-out hover:scale-[1.02]"
            >
              Ver servicios
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-3">
            {badges.map((b) => (
              <li
                key={b.label}
                className="glass flex items-center gap-2 rounded-full px-4 py-2 text-xs tracking-wide text-deep"
              >
                <b.icon className="size-4 text-primary" strokeWidth={1.5} />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative hidden justify-center lg:flex">
          <div className="animate-float relative size-[24rem] xl:size-[28rem]">
            <div className="glass absolute inset-0 rounded-[45%_55%_58%_42%/48%_42%_58%_52%]" />
            <div className="absolute inset-10 rounded-[52%_48%_42%_58%/58%_52%_48%_42%] bg-[var(--gradient-brand)] opacity-60 blur-2xl" />
            <div className="glass absolute inset-16 rounded-[48%_52%_55%_45%/45%_55%_45%_55%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
