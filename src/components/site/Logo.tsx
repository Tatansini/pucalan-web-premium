import { cn } from "@/lib/utils";

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <a href="#inicio" className={cn("block leading-none", className)}>
      <span
        className={cn(
          "block font-display text-lg font-light tracking-[0.42em] sm:text-xl",
          tone === "light" ? "text-background" : "text-graphite",
        )}
      >
        PUCALÁN
      </span>
      <span
        className={cn(
          "mt-1 block text-[0.5rem] font-medium tracking-[0.3em] sm:text-[0.58rem]",
          tone === "light" ? "text-background/70" : "text-muted-foreground",
        )}
      >
        SALUD Y ESTÉTICA INTEGRAL
      </span>
    </a>
  );
}
