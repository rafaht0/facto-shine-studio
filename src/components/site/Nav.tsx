import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { services } from "@/lib/services";

const linkBase =
  "text-sm font-semibold uppercase tracking-wide text-foreground/70 transition-colors hover:text-primary";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className={linkBase}>
            Início
          </Link>
          <Link to="/sobre" activeProps={{ className: "text-primary" }} className={linkBase}>
            Quem somos
          </Link>
          <Link to="/servicos" activeProps={{ className: "text-primary" }} className={linkBase}>
            Serviços
          </Link>
          <Link to="/projetos" activeProps={{ className: "text-primary" }} className={linkBase}>
            Nossos Projetos
          </Link>
          <Link
            to="/diagnostico"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-forest"
          >
            Solicitar diagnóstico
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-primary md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setOpen(false)} className={linkBase}>
              Início
            </Link>
            <Link to="/sobre" onClick={() => setOpen(false)} className={linkBase}>
              Quem somos
            </Link>
            <Link to="/servicos" onClick={() => setOpen(false)} className={linkBase}>
              Serviços
            </Link>
            <Link to="/projetos" onClick={() => setOpen(false)} className={linkBase}>
              Nossos Projetos
            </Link>
            <div className="flex flex-col gap-2 border-l-2 border-border pl-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <Link
              to="/diagnostico"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-primary-foreground"
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
