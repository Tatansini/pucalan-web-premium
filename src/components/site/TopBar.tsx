import { Clock, Instagram, MapPin, Phone } from "lucide-react";
import { CLINICA } from "@/lib/site";

export function TopBar() {
  return (
    <div className="bg-navy text-navy-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-1 px-5 py-2 text-[0.72rem] tracking-wide sm:justify-between sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          <a
            href={`tel:${CLINICA.telefonoRaw}`}
            className="flex items-center gap-1.5 transition-colors hover:text-blue"
          >
            <Phone className="size-3.5" strokeWidth={1.6} />
            {CLINICA.telefono}
          </a>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Clock className="size-3.5" strokeWidth={1.6} />
            Lun a Vie 9:00–20:00 · Sáb 9:00–15:00
          </span>
          <span className="hidden items-center gap-1.5 lg:flex">
            <MapPin className="size-3.5" strokeWidth={1.6} />
            Av. Vasco Núñez de Balboa #6740, Talcahuano
          </span>
        </div>
        <a
          href={CLINICA.instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-blue"
        >
          <Instagram className="size-3.5" strokeWidth={1.6} />
          {CLINICA.instagram}
        </a>
      </div>
    </div>
  );
}
