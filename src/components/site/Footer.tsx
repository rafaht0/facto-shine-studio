import { Link } from "@tanstack/react-router";
import { services } from "@/lib/services";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="mt-24 bg-brand-forest text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            Agência júnior de comunicação. Mais de uma década inovando a comunicação do mercado — porque estagnar é
            perder oportunidade.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-lime">Serviços</h3>
          <ul className="mt-4 space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/servicos/$slug"
                  params={{ slug: s.slug }}
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-brand-lime"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-brand-lime">Navegue</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/sobre" className="text-sm text-primary-foreground/75 hover:text-brand-lime">
                Quem somos
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="text-sm text-primary-foreground/75 hover:text-brand-lime">
                Todos os serviços
              </Link>
            </li>
            <li>
              <Link to="/projetos" className="text-sm text-primary-foreground/75 hover:text-brand-lime">
                Nossos Projetos
              </Link>
            </li>
            <li>
              <Link to="/diagnostico" className="text-sm text-primary-foreground/75 hover:text-brand-lime">
                Solicitar diagnóstico
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-5 py-6 text-xs text-primary-foreground/50">
          © {new Date().getFullYear()} Facto Agência Júnior de Comunicação. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
