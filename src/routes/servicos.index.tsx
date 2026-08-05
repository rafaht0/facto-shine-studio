import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Shape } from "@/components/site/Shape";
import { ElephantWalk } from "@/components/site/ElephantWalk";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços — Facto Agência Júnior de Comunicação" },
      {
        name: "description",
        content:
          "Branding, gerenciamento de mídias, manual de identidade visual, plano de comunicação, consultoria, websites e tráfego pago.",
      },
      { property: "og:title", content: "Serviços — Facto Agência Júnior" },
      {
        property: "og:description",
        content: "Sete frentes de comunicação para marcas que querem crescer com estratégia.",
      },
    ],
  }),
  component: ServicosIndex,
});

function ServicosIndex() {
  return (
    <div>
      <section className="grain relative overflow-hidden border-b-2 border-brand-forest bg-primary">
        <ElephantWalk className="forest-scene" accent="var(--brand-lime)" tone="var(--brand-forest)" />
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-brand-lime">Serviços</p>
          <h1 className="headline mt-4 max-w-3xl text-5xl text-primary-foreground md:text-7xl">
            Tudo que sua marca precisa para comunicar melhor
          </h1>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-16">
          <div className="grid gap-5 sm:grid-cols-2">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group relative overflow-hidden rounded-lg border-2 border-brand-forest p-8 transition-transform hover:-translate-y-1"
                style={{ backgroundColor: `color-mix(in oklab, ${s.color} 28%, var(--background))` }}
              >
                <Shape
                  kind={s.shape}
                  color={s.color}
                  className="pointer-events-none absolute -right-6 -top-6 w-28 opacity-50 transition-transform duration-500 group-hover:rotate-90"
                />
                <h2 className="relative z-10 max-w-[16ch] text-2xl font-extrabold uppercase leading-tight text-brand-forest md:text-3xl">
                  {s.name}
                </h2>
                <p className="relative z-10 mt-4 max-w-md text-brand-forest/75">{s.short}</p>
                <span className="relative z-10 mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-forest">
                  Ver serviço <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
