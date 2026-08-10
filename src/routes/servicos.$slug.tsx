import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getService, services } from "@/lib/services";
import { Shape } from "@/components/site/Shape";
import { ElephantWalk } from "@/components/site/ElephantWalk";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    if (!getService(params.slug)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const service = getService(params.slug);
    if (!service) {
      return { meta: [{ title: "Serviço não encontrado — Facto" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${service.name} — Facto Agência Júnior`;
    return {
      meta: [
        { title },
        { name: "description", content: service.short },
        { property: "og:title", content: title },
        { property: "og:description", content: service.short },
      ],
    };
  },
  component: ServicoDetalhe,
});

function ServicoDetalhe() {
  const { slug } = Route.useParams();
  const service = getService(slug)!;
  const others = services.filter((s) => s.slug !== service.slug);

  const tint = (pct: number) => `color-mix(in oklab, ${service.color} ${pct}%, var(--background))`;

  return (
    <div>
      <section
        className="grain relative overflow-hidden border-b-2 border-brand-forest"
        style={{ backgroundColor: tint(85) }}
      >
        <ElephantWalk className="forest-scene" accent={service.color} tone="var(--brand-forest)" bg={tint(85)} />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-20 pb-44 md:pb-56">
          <Link
            to="/servicos"
            className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground"
          >
            <ArrowLeft className="size-4" /> Todos os serviços
          </Link>
          <div className="mt-22 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1
              className={`headline max-w-3xl text-5xl md:text-7xl ${
                service.slug === "producao-de-website" || service.slug === "arte-grafica" || service.slug === "gerenciamento-de-midias" 
                  ? "text-white"
                  : "text-brand-forest"
              }`}
            >
              {service.name}
            </h1>
            <Shape kind={service.shape} color="var(--brand-forest)" className="w-20 shrink-0 animate-[spin_18s_linear_infinite]" />
          </div>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-brand-forest/85">{service.intro}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pt-28 md:pt-22">
        <div
          className="mx-auto max-w-2xl rounded-lg border-2 border-brand-forest p-10 text-center"
          style={{ backgroundColor: tint(30) }}
        >
          <p className="text-lg font-semibold leading-relaxed text-brand-forest">{service.highlight}</p>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative z-10 mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2">
          <div className="rounded-lg border-2 border-brand-forest p-8" style={{ backgroundColor: tint(18) }}>
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-forest">O que está incluso</h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-forest" />
                  <span className="text-brand-forest/80">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grain relative overflow-hidden rounded-lg bg-brand-forest p-8">
            <Shape
              kind={service.shape}
              color={service.color}
              className="pointer-events-none absolute -right-8 -top-8 w-40 opacity-30"
            />
            <h2 className="relative z-10 text-xs font-bold uppercase tracking-widest text-brand-lime">Para quem é</h2>
            <p className="relative z-10 mt-4 text-lg leading-relaxed text-primary-foreground">{service.forWho}</p>
            <Link
              to="/diagnostico"
              className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-full bg-brand-lime px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand-forest transition-transform hover:scale-105"
            >
              Quero este serviço <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="grain relative overflow-hidden border-y-2 border-brand-forest bg-brand-forest">
        <ElephantWalk
          className="forest-scene"
          accent="color-mix(in oklab, var(--brand-forest) 40%, white)"
          tone="color-mix(in oklab, var(--brand-forest) 55%, white)"
          showElephant={false}
        />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-20 pb-44 md:pb-56">
          <h2 className="headline text-4xl text-primary-foreground md:text-5xl">Como funciona</h2>
          <ol className="mt-12 flex flex-wrap justify-center gap-8">
            {service.steps.map((step, i) => (
              <li
                key={step.title}
                className="w-full border-t-2 border-brand-lime pt-6 sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
              >
                <span className="text-4xl font-extrabold text-brand-lime">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-extrabold uppercase text-primary-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/70">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Outros serviços</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group flex items-start justify-between gap-4 rounded-lg border-2 border-brand-forest p-7 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: `color-mix(in oklab, ${s.color} 22%, var(--background))` }}
            >
              <h3 className="max-w-[14ch] text-lg font-extrabold uppercase leading-tight text-brand-forest">{s.name}</h3>
              <Shape kind={s.shape} color="var(--brand-forest)" className="w-6 shrink-0 transition-transform group-hover:rotate-90" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
