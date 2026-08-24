import { Instagram, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CLINICA, NAV_LINKS, WHATSAPP_GENERAL } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-graphite px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Logo tone="light" />
          <p className="mt-6 max-w-xs text-sm text-background/60">
            {CLINICA.direccion}, {CLINICA.region}.
          </p>
        </div>

        <nav className="flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-background/70 transition-colors duration-300 hover:text-teal-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4">
          <a
            href={WHATSAPP_GENERAL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-background/70 transition-colors duration-300 hover:text-teal-soft"
          >
            <MessageCircle className="size-4" strokeWidth={1.4} />
            {CLINICA.telefono}
          </a>
          <a
            href={CLINICA.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm text-background/70 transition-colors duration-300 hover:text-teal-soft"
          >
            <Instagram className="size-4" strokeWidth={1.4} />
            {CLINICA.instagram}
          </a>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-background/15 pt-6">
        <p className="text-xs tracking-wide text-background/50">
          © {new Date().getFullYear()} Clínica Pucalán · Salud y Estética
          Integral. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
