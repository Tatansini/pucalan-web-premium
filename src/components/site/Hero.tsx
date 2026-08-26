import { ArrowUpRight, ShieldCheck, Sparkles, Star } from "lucide-react";
import { WHATSAPP_GENERAL } from "@/lib/site";
import dienteHero from "@/assets/diente-hero.png";
import paciente1 from "@/assets/paciente-1.jpg";
import paciente2 from "@/assets/paciente-2.jpg";
import logoAsset from "@/assets/logo-pucalan.png.asset.json";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      {/* Ondas de seda líquida */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="animate-silk absolute -top-32 -left-24 size-[42rem] rounded-full bg-teal/40 blur-[110px] sm:blur-[150px]" />
        <div className="animate-silk-slow absolute top-10 right-[-10rem] size-[38rem] rounded-full bg-blue/25 blur-[110px] sm:blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Titular gigante centrado */}
        <div className="relative mx-auto max-w-4xl text-center">
          {/* Paciente izquierda */}
          <div className="absolute top-6 -left-40 hidden lg:block">
            <div className="relative">
              <img
                src={paciente1}
                alt="Paciente sonriendo tras su tratamiento"
                className="size-36 rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
                loading="lazy"
              />
              <span className="absolute -top-3 -right-3 flex size-11 items-center justify-center rounded-2xl bg-coral text-coral-foreground shadow-md">
                <Sparkles className="size-5" />
              </span>
            </div>
          </div>
          {/* Paciente derecha */}
          <div className="absolute top-24 -right-40 hidden lg:block">
            <div className="relative">
              <img
                src={paciente2}
                alt="Paciente feliz en la clínica"
                className="size-36 rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
                loading="lazy"
              />
              <span className="absolute -bottom-3 -left-3 flex size-11 items-center justify-center rounded-2xl bg-coral text-coral-foreground shadow-md">
                <Star className="size-5" />
              </span>
            </div>
          </div>

          {/* Logo protagonista */}
          <div className="animate-float mx-auto mb-8 w-fit">
            <img
              src={logoAsset.url}
              alt="Logo Clínica Pucalán — salud y estética integral"
              className="size-36 rounded-full shadow-[var(--shadow-float)] ring-8 ring-background/70 sm:size-44 lg:size-52"
              width={416}
              height={416}
              fetchPriority="high"
            />
          </div>
          <p className="mb-5 text-xs font-bold tracking-[0.35em] text-blue uppercase">
            Clínica Pucalán · Talcahuano · Brisas del Sol
          </p>
          <h1 className="text-5xl leading-[1.02] font-extrabold text-navy sm:text-7xl">
            Tu sonrisa,{" "}
            <span className="text-gradient-brand">en buenas manos</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Odontología, medicina estética y nutrición en un solo lugar.
            Equipo especializado y tecnología de última generación.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href={WHATSAPP_GENERAL}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-full bg-[var(--gradient-brand)] py-3 pr-3 pl-8 text-base font-bold text-navy transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[var(--shadow-float)]"
            >
              Reservar por WhatsApp
              <span className="flex size-10 items-center justify-center rounded-full bg-navy text-navy-foreground transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="size-5" />
              </span>
            </a>
          </div>
        </div>

        {/* Panel gris con diente 3D */}
        <div className="relative mt-16 overflow-hidden rounded-[3rem] bg-teal/70 px-6 pt-14 pb-0 sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="animate-silk absolute -top-24 left-1/4 size-[26rem] rounded-full bg-background/60 blur-[100px]" />
            <div className="animate-silk-slow absolute right-10 bottom-0 size-[22rem] rounded-full bg-blue/25 blur-[100px]" />
          </div>

          {/* Etiquetas flotantes */}
          <span className="glass absolute top-10 left-8 hidden rounded-full px-4 py-2 text-xs font-bold text-navy sm:block">
            Odontología integral
          </span>
          <span className="glass absolute top-24 right-10 hidden rounded-full px-4 py-2 text-xs font-bold text-navy sm:block">
            Estética facial
          </span>

          {/* Panel de bienvenida */}
          <div className="glass-strong absolute top-1/2 left-6 z-10 hidden w-64 -translate-y-1/2 rounded-3xl p-6 lg:block">
            <p className="text-lg leading-snug font-extrabold text-navy">
              Bienvenido a Clínica Pucalán
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Salud y estética integral con resolución sanitaria SEREMI.
            </p>
            <a
              href="#servicios"
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-blue"
            >
              Conocer más <ArrowUpRight className="size-4" />
            </a>
          </div>

          {/* Estadística de especialistas */}
          <div className="glass-strong absolute right-6 bottom-10 z-10 hidden w-60 rounded-3xl p-6 lg:block">
            <p className="text-3xl font-extrabold text-navy">4+</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Especialistas dedicados a tu salud y estética
            </p>
            <div className="mt-3 flex items-center gap-1 text-coral">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
          </div>

          <img
            src={dienteHero}
            alt="Diente 3D luminoso rodeado de ondas de seda"
            className="animate-float relative mx-auto w-64 sm:w-80 lg:w-96"
            width={768}
            height={768}
            fetchPriority="high"
          />

          <div className="relative z-10 -mt-6 flex justify-center pb-6">
            <span className="flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-xs font-bold tracking-wide text-navy-foreground">
              <ShieldCheck className="size-4 text-teal" />
              Resolución Sanitaria SEREMI · Estacionamiento propio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
