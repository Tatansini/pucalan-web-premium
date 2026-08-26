import { useState } from "react";
import { CalendarCheck, ChevronDown } from "lucide-react";
import { RESERVA, waReserva } from "@/lib/site";

export function ReservaWidget() {
  const [especialidad, setEspecialidad] = useState("");
  const [profesional, setProfesional] = useState("");

  const profesionales =
    RESERVA.find((r) => r.especialidad === especialidad)?.profesionales ?? [];

  const listo = especialidad !== "" && profesional !== "";

  return (
    <div
      id="reserva"
      className="glass-strong w-full rounded-3xl p-6 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-11 items-center justify-center rounded-2xl bg-blue text-blue-foreground">
          <CalendarCheck className="size-5" strokeWidth={1.6} />
        </span>
        <div>
          <p className="text-base font-extrabold tracking-wide text-navy sm:text-lg">
            Reserva tu hora
          </p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            Elige especialidad y profesional. Confirmamos por WhatsApp.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <label className="relative block">
          <span className="sr-only">Especialidad</span>
          <select
            value={especialidad}
            onChange={(e) => {
              setEspecialidad(e.target.value);
              setProfesional("");
            }}
            className="w-full appearance-none rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-navy outline-none transition-colors focus:border-blue"
          >
            <option value="" disabled>
              Especialidad
            </option>
            {RESERVA.map((r) => (
              <option key={r.especialidad} value={r.especialidad}>
                {r.especialidad}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground" />
        </label>

        <label className="relative block">
          <span className="sr-only">Profesional</span>
          <select
            value={profesional}
            onChange={(e) => setProfesional(e.target.value)}
            disabled={!especialidad}
            className="w-full appearance-none rounded-2xl border border-border bg-background px-4 py-3.5 text-sm text-navy outline-none transition-colors focus:border-blue disabled:opacity-50"
          >
            <option value="" disabled>
              Profesional
            </option>
            {profesionales.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted-foreground" />
        </label>
      </div>

      <a
        href={listo ? waReserva(especialidad, profesional) : undefined}
        target="_blank"
        rel="noreferrer"
        aria-disabled={!listo}
        onClick={(e) => !listo && e.preventDefault()}
        className={`mt-4 block rounded-full px-6 py-3.5 text-center text-sm font-bold tracking-wide transition-all duration-300 ${
          listo
            ? "bg-blue text-blue-foreground hover:scale-[1.02] hover:shadow-[var(--shadow-soft)]"
            : "cursor-not-allowed bg-muted text-muted-foreground"
        }`}
      >
        {listo ? "Reservar por WhatsApp" : "Selecciona especialidad y profesional"}
      </a>
    </div>
  );
}
