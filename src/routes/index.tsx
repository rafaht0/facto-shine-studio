import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Shape } from "@/components/site/Shape";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Facto — Agência Júnior de Comunicação" },
      {
        name: "description",
        content:
          "Há mais de uma década inovando a comunicação do mercado. Branding, mídias sociais, sites, tráfego pago e consultoria.",
      },
      { property: "og:title", content: "Facto — Agência Júnior de Comunicação" },
      {
        property: "og:description",
        content: "Branding, mídias sociais, sites, tráfego pago e consultoria para marcas que não querem estagnar.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.35fr_1fr] md:py-28">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="size-2 rounded-full bg-brand-lime" />
              Mais de uma década de história
            </p>
            <h1 className="headline text-5xl text-brand-forest sm:text-6xl md:text-7xl">
              Comunicação que
              <br />
              <span className="text-primary">não estagna.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Facto é uma agência júnior de comunicação. Inovar a comunicação do mercado é essencial — porque estagnar
              significa perder oportunidades.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/diagnostico"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-forest"
              >
                Solicitar diagnóstico <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/servicos"
                className="inline-flex items-center gap-2 rounded-full border-2 border-brand-forest px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-brand-forest transition-colors hover:bg-brand-forest hover:text-primary-foreground"
              >
                Ver serviços
              </Link>
            </div>
          </div>

          <div className="relative hidden md:block">
            <Shape kind="hex" color="var(--brand-green)" className="absolute right-6 top-0 w-44" />
            <Shape kind="sparkle" color="var(--brand-amber)" className="absolute bottom-24 right-40 w-24" />
            <Shape kind="dot" color="var(--brand-red)" className="absolute bottom-6 right-16 w-16" />
            <Shape kind="blob" color="var(--brand-pink)" className="absolute bottom-40 right-0 w-20" />
            <Shape kind="flower" color="var(--brand-forest)" className="absolute left-2 top-32 w-14" />
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-b border-border bg-brand-forest py-4">
        <div className="marquee-track whitespace-nowrap">
          {[0, 1].map((i) => (
            <span key={i} className="flex items-center">
              {services.map((s) => (
                <span key={s.slug} className="flex items-center">
                  <span className="px-6 text-sm font-bold uppercase tracking-widest text-primary-foreground">
                    {s.name}
                  </span>
                  <Shape kind={s.shape} color={s.color} className="w-3.5" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <h2 className="headline text-4xl text-primary md:text-5xl">Quem somos</h2>
          <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              A Facto tem mais de uma década de história e acredita que inovar a comunicação do mercado é essencial, já
              que estagnar significa perder oportunidades.
            </p>
            <p>
              Buscamos estar em constante aprimoramento, pois entendemos que mudar é necessário e faz parte de qualquer
              adaptação. O que nos move é alcançar uma vivência empresarial mais constante, de forma saudável e com
              projetos de alta qualidade entregues aos nossos clientes.
            </p>
            <Link to="/sobre" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
              Conheça a Facto <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="headline text-4xl text-brand-forest md:text-5xl">O que fazemos</h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to="/servicos/$slug"
                params={{ slug: s.slug }}
                className="group flex flex-col justify-between gap-8 bg-background p-8 transition-colors hover:bg-brand-forest"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="max-w-[14ch] text-xl font-extrabold uppercase leading-tight text-brand-forest transition-colors group-hover:text-primary-foreground">
                    {s.name}
                  </h3>
                  <Shape kind={s.shape} color={s.color} className="w-8 shrink-0 transition-transform group-hover:rotate-45" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/75">
                  {s.short}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grain relative overflow-hidden rounded-lg bg-primary px-8 py-16 text-center md:px-16">
          <h2 className="headline relative z-10 text-4xl text-primary-foreground md:text-5xl">
            Vamos olhar para a sua comunicação?
          </h2>
          <p className="relative z-10 mx-auto mt-5 max-w-xl text-primary-foreground/85">
            Preencha o formulário de diagnóstico e nosso time entra em contato para entender o momento do seu negócio.
          </p>
          <Link
            to="/diagnostico"
            className="relative z-10 mt-9 inline-flex items-center gap-2 rounded-full bg-brand-lime px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-forest transition-transform hover:scale-105"
          >
            Solicitar diagnóstico <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
