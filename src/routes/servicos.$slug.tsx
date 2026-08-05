import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getService, services } from "@/lib/services";
import { Shape } from "@/components/site/Shape";

export const Route = createFileRoute("/servicos/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Serviço não encontrado — Facto" }, { name: "robots", content: "noindex" }] };
    }
    const { service } = loaderData;
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
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary">
            <ArrowLeft className="size-4" /> Todos os serviços
          </Link>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h1 className="headline max-w-3xl text-5xl text-brand-forest md:text-6xl">{service.name}</h1>
            <Shape kind={service.shape} color={service.color} className="w-16 shrink-0" />
          </div>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{service.intro}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2">
        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">O que está incluso</h2>
          <ul className="mt-6 space-y-3">
            {service.deliverables.map((d) => (
              <li key={d} className="flex items-start gap-3">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{d}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border-2 border-brand-forest p-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Para quem é</h2>
          <p className="mt-4 text-lg leading-relaxed text-brand-forest">{service.forWho}</p>
          <Link
            to="/diagnostico"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-forest"
          >
            Quero este serviço <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="headline text-4xl text-brand-forest md:text-5xl">Como funciona</h2>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-brand-forest pt-6">
                <span className="text-4xl font-extrabold text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-extrabold uppercase text-brand-forest">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Outros serviços</h2>
        <div className="mt-8 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/servicos/$slug"
              params={{ slug: s.slug }}
              className="group flex items-start justify-between gap-4 bg-background p-7 transition-colors hover:bg-brand-forest"
            >
              <h3 className="max-w-[14ch] text-lg font-extrabold uppercase leading-tight text-brand-forest group-hover:text-primary-foreground">
                {s.name}
              </h3>
              <Shape kind={s.shape} color={s.color} className="w-6 shrink-0" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
