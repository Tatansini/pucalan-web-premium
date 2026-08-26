import { ShieldCheck } from "lucide-react";
import { ReservaWidget } from "./ReservaWidget";
import fachadaAsset from "@/assets/fachada-clinica.jpg.asset.json";

export function Hero() {
  return (
    <section id="inicio" className="relative">
      {/* Banner institucional con fachada real */}
      <div className="relative overflow-hidden">
        <img
          src={fachadaAsset.url}
          alt="Fachada de Clínica Pucalán en Brisas del Sol, Talcahuano"
          className="absolute inset-0 size-full object-cover"
          width={1200}
          height={1600}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-navy/60" />

        <div className="relative mx-auto max-w-7xl px-5 pt-40 pb-56 sm:px-8 sm:pt-48 sm:pb-64">
          <p className="text-xs font-bold tracking-[0.35em] text-navy-foreground/80 uppercase">
            Clínica Pucalán · Brisas del Sol, Talcahuano
          </p>
          <h1 className="mt-5 max-w-2xl text-4xl leading-tight font-extrabold text-navy-foreground sm:text-6xl">
            Salud y estética integral, cerca de ti.
          </h1>
          <p className="mt-5 max-w-xl text-base text-navy-foreground/85 sm:text-lg">
            Odontología, medicina estética y nutrición en un solo lugar, con
            equipo especializado y tecnología propia.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="flex items-center gap-2 rounded-full bg-navy-foreground/15 px-4 py-2 text-xs font-semibold tracking-wide text-navy-foreground backdrop-blur-sm">
              <ShieldCheck className="size-4" />
              Resolución Sanitaria SEREMI
            </span>
            <span className="flex items-center gap-2 rounded-full bg-navy-foreground/15 px-4 py-2 text-xs font-semibold tracking-wide text-navy-foreground backdrop-blur-sm">
              Estacionamiento para pacientes
            </span>
          </div>
        </div>
      </div>

      {/* Widget de reserva superpuesto — el corazón de la página */}
      <div className="relative mx-auto -mt-44 max-w-3xl px-5 sm:-mt-52 sm:px-8">
        <ReservaWidget />
      </div>
    </section>
  );
}
