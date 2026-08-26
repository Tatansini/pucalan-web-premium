import { MapPin, Clock, Phone, MessageCircle, Instagram, Car } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { CLINICA, WHATSAPP_GENERAL } from "@/lib/site";

export function Contacto() {
  return (
    <section id="contacto" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHead
          overline="Contacto y ubicación"
          title="Te esperamos en Brisas del Sol, Talcahuano"
          description="Atención de lunes a sábado, con estacionamiento propio para pacientes."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-xl border border-border bg-card p-8 shadow-sm sm:p-10">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-blue" strokeWidth={1.6} />
                  <div>
                    <p className="text-sm font-semibold text-navy">{CLINICA.direccion}</p>
                    <p className="text-sm text-muted-foreground">{CLINICA.region}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-blue" strokeWidth={1.6} />
                  <div className="space-y-1">
                    {CLINICA.horario.map((h) => (
                      <p key={h.dia} className="text-sm text-foreground/80">
                        <span className="font-semibold text-navy">{h.dia}:</span> {h.hora}
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-blue" strokeWidth={1.6} />
                  <a href={`tel:${CLINICA.telefonoRaw}`} className="text-sm text-foreground/80 hover:text-blue">
                    {CLINICA.telefono}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MessageCircle className="mt-1 size-5 shrink-0 text-blue" strokeWidth={1.6} />
                  <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="text-sm text-foreground/80 hover:text-blue">
                    Escríbenos por WhatsApp
                  </a>
                </li>
                <li className="flex gap-4">
                  <Instagram className="mt-1 size-5 shrink-0 text-blue" strokeWidth={1.6} />
                  <a href={CLINICA.instagramUrl} target="_blank" rel="noreferrer" className="text-sm text-foreground/80 hover:text-blue">
                    {CLINICA.instagram}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Car className="mt-1 size-5 shrink-0 text-blue" strokeWidth={1.6} />
                  <p className="text-sm text-foreground/80">
                    Contamos con estacionamiento propio para pacientes.
                  </p>
                </li>
              </ul>

              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noreferrer"
                className="mt-10 block rounded-lg bg-blue px-8 py-4 text-center text-sm font-semibold text-blue-foreground transition-colors duration-300 hover:bg-blue/90"
              >
                Reservar hora por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-xl border border-border bg-card p-2 shadow-sm">
              <iframe
                title="Mapa de Clínica Pucalán en Av. Vasco Núñez de Balboa 6740, Talcahuano"
                src="https://www.google.com/maps?q=Av.%20Vasco%20N%C3%BA%C3%B1ez%20de%20Balboa%206740,%20Talcahuano,%20Chile&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full rounded-lg border-0 lg:h-full lg:min-h-[34rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
