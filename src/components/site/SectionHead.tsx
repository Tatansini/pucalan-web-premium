import { Reveal } from "./Reveal";

export function SectionHead({
  overline,
  title,
  description,
}: {
  overline: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-blue uppercase">
        <span className="h-px w-8 bg-blue" aria-hidden="true" />
        {overline}
      </p>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </Reveal>
  );
}
