import { MapPin, Clock, Phone, MessageCircle, Instagram, Car } from "lucide-react";
import { Reveal } from "./Reveal";
import { CLINICA, WHATSAPP_GENERAL } from "@/lib/site";

export function Contacto() {
  return (
    <section id="contacto" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.62rem] tracking-[0.38em] text-primary">
            CONTACTO Y UBICACIÓN
          </p>
          <h2 className="mt-5 text-3xl tracking-wide text-graphite sm:text-4xl">
            Te esperamos en Brisas del Sol.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-3xl p-8 sm:p-10">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <MapPin className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <div>
                    <p className="text-sm tracking-wide text-graphite">{CLINICA.direccion}</p>
                    <p className="text-sm text-muted-foreground">{CLINICA.region}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <Clock className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <div className="space-y-1">
                    {CLINICA.horario.map((h) => (
                      <p key={h.dia} className="text-sm text-deep/85">
                        <span className="text-graphite">{h.dia}:</span> {h.hora}
                      </p>
                    ))}
                  </div>
                </li>
                <li className="flex gap-4">
                  <Phone className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <a href={`tel:${CLINICA.telefonoRaw}`} className="text-sm text-deep/85 hover:text-primary">
                    {CLINICA.telefono}
                  </a>
                </li>
                <li className="flex gap-4">
                  <MessageCircle className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <a href={WHATSAPP_GENERAL} target="_blank" rel="noreferrer" className="text-sm text-deep/85 hover:text-primary">
                    Escríbenos por WhatsApp
                  </a>
                </li>
                <li className="flex gap-4">
                  <Instagram className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <a href={CLINICA.instagramUrl} target="_blank" rel="noreferrer" className="text-sm text-deep/85 hover:text-primary">
                    {CLINICA.instagram}
                  </a>
                </li>
                <li className="flex gap-4">
                  <Car className="mt-1 size-5 shrink-0 text-primary" strokeWidth={1.4} />
                  <p className="text-sm text-deep/85">
                    Contamos con estacionamiento propio para pacientes.
                  </p>
                </li>
              </ul>

              <a
                href={WHATSAPP_GENERAL}
                target="_blank"
                rel="noreferrer"
                className="mt-10 block rounded-full bg-blue px-8 py-4 text-center text-sm tracking-wide text-blue-foreground transition-transform duration-300 hover:scale-[1.02]"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="glass h-full overflow-hidden rounded-3xl p-2">
              <iframe
                title="Mapa de Clínica Pucalán en Av. Vasco Núñez de Balboa 6740, Talcahuano"
                src="https://www.google.com/maps?q=Av.%20Vasco%20N%C3%BA%C3%B1ez%20de%20Balboa%206740,%20Talcahuano,%20Chile&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[26rem] w-full rounded-[1.4rem] border-0 lg:h-full lg:min-h-[34rem]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
