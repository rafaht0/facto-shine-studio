import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Shape } from "@/components/site/Shape";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Quem somos — Facto Agência Júnior" },
      {
        name: "description",
        content:
          "Mais de uma década de história, aprimoramento constante e projetos de alta qualidade entregues aos nossos clientes.",
      },
      { property: "og:title", content: "Quem somos — Facto Agência Júnior" },
      {
        property: "og:description",
        content: "Conheça a história, os valores e o jeito Facto de fazer comunicação.",
      },
    ],
  }),
  component: Sobre,
});

const valores = [
  { title: "bora bora", text: "Estagnar significa perder oportunidades. Buscamos novos caminhos a cada projeto.", shape: "sparkle" as const, color: "var(--brand-amber)" },
  { title: "profissionalismo", text: "Mudar é necessário e faz parte de qualquer adaptação — evoluímos junto do mercado.", shape: "burst" as const, color: "var(--brand-magenta)" },
  { title: "identidade de manada", text: "Uma vivência empresarial mais constante, sustentável e saudável para o time.", shape: "flower" as const, color: "var(--brand-green)" },
  { title: "inquietação", text: "Projetos de alta qualidade entregues do começo ao fim, com método e transparência.", shape: "hex" as const, color: "var(--brand-lime)" },
];

function Sobre() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Quem somos</p>
          <h1 className="headline mt-4 max-w-4xl text-5xl text-brand-forest md:text-6xl">
            Uma década inovando a comunicação do mercado
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            A Facto tem mais de uma década de história e acredita que inovar a comunicação do mercado é essencial, já que
            estagnar significa perder oportunidades.
          </p>
          <p>
            Buscamos estar em constante aprimoramento, pois entendemos que mudar é necessário e faz parte de qualquer
            adaptação. O que nos move é alcançar uma vivência empresarial mais constante, de forma saudável e com
            projetos de alta qualidade entregues aos nossos clientes.
          </p>

          <div className="group relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border-2 border-brand-forest">
            <img
              src="/Manada%20no%20festival%20Curicaca.png"
              alt="Equipe da Facto reunida no Festival Curicaca"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/85 via-brand-forest/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="absolute inset-x-6 bottom-6 translate-y-2 text-sm font-bold uppercase tracking-wide text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              A manada no Festival Curicaca
            </p>
          </div>
        </div>
        <div className="grain relative min-h-64 overflow-hidden rounded-lg bg-primary">
          <Shape kind="flower" color="var(--brand-lime)" className="absolute -bottom-10 -right-6 w-56 opacity-80" />
          <Shape kind="sparkle" color="var(--brand-amber)" className="absolute left-8 top-8 w-16" />
          <p className="absolute bottom-8 left-8 max-w-[18ch] text-2xl font-extrabold uppercase leading-tight text-primary-foreground">
            Movidos por mudança
          </p>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h2 className="headline text-4xl text-brand-forest md:text-5xl">Nossos valores</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valores.map((v) => (
              <div key={v.title} className="border-t-2 border-brand-forest pt-6">
                <Shape kind={v.shape} color={v.color} className="w-8" />
                <h3 className="mt-5 text-lg font-extrabold uppercase text-brand-forest">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <Link
          to="/diagnostico"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-brand-forest"
        >
          Solicitar diagnóstico <ArrowRight className="size-4" />
        </Link>
      </section>
    </div>
  );
}
