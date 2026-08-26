import { createFileRoute } from "@tanstack/react-router";

import { TopBar } from "@/components/site/TopBar";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { AccesosRapidos } from "@/components/site/AccesosRapidos";
import { Servicios } from "@/components/site/Servicios";
import { Equipo } from "@/components/site/Equipo";
import { Tecnologia } from "@/components/site/Tecnologia";
import { Galeria } from "@/components/site/Galeria";

import { Contacto } from "@/components/site/Contacto";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";
import { CLINICA } from "@/lib/site";

const title = "Clínica Pucalán | Odontología y Estética Integral en Talcahuano";
const description =
  "Clínica Pucalán es salud y estética integral en Brisas del Sol, Talcahuano. Odontología, medicina estética facial, depilación láser diodo, HIFU y nutrición con equipo especializado y tecnología propia.";

const schemaDentist = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Clínica Pucalán — Salud y Estética Integral",
  description:
    "Clínica integral de odontología, medicina estética y nutrición en Talcahuano.",
  url: "/",
  telephone: CLINICA.telefonoRaw,
  address: {
    "@type": "PostalAddress",
    streetAddress: CLINICA.direccion,
    addressLocality: "Talcahuano",
    addressRegion: "Región del Biobío",
    addressCountry: "CL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLINICA.geo.lat,
    longitude: CLINICA.geo.lng,
  },
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 09:00-15:00"],
  priceRange: "$$",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "es_CL" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schemaDentist),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AccesosRapidos />
        <Servicios />
        <Equipo />
        <Tecnologia />
        <Galeria />
        <Contacto />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
