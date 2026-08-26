import logoAsset from "@/assets/logo-pucalan.png.asset.json";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <a
      href="#inicio"
      aria-label="Clínica Pucalán — inicio"
      className={cn("flex items-center gap-3", className)}
    >
      <img
        src={logoAsset.url}
        alt="Logo Clínica Pucalán"
        className="size-12 rounded-full shadow-[var(--shadow-soft)] sm:size-14"
        width={112}
        height={112}
      />
      <span className="hidden leading-tight sm:block">
        <span
          className={cn(
            "block font-display text-base font-extrabold tracking-[0.18em]",
            tone === "light" ? "text-background" : "text-navy",
          )}
        >
          PUCALÁN
        </span>
        <span
          className={cn(
            "block text-[0.55rem] font-semibold tracking-[0.28em]",
            tone === "light" ? "text-background/70" : "text-muted-foreground",
          )}
        >
          SALUD Y ESTÉTICA INTEGRAL
        </span>
      </span>
    </a>
  );
}
