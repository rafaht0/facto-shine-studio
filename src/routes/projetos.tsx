import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Shape, type ShapeKind } from "@/components/site/Shape";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Nossos Projetos — Facto Agência Júnior" },
      {
        name: "description",
        content: "Cases de sucesso da Facto: projetos de branding, mídias sociais, sites e tráfego pago entregues para nossos clientes.",
      },
      { property: "og:title", content: "Nossos Projetos — Facto Agência Júnior" },
      {
        property: "og:description",
        content: "Conheça os cases de sucesso construídos pela Facto ao lado dos nossos clientes.",
      },
    ],
  }),
  component: Projetos,
});

type Caso = {
  cliente: string;
  categoria: string;
  resultado: string;
  resumo: string;
  shape: ShapeKind;
  color: string;
  /** Caminho da imagem/capa do case em /public (ex.: "/projetos/mf-geologia.jpg"). Sem imagem, mostra a capa ilustrada. */
  image?: string;
};

const casos: Caso[] = [
  {
    cliente: "MF Geologia",
    categoria: "Gerenciamento + MIV",
    resultado: "Crescimento de x% nos seguidores no perfil e marca inconfundível no mercado",
    resumo:
      "Reposicionamento completo de marca, com novo território visual e tom de voz aplicados no Instagram.",
    shape: "hex",
    color: "var(--brand-lime)",
  },
  {
    cliente: "Banco do Brasil",
    categoria: "Gerenciamento de Mídias",
    resultado: "+85% de engajamento",
    resumo:
      "Criação do zero do perfil de Instagram do Projeto Rolê que Rende, uma iniciativa do BB para jovens adultos que estão iniciando sua vida financeira.",
    shape: "sparkle",
    color: "var(--brand-blue)",
  },
  {
    cliente: "Cliente exemplo C",
    categoria: "Arte Gráfica",
    resultado: "+40% de conversão",
    resumo: "Novo site institucional responsivo, com arquitetura de informação pensada para gerar leads qualificados.",
    shape: "flower",
    color: "var(--brand-forest)",
  },
  {
    cliente: "Cliente exemplo D",
    categoria: "Tráfego Pago",
    resultado: "-30% custo por lead",
    resumo: "Estruturação e otimização contínua de campanhas pagas, com leitura de dados e ajustes de verba semanais.",
    shape: "star",
    color: "var(--brand-orange)",
  },
];

function CaseCard({ c }: { c: Caso }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border-2 border-brand-forest bg-background transition-transform duration-300 hover:-translate-y-1.5">
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ backgroundColor: `color-mix(in oklab, ${c.color} 24%, var(--background))` }}
      >
        {c.image ? (
          <img
            src={c.image}
            alt={`Case ${c.cliente}`}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        ) : (
          <div className="grain flex h-full items-center justify-center">
            <Shape
              kind={c.shape}
              color={c.color}
              className="w-24 opacity-70 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-12"
            />
          </div>
        )}

        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-brand-forest backdrop-blur">
          {c.categoria}
        </span>

        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-brand-forest/90 via-brand-forest/10 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-[11px] font-bold uppercase tracking-widest text-brand-lime">Resultado</p>
            <p className="mt-1 text-base font-extrabold leading-snug text-primary-foreground">{c.resultado}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-extrabold uppercase leading-tight text-brand-forest">{c.cliente}</h3>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">{c.resumo}</p>
      </div>
    </div>
  );
}

function Projetos() {
  const categorias = useMemo(() => ["Todos", ...Array.from(new Set(casos.map((c) => c.categoria)))], []);
  const [filtro, setFiltro] = useState("Todos");
  const filtrados = filtro === "Todos" ? casos : casos.filter((c) => c.categoria === filtro);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <img
          src="/elefante-projetos.png"
          alt=""
          aria-hidden="true"
          className="gentle-sway pointer-events-none absolute -top-2 right-4 hidden w-32 md:block md:right-8 md:w-44 lg:right-16 lg:w-56"
        />
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="text-xs font-bold uppercase tracking-widest text-primary">Nossos Projetos</p>
          <h1 className="headline mt-4 max-w-3xl text-5xl text-brand-forest md:text-6xl">
            Nossos cases falam por nós!
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Uma seleção de projetos de empresas que passaram pelas mesmas dificuldades que seu negócio está enfrentando.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="mb-10 flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFiltro(cat)}
              className={`rounded-full border-2 px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                filtro === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((c) => (
            <CaseCard key={c.cliente} c={c} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24">
        <div className="grain relative overflow-hidden rounded-lg bg-primary px-8 py-16 text-center md:px-16">
          <h2 className="headline relative z-10 text-4xl text-primary-foreground md:text-5xl">
            Quer ser o próximo case de sucesso?
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
