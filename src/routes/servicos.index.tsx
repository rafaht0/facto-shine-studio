import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Shape } from "@/components/site/Shape";

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
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Serviços</p>
          <h1 className="headline mt-4 max-w-3xl text-5xl text-brand-forest md:text-6xl">
            Tudo que sua marca precisa para comunicar melhor
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <div className="divide-y divide-border border-b border-border">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col gap-3 py-8 md:flex-row md:items-center md:gap-8"
            >
              <div className="flex items-center gap-4 md:w-[46%]">
                <Shape kind={s.shape} color={s.color} className="w-7 shrink-0 transition-transform group-hover:rotate-90" />
                <h2 className="text-2xl font-extrabold uppercase leading-tight text-brand-forest transition-colors group-hover:text-primary md:text-3xl">
                  {s.name}
                </h2>
              </div>
              <p className="flex-1 text-muted-foreground">{s.short}</p>
              <ArrowRight className="size-5 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
