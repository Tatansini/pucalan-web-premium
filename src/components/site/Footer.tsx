import { Instagram, MessageCircle, MapPin, Clock } from "lucide-react";
import { Logo } from "./Logo";
import { CLINICA, NAV_LINKS, WHATSAPP_GENERAL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy px-5 py-16 text-navy-foreground sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            Clínica de salud y estética integral en Talcahuano. Odontología,
            medicina estética, depilación láser y nutrición.
          </p>
        </div>

        <nav>
          <p className="text-xs font-bold tracking-[0.2em] text-navy-foreground/60 uppercase">
            Secciones
          </p>
          <div className="mt-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-navy-foreground/80 transition-colors duration-300 hover:text-blue-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
        </nav>

        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-navy-foreground/60 uppercase">
            Horarios
          </p>
          <ul className="mt-4 space-y-2">
            {CLINICA.horario.map((h) => (
              <li key={h.dia} className="flex items-center gap-2 text-sm text-navy-foreground/80">
                <Clock className="size-3.5 shrink-0 text-blue-foreground/60" strokeWidth={2} />
                {h.dia}: {h.hora}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-xs font-bold tracking-[0.2em] text-navy-foreground/60 uppercase">
            Contacto
          </p>
          <p className="flex items-start gap-2 text-sm text-navy-foreground/80">
            <MapPin className="mt-0.5 size-4 shrink-0 text-blue-foreground/60" strokeWidth={1.8} />
            {CLINICA.direccion}, {CLINICA.region}
          </p>
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors duration-300 hover:text-blue-foreground"
          >
            <MessageCircle className="size-4 shrink-0 text-blue-foreground/60" strokeWidth={1.8} />
            {CLINICA.telefono}
          </a>
          <a
            href={CLINICA.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-navy-foreground/80 transition-colors duration-300 hover:text-blue-foreground"
          >
            <Instagram className="size-4 shrink-0 text-blue-foreground/60" strokeWidth={1.8} />
            {CLINICA.instagram}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-navy-foreground/15 pt-6">
        <p className="text-xs tracking-wide text-navy-foreground/50">
          © {new Date().getFullYear()} Clínica Pucalán · Salud y Estética
          Integral. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
