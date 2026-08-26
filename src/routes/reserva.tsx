import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Stethoscope,
  User,
} from "lucide-react";
import { Logo } from "@/components/site/Logo";
import { CLINICA, RESERVA, wa } from "@/lib/site";

const title = "Reserva de horas online | Clínica Pucalán Talcahuano";
const description =
  "Reserva tu hora en Clínica Pucalán: elige especialidad, profesional, día y horario disponible. Confirmación inmediata por WhatsApp. Brisas del Sol, Talcahuano.";

type ReservaSearch = { esp?: string; prof?: string };

export const Route = createFileRoute("/reserva")({
  validateSearch: (search: Record<string, unknown>): ReservaSearch => {
    const out: ReservaSearch = {};
    if (typeof search["esp"] === "string") out.esp = search["esp"];
    if (typeof search["prof"] === "string") out.prof = search["prof"];
    return out;
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/reserva" }],
  }),
  component: ReservaPage,
});

const DIAS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const MESES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

const HORAS_SEMANA = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];
const HORAS_SABADO = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00"];

function proximosDias(cantidad: number) {
  const hoy = new Date();
  const dias: { key: string; date: Date }[] = [];
  let i = 1;
  while (dias.length < cantidad) {
    const d = new Date(hoy);
    d.setDate(hoy.getDate() + i);
    i += 1;
    if (d.getDay() === 0) continue; // domingo cerrado
    dias.push({ key: d.toISOString().slice(0, 10), date: d });
  }
  return dias;
}

const PASOS = ["Especialidad", "Profesional", "Día y hora", "Tus datos"];

function ReservaPage() {
  const { esp, prof } = Route.useSearch();
  const espInicial = RESERVA.some((r) => r.especialidad === esp) ? esp! : "";
  const profInicial =
    espInicial &&
    RESERVA.find((r) => r.especialidad === espInicial)?.profesionales.includes(
      prof ?? "",
    )
      ? prof!
      : "";
  const [paso, setPaso] = useState(profInicial ? 2 : espInicial ? 1 : 0);
  const [especialidad, setEspecialidad] = useState(espInicial);
  const [profesional, setProfesional] = useState(profInicial);
  const [dia, setDia] = useState<string>("");
  const [hora, setHora] = useState("");
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [prevision, setPrevision] = useState("Particular");
  const [resumenAbierto, setResumenAbierto] = useState(false);

  const dias = useMemo(() => proximosDias(12), []);
  const profesionales =
    RESERVA.find((r) => r.especialidad === especialidad)?.profesionales ?? [];
  const diaSel = dias.find((d) => d.key === dia);
  const horas = diaSel?.date.getDay() === 6 ? HORAS_SABADO : HORAS_SEMANA;

  const fechaLarga = diaSel
    ? `${DIAS[diaSel.date.getDay()] ?? ""} ${diaSel.date.getDate()} de ${MESES[diaSel.date.getMonth()] ?? ""}`
    : "";

  const puedeConfirmar =
    nombre.trim().length > 2 && telefono.trim().length >= 8 && hora !== "";

  const mensaje = wa(
    `Hola, quiero reservar una hora en Clínica Pucalán.\n\n` +
      `• Especialidad: ${especialidad}\n` +
      `• Profesional: ${profesional}\n` +
      `• Fecha: ${fechaLarga}\n` +
      `• Hora: ${hora}\n` +
      `• Paciente: ${nombre}\n` +
      `• Teléfono: ${telefono}\n` +
      `• Previsión: ${prevision}`,
  );

  return (
    <div className="min-h-screen bg-muted/40">
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
          <Logo />
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-navy/70 transition-colors hover:text-blue"
          >
            <ArrowLeft className="size-4" />
            Volver al sitio
          </Link>
        </div>
      </header>

      <div className="border-b border-border bg-navy">
        <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8 sm:py-10">
          <p className="text-[10px] font-bold tracking-[0.3em] text-navy-foreground/70 uppercase sm:text-xs">
            Reserva web
          </p>
          <h1 className="mt-2 text-2xl font-extrabold text-navy-foreground sm:mt-3 sm:text-4xl">
            Agenda tu hora en línea
          </h1>
          <p className="mt-2 max-w-2xl text-xs text-navy-foreground/80 sm:text-sm">
            Selecciona especialidad, profesional y el horario que más te acomode.
            Confirmamos tu cita al instante por WhatsApp.
          </p>
        </div>
      </div>

      <main className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-12">
        {/* Stepper */}
        <ol className="mb-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {PASOS.map((p, i) => {
            const activo = i === paso;
            const hecho = i < paso;
            return (
              <li
                key={p}
                className={`flex items-center gap-2.5 rounded-xl border px-3 py-2.5 sm:gap-3 sm:px-4 sm:py-3 ${
                  activo
                    ? "border-blue bg-white shadow-sm"
                    : hecho
                      ? "border-blue/30 bg-blue/5"
                      : "border-border bg-white/60"
                }`}
              >
                <span
                  className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                    activo || hecho
                      ? "bg-blue text-blue-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {hecho ? <Check className="size-4" /> : i + 1}
                </span>
                <span
                  className={`truncate text-xs font-semibold sm:text-sm ${activo || hecho ? "text-navy" : "text-muted-foreground"}`}
                >
                  {p}
                </span>
              </li>
            );
          })}
        </ol>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          <section className="rounded-2xl border border-border bg-white p-4 shadow-sm sm:p-8">
            {paso === 0 && (
              <>
                <h2 className="text-lg font-extrabold text-navy">
                  1. Selecciona la especialidad
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {RESERVA.map((r) => (
                    <button
                      key={r.especialidad}
                      type="button"
                      onClick={() => {
                        setEspecialidad(r.especialidad);
                        setProfesional("");
                        setPaso(1);
                      }}
                      className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left transition-all hover:border-blue hover:shadow-sm ${
                        especialidad === r.especialidad
                          ? "border-blue bg-blue/5"
                          : "border-border"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-lg bg-blue/12 text-blue">
                          <Stethoscope className="size-4" strokeWidth={1.6} />
                        </span>
                        <span className="text-sm font-semibold text-navy">
                          {r.especialidad}
                        </span>
                      </span>
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </>
            )}

            {paso === 1 && (
              <>
                <h2 className="text-lg font-extrabold text-navy">
                  2. Elige al profesional
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {especialidad}
                </p>
                <div className="mt-5 grid gap-3">
                  {profesionales.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => {
                        setProfesional(p);
                        setPaso(2);
                      }}
                      className={`flex items-center justify-between gap-3 rounded-xl border px-4 py-4 text-left transition-all hover:border-blue hover:shadow-sm ${
                        profesional === p ? "border-blue bg-blue/5" : "border-border"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="flex size-9 items-center justify-center rounded-full bg-blue/12 text-blue">
                          <User className="size-4" strokeWidth={1.6} />
                        </span>
                        <span className="text-sm font-semibold text-navy">{p}</span>
                      </span>
                      <ChevronRight className="size-4 text-muted-foreground" />
                    </button>
                  ))}
                </div>
              </>
            )}

            {paso === 2 && (
              <>
                <h2 className="text-lg font-extrabold text-navy">
                  3. Selecciona día y hora
                </h2>
                <div className="mt-5 flex gap-2 overflow-x-auto pb-2">
                  {dias.map((d) => {
                    const sel = d.key === dia;
                    return (
                      <button
                        key={d.key}
                        type="button"
                        onClick={() => {
                          setDia(d.key);
                          setHora("");
                        }}
                        className={`flex min-w-16 shrink-0 flex-col items-center rounded-xl border px-2.5 py-2.5 transition-colors sm:min-w-20 sm:px-3 sm:py-3 ${
                          sel
                            ? "border-blue bg-blue text-blue-foreground"
                            : "border-border bg-white text-navy hover:border-blue"
                        }`}
                      >
                        <span className="text-[11px] font-semibold uppercase opacity-80">
                          {(DIAS[d.date.getDay()] ?? "").slice(0, 3)}
                        </span>
                        <span className="text-lg font-extrabold">
                          {d.date.getDate()}
                        </span>
                        <span className="text-[11px] opacity-80">
                          {(MESES[d.date.getMonth()] ?? "").slice(0, 3)}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {dia && (
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-navy">
                      Horarios disponibles · {fechaLarga}
                    </p>
                    <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-5">
                      {horas.map((h) => (
                        <button
                          key={h}
                          type="button"
                          onClick={() => setHora(h)}
                          className={`rounded-lg border px-3 py-2.5 text-sm font-semibold transition-colors ${
                            hora === h
                              ? "border-blue bg-blue text-blue-foreground"
                              : "border-border bg-white text-navy hover:border-blue"
                          }`}
                        >
                          {h}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setPaso(1)}
                    className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy"
                  >
                    Atrás
                  </button>
                  <button
                    type="button"
                    disabled={!hora}
                    onClick={() => setPaso(3)}
                    className="rounded-full bg-blue px-6 py-3 text-sm font-bold text-blue-foreground transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continuar
                  </button>
                </div>
              </>
            )}

            {paso === 3 && (
              <>
                <h2 className="text-lg font-extrabold text-navy">
                  4. Completa tus datos
                </h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-xs font-semibold text-navy">
                      Nombre y apellido
                    </span>
                    <input
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ej: María González"
                      className="mt-1.5 w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:bg-white"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold text-navy">Teléfono</span>
                    <input
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                      placeholder="+56 9 ..."
                      inputMode="tel"
                      className="mt-1.5 w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:bg-white"
                    />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-semibold text-navy">Previsión</span>
                    <select
                      value={prevision}
                      onChange={(e) => setPrevision(e.target.value)}
                      className="mt-1.5 w-full rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm text-navy outline-none focus:border-blue focus:bg-white"
                    >
                      <option>Particular</option>
                      <option>Fonasa</option>
                      <option>Isapre</option>
                      <option>Convenio empresa</option>
                    </select>
                  </label>
                </div>

                <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:flex-wrap">
                  <button
                    type="button"
                    onClick={() => setPaso(2)}
                    className="rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy"
                  >
                    Atrás
                  </button>
                  <a
                    href={puedeConfirmar ? mensaje : undefined}
                    target="_blank"
                    rel="noreferrer"
                    aria-disabled={!puedeConfirmar}
                    onClick={(e) => !puedeConfirmar && e.preventDefault()}
                    className={`rounded-full px-6 py-3 text-center text-sm font-bold ${
                      puedeConfirmar
                        ? "bg-blue text-blue-foreground hover:shadow-[var(--shadow-soft)]"
                        : "cursor-not-allowed bg-muted text-muted-foreground"
                    }`}
                  >
                    Confirmar reserva por WhatsApp
                  </a>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  La hora queda confirmada cuando nuestro equipo te responde por
                  WhatsApp.
                </p>
              </>
            )}
          </section>

          {/* Resumen */}
          <aside className="h-fit rounded-2xl border border-border bg-white p-6 shadow-sm">
            <p className="text-sm font-extrabold tracking-wide text-navy">
              Resumen de tu reserva
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Stethoscope className="mt-0.5 size-4 shrink-0 text-blue" />
                <div>
                  <dt className="text-xs text-muted-foreground">Especialidad</dt>
                  <dd className="font-semibold text-navy">
                    {especialidad || "Por seleccionar"}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <User className="mt-0.5 size-4 shrink-0 text-blue" />
                <div>
                  <dt className="text-xs text-muted-foreground">Profesional</dt>
                  <dd className="font-semibold text-navy">
                    {profesional || "Por seleccionar"}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-0.5 size-4 shrink-0 text-blue" />
                <div>
                  <dt className="text-xs text-muted-foreground">Fecha y hora</dt>
                  <dd className="font-semibold text-navy">
                    {fechaLarga ? `${fechaLarga}${hora ? ` · ${hora}` : ""}` : "Por seleccionar"}
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-6 space-y-2 border-t border-border pt-5 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-blue" />
                {CLINICA.direccion}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-3.5 shrink-0 text-blue" />
                {CLINICA.telefono}
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-3.5 shrink-0 text-blue" />
                Lun a Vie 9:00–20:00 · Sáb 9:00–15:00
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
