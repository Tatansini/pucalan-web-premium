export const CLINICA = {
  nombre: "Clínica Pucalán",
  bajada: "Salud y Estética Integral",
  direccion: "Av. Vasco Núñez de Balboa #6740, Brisas del Sol, Talcahuano",
  region: "Región del Biobío, Chile",
  telefono: "+56 9 6574 8887",
  telefonoRaw: "+56965748887",
  instagram: "@clinicapucalan",
  instagramUrl: "https://instagram.com/clinicapucalan",
  geo: { lat: -36.7761, lng: -73.0759 },
  horario: [
    { dia: "Lunes a Viernes", hora: "9:00 – 20:00" },
    { dia: "Sábado", hora: "9:00 – 15:00" },
    { dia: "Domingo", hora: "Cerrado" },
  ],
};

export const wa = (mensaje: string) =>
  `https://wa.me/56965748887?text=${encodeURIComponent(mensaje)}`;

export const WHATSAPP_GENERAL = wa(
  "Hola, quiero agendar una hora en Clínica Pucalán",
);

export const NAV_LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Equipo", href: "#equipo" },
  { label: "Clínica", href: "#clinica" },
  { label: "Contacto", href: "#contacto" },
];

export const SERVICIOS = [
  {
    titulo: "Odontología",
    descripcion:
      "Atención dental integral con especialistas y radiografías en sala propia.",
    items: [
      "Odontología general",
      "Endodoncia",
      "Ortodoncia",
      "Rehabilitación oral",
      "Estética dental",
      "Radiografías en sala propia",
    ],
  },
  {
    titulo: "Medicina estética facial",
    descripcion:
      "Procedimientos mínimamente invasivos para realzar tus rasgos con naturalidad.",
    items: [
      "Armonización facial",
      "Rejuvenecimiento",
      "Procedimientos mínimamente invasivos",
    ],
  },
  {
    titulo: "Estética corporal y depilación láser",
    descripcion:
      "Aparatología de última generación para tratamientos corporales y faciales.",
    items: [
      "Depilación con láser diodo",
      "HIFU",
      "Tratamientos corporales",
      "Tratamientos faciales con aparatología",
    ],
  },
  {
    titulo: "Nutrición",
    descripcion:
      "Evaluación objetiva y planes de alimentación diseñados para tu vida real.",
    items: [
      "Bioimpedancia y antropometría",
      "Análisis dietético",
      "Planes personalizados",
      "Seguimiento por WhatsApp",
    ],
  },
];

export const EQUIPO = [
  {
    nombre: "Dra. Giselle Mosqueira",
    iniciales: "GM",
    especialidad: "Directora",
    detalle: ["Odontología", "Estética facial"],
    agendar: "Giselle Mosqueira",
  },
  {
    nombre: "Dr. Ignacio Herrera M.",
    iniciales: "IH",
    especialidad: "Cirujano Dentista · Endodoncista",
    detalle: [
      "Tratamientos de endodoncia",
      "Enfocado en salvar la pieza dental",
      "Eliminación del dolor",
    ],
    agendar: "el Dr. Ignacio Herrera",
  },
  {
    nombre: "Camila Muñoz",
    iniciales: "CM",
    especialidad: "Ortodoncista",
    detalle: [
      "Ortodoncia convencional",
      "Brackets metálicos y estéticos de zafiro/cerámica",
      "Alineadores",
      "Tratamiento de primera infancia",
    ],
    agendar: "Camila Muñoz",
  },
  {
    nombre: "Carolina Díaz Manríquez",
    iniciales: "CD",
    especialidad: "Nutricionista",
    detalle: [
      "Análisis dietético",
      "Composición corporal por bioimpedancia y antropometría",
      "Metas sostenibles y planes personalizados",
      "Seguimiento por WhatsApp · Consulta $30.000",
    ],
    agendar: "Carolina Díaz",
  },
];
