# Pucalán Salud & Estética

Crea un sitio web one-page (con anclas de navegación) en español para una clínica 
de salud y estética integral en Chile. Debe verse como una marca premium de 
healthcare, no como una clínica dental genérica.

═══════════════════════════════════
CONTEXTO DEL NEGOCIO (datos reales, úsalos textualmente)
═══════════════════════════════════
Nombre: Clínica Pucalán — Salud y Estética Integral
Ubicación: Av. Vasco Núñez de Balboa #6740, Brisas del Sol, Talcahuano, 
           Región del Biobío, Chile
WhatsApp / Teléfono: +56 9 6574 8887
Instagram: @clinicapucalan
Horario: Lunes a Viernes 9:00–20:00 · Sábado 9:00–15:00 · Domingo cerrado
Estacionamiento propio disponible.
Cuenta con Resolución Sanitaria otorgada por la SEREMI de Salud del Biobío.

Equipo profesional (crear tarjetas nativas, NO usar imágenes de Instagram):
- Dra. Giselle Mosqueira — Directora. Odontología y estética facial.
- Dr. Ignacio Herrera M. — Cirujano Dentista, Endodoncista. Tratamientos de 
  endodoncia enfocados en salvar la pieza dental y eliminar el dolor.
- Camila Muñoz — Ortodoncista. Ortodoncia convencional, brackets metálicos, 
  brackets estéticos de zafiro/cerámica, alineadores, tratamiento de primera infancia.
- Carolina Díaz Manríquez — Nutricionista. Análisis dietético, composición 
  corporal por bioimpedancia y antropometría, metas sostenibles, planes de 
  alimentación personalizados, seguimiento por WhatsApp. Consulta $30.000.

Áreas de servicio (4 pilares, cada uno con su tarjeta):
1. ODONTOLOGÍA — general, endodoncia, ortodoncia, rehabilitación oral, 
   estética dental, radiografías en sala propia.
2. MEDICINA ESTÉTICA FACIAL — armonización, rejuvenecimiento, procedimientos 
   mínimamente invasivos.
3. ESTÉTICA CORPORAL Y DEPILACIÓN LÁSER — láser diodo, HIFU, tratamientos 
   corporales y faciales con aparatología.
4. NUTRICIÓN — evaluación por bioimpedancia y planes personalizados.

═══════════════════════════════════
DIRECCIÓN DE ARTE (crítico — esto define el proyecto)
═══════════════════════════════════
Referencia estética: "animación 3D minimalista de un diente blanco luminoso 
rodeado de ondas de seda líquida en movimiento suave, con elementos médicos 
glassmorphic sutiles, iluminación cálida de estudio, acentos azul pastel y 
verde agua suave, aspecto premium 8k, UI moderna y limpia."

Traduce eso a web así:
- HERO a pantalla completa con un fondo de gradiente-malla animado (CSS/SVG) 
  que simule ondas de seda líquida fluyendo lentamente: capas de blur suave en 
  azul pastel y teal moviéndose en loop infinito de ~20s, muy sutil, nunca 
  distractor. Sobre eso, una figura orgánica flotante (blob SVG o esfera 
  glassmorphic) con animación float de 6s.
- GLASSMORPHISM en tarjetas: fondo semitransparente, backdrop-blur, borde 
  1px blanco al 20%, sombra difusa muy suave. Nada de sombras duras.
- Mucho espacio en blanco. Respiración generosa. Secciones amplias.
- Bordes redondeados grandes (rounded-2xl / rounded-3xl).
- Micro-animaciones: fade-in-up al hacer scroll (intersection observer), 
  hover con elevación suave y escala 1.02, transiciones de 300-400ms ease-out.
- Fotografías reales dentro de contenedores con esquinas redondeadas y un 
  leve overlay de gradiente teal para unificar la temperatura de color.

PALETA:
- Fondo base: #FBFCFD (blanco cálido)
- Teal principal: #5EAFA5
- Teal claro / acento: #A8DCD4
- Azul pastel: #A8C6E8
- Azul profundo (textos y botones secundarios): #3C5A78
- Grafito (texto principal): #2E3A45
- Gradientes: de #A8C6E8 a #5EAFA5, siempre suaves y difusos.
Usar el teal como color de acción (botones, íconos activos).

TIPOGRAFÍA:
- Titulares: una sans geométrica de peso ligero, letra espaciada 
  (tracking-wide), tipo Outfit o Sora. Titulares grandes, mucho aire.
- Cuerpo: Inter o DM Sans, gris grafito, line-height generoso.
- El nombre "PUCALÁN" siempre en mayúsculas con tracking amplio, y debajo el 
  bajada "SALUD Y ESTÉTICA INTEGRAL" en tamaño pequeño y tracking aún mayor 
  (replica el letrero de la fachada).

═══════════════════════════════════
ESTRUCTURA DE LA PÁGINA
═══════════════════════════════════
1. NAVBAR fijo, transparente al inicio y con fondo glass al hacer scroll. 
   Logo a la izquierda, links (Servicios · Equipo · Clínica · Contacto) y un 
   botón teal "Reservar hora" a la derecha.

2. HERO — fondo animado de ondas líquidas. 
   Titular: "Salud y estética, en un solo lugar."
   Subtítulo: "Odontología, medicina estética y nutrición en Brisas del Sol, 
   Talcahuano. Equipo especializado y tecnología de última generación."
   Dos botones: "Reservar por WhatsApp" (primario, teal) y "Ver servicios" 
   (secundario, glass outline).
   Debajo, tira de 3 micro-badges glass: "Resolución Sanitaria SEREMI" · 
   "Estacionamiento propio" · "Atención de lunes a sábado".

3. SERVICIOS — grid de 4 tarjetas glassmorphic con ícono lineal fino, título, 
   descripción corta y lista de prestaciones. Hover con elevación y borde teal.

4. TECNOLOGÍA — sección a dos columnas. A la izquierda, foto real de la sala 
   de estética con los equipos. A la derecha, texto sobre equipamiento propio: 
   láser diodo, HIFU, radiología digital en sala habilitada. Incluir un 
   contador animado o 3 datos destacados.

5. EQUIPO — carrusel/grid de tarjetas verticales. Foto circular arriba, 
   nombre, especialidad en píldora teal, y bullets de lo que realiza. 
   Cada tarjeta con botón "Agendar con [nombre]" que abre WhatsApp con 
   mensaje pre-cargado.

6. GALERÍA / NUESTRA CLÍNICA — masonry o carrusel de 4-6 fotos reales de los 
   boxes, sala de rayos X y salas de estética. Lightbox al hacer click.

7. CONFIANZA — banda ancha con fondo de gradiente teal suave. Badge de la 
   SEREMI + texto: "Clínica Pucalán cuenta con Resolución Sanitaria otorgada 
   por la SEREMI de Salud de la Región del Biobío."

8. CONTACTO Y UBICACIÓN — dos columnas. Izquierda: dirección, horario 
   completo, teléfono, WhatsApp, Instagram, nota de estacionamiento. 
   Derecha: mapa embebido de Google Maps centrado en Av. Vasco Núñez de 
   Balboa 6740, Talcahuano.

9. FOOTER — fondo grafito oscuro, logo en blanco, links, redes, copyright.

10. BOTÓN FLOTANTE de WhatsApp abajo a la derecha, siempre visible, con 
    animación de pulso muy sutil. Link: 
    https://wa.me/56965748887?text=Hola,%20quiero%20agendar%20una%20hora%20en%20Clínica%20Pucalán

═══════════════════════════════════
REQUISITOS TÉCNICOS
═══════════════════════════════════
- React + Tailwind CSS. Componentes limpios y reutilizables.
- Mobile-first. El hero animado debe reducir su intensidad en móvil por 
  rendimiento, y respetar prefers-reduced-motion.
- SEO local: title "Clínica Pucalán | Odontología y Estética Integral en 
  Talcahuano", meta description, Open Graph, y schema.org tipo "Dentist" con 
  dirección, teléfono, horario y geo (-36.7761, -73.0759).
- Todas las imágenes con alt descriptivo en español.
- Sin formularios de contacto que requieran backend: todo el flujo de 
  conversión va a WhatsApp.
- Placeholders claros donde deba ir cada foto, con nombre de archivo sugerido.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://pucalan-web-premium.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a7066e8d-d03a-4ac9-a825-69f1e175a4bd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
