import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_GENERAL } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-400 ease-out",
        scrolled ? "glass-strong py-3" : "bg-background py-5",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <div className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-navy/70 transition-colors duration-300 hover:text-blue"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/reserva"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 rounded-full bg-blue py-2.5 pr-2.5 pl-6 text-sm font-bold text-blue-foreground transition-all duration-300 ease-out hover:scale-[1.03] hover:shadow-[var(--shadow-soft)]"
          >
            Reservar hora
            <span className="flex size-8 items-center justify-center rounded-full bg-navy text-navy-foreground transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-4" />
            </span>
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border/70 p-2 text-navy md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong mx-5 mt-3 rounded-3xl p-5 md:hidden">
          <ul className="space-y-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm font-medium tracking-wide text-navy"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/reserva"
            target="_blank"
            rel="noreferrer"
            className="mt-4 block rounded-full bg-blue px-6 py-3 text-center text-sm font-bold text-blue-foreground"
          >
            Reservar hora
          </a>
        </div>
      )}
    </header>
  );
}
