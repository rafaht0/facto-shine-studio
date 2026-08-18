import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { casos, getCaso } from "@/lib/casos";
import { Shape, type ShapeKind } from "@/components/site/Shape";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { PhoneMockup } from "@/components/PhoneMockup";

/** Ordem de formas usada para variar as fotos ilustrativas de exemplo (sem foto real ainda). */
const SHAPE_KINDS: ShapeKind[] = ["hex", "sparkle", "blob", "star", "burst", "flower", "dot", "spark"];

function placeholderSlides(startKind: ShapeKind, color: string, count = 3) {
  const startIndex = SHAPE_KINDS.indexOf(startKind);
  return Array.from({ length: count }, (_, i) => ({
    kind: SHAPE_KINDS[(startIndex + i) % SHAPE_KINDS.length]!,
    color,
  }));
}

type Slide = { src?: string; kind?: ShapeKind; color: string };

/** Publicações do Instagram do Rolê que Rende (BB) usadas no mockup de celular com scroll automático. */
const bbInstagramPosts = [
  "/projetos/banco-do-brasil/post-1.jpg",
  "/projetos/banco-do-brasil/post-2.png",
  "/projetos/banco-do-brasil/instagram-1.jpg",
  "/projetos/banco-do-brasil/instagram-2.jpg",
  "/projetos/banco-do-brasil/instagram-3.jpg",
  "/projetos/banco-do-brasil/instagram-4.jpg",
];

function GalleryCarousel({ slides, alt }: { slides: Slide[]; alt: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api || paused) return;
    const id = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(id);
  }, [api, paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <Carousel setApi={setApi} opts={{ loop: true }} className="relative">
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="aspect-video overflow-hidden rounded-2xl border-2 border-brand-forest">
                {s.src ? (
                  <img src={s.src} alt={`${alt} — foto ${i + 1}`} className="h-full w-full object-cover" />
                ) : (
                  <div
                    className="grain flex h-full items-center justify-center"
                    style={{ backgroundColor: `color-mix(in oklab, ${s.color} 22%, var(--background))` }}
                  >
                    <Shape kind={s.kind!} color={s.color} className={`w-28 opacity-70 ${i % 2 === 1 ? "rotate-12" : ""}`} />
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 border-none bg-background/90 text-brand-forest hover:bg-background" />
        <CarouselNext className="right-2 border-none bg-background/90 text-brand-forest hover:bg-background" />
      </Carousel>
    </div>
  );
}

function FloatingIcon({
  kind,
  color,
  top,
  left,
  size,
  duration = 6,
  delay = 0,
  driftX = 10,
  driftY = -18,
  rotate = 8,
  wrapperClassName = "",
}: {
  kind: ShapeKind;
  color: string;
  top: string;
  left: string;
  size: string;
  duration?: number;
  delay?: number;
  driftX?: number;
  driftY?: number;
  rotate?: number;
  /** Classes extras no wrapper — usadas para esconder o ícone em telas pequenas quando ele cairia em cima do texto. */
  wrapperClassName?: string;
}) {
  return (
    <div
      className={`floating-shape pointer-events-auto absolute ${wrapperClassName}`}
      style={
        {
          top,
          left,
          "--float-duration": `${duration}s`,
          "--float-delay": `${delay}s`,
          "--float-x": `${driftX}px`,
          "--float-y": `${driftY}px`,
          "--float-rot": `${rotate}deg`,
        } as CSSProperties
      }
    >
      <Shape
        kind={kind}
        color={color}
        className={`${size} cursor-pointer transition-all duration-300 ease-out hover:scale-125 hover:-translate-y-3 hover:rotate-12`}
      />
    </div>
  );
}

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }) => {
    if (!getCaso(params.slug)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const caso = getCaso(params.slug);
    if (!caso) {
      return { meta: [{ title: "Projeto não encontrado — Facto" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${caso.cliente} — Facto Agência Júnior`;
    return {
      meta: [
        { title },
        { name: "description", content: caso.resumo },
        { property: "og:title", content: title },
        { property: "og:description", content: caso.resumo },
      ],
    };
  },
  component: ProjetoDetalhe,
});

function ProjetoDetalhe() {
  const { slug } = Route.useParams();
  const caso = getCaso(slug)!;
  const outros = casos.filter((c) => c.slug !== caso.slug);

  const tint = (pct: number) => `color-mix(in oklab, ${caso.color} ${pct}%, var(--background))`;
  const gallery = caso.gallery?.length ? caso.gallery : caso.image ? [caso.image] : [];
  const slides: Slide[] =
    gallery.length > 0
      ? gallery.map((src) => ({ src, color: caso.color }))
      : placeholderSlides(caso.shape, caso.color);

  return (
    <div>
      <section className="relative overflow-hidden border-b-2 border-brand-forest" style={{ backgroundColor: tint(20) }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <FloatingIcon kind={caso.shape} color={caso.color} top="8%" left="84%" size="w-10 md:w-28" duration={7} delay={0.2} driftX={12} driftY={-18} rotate={8} />
          <FloatingIcon kind="sparkle" color="var(--brand-amber)" top="14%" left="94%" size="w-8 md:w-12" duration={6} delay={1.1} driftX={-10} driftY={-14} rotate={12} />
          <FloatingIcon kind="dot" color="var(--brand-red)" top="60%" left="90%" size="w-6 md:w-10" duration={5.5} delay={0.6} driftX={-8} driftY={-14} rotate={-10} />

          {/* aparecem a partir do tablet: em telas menores cairiam sobre o resumo/título */}
          <FloatingIcon wrapperClassName="hidden sm:block" kind="burst" color="var(--brand-magenta)" top="75%" left="68%" size="w-16" duration={8} delay={0.4} driftX={10} driftY={-18} rotate={-8} />
          <FloatingIcon wrapperClassName="hidden sm:block" kind="star" color="var(--brand-orange)" top="18%" left="58%" size="w-12" duration={6.5} delay={0.9} driftX={10} driftY={-14} rotate={10} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20">
          <Link
            to="/projetos"
            className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary-foreground"
          >
            <ArrowLeft className="size-4" /> Todos os projetos
          </Link>

          <p className="mt-10 text-xs font-bold uppercase tracking-widest text-brand-forest">{caso.categoria}</p>
          <h1 className="headline mt-4 max-w-3xl text-4xl text-brand-forest sm:text-5xl md:text-7xl">{caso.cliente}</h1>
          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-brand-forest/85">{caso.resumo}</p>

          <div className="mt-8 inline-flex flex-col gap-1 rounded-lg border-2 border-brand-forest bg-background/70 px-6 py-4 backdrop-blur">
            <span className="text-[11px] font-bold uppercase tracking-widest text-primary">Resultado</span>
            <span className="text-lg font-extrabold text-brand-forest">{caso.resultado}</span>
          </div>
        </div>
      </section>

      {caso.slug !== "banco-do-brasil" && caso.slug !== "cliente-exemplo-c" && (
        <section className="mx-auto max-w-6xl px-5 py-20">
          <GalleryCarousel slides={slides} alt={caso.cliente} />
        </section>
      )}

      {caso.slug === "cliente-exemplo-c" && (
        <section className="mx-auto flex max-w-6xl justify-center px-5 py-20">
          <img
            src="/projetos/cliente-exemplo-c/camiseta-mockup.jpg"
            alt="Mockup de camiseta com estampa desenvolvida pela Facto"
            className="elephant-idle w-full max-w-2xl rounded-2xl border-2 border-brand-forest shadow-xl transition-transform duration-300 ease-out hover:scale-[1.02] hover:-rotate-1"
          />
        </section>
      )}

      {caso.slug === "banco-do-brasil" && (
        <section style={{ backgroundColor: tint(10) }}>
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 md:grid-cols-2">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Gerenciamento de Mídias</h2>
              <h3 className="headline mt-4 text-3xl text-brand-forest md:text-4xl">O feed em movimento</h3>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Da estratégia à arte final: veja como as publicações do Rolê que Rende ganham vida no feed,
                unindo bom humor e educação financeira em cada card.
              </p>
            </div>
            <PhoneMockup images={bbInstagramPosts} />
          </div>
        </section>
      )}

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">O que fizemos</h2>
            <ul className="mt-6 space-y-3">
              {caso.entregaveis.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-brand-forest" />
                  <span className="text-brand-forest/80">{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Sobre o projeto</h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{caso.detalhes}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-xs font-bold uppercase tracking-widest text-primary">Outros projetos</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {outros.map((c) => (
            <Link
              key={c.slug}
              to="/projetos/$slug"
              params={{ slug: c.slug }}
              className="group flex items-start justify-between gap-4 rounded-lg border-2 border-brand-forest p-7 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: `color-mix(in oklab, ${c.color} 22%, var(--background))` }}
            >
              <div>
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-forest/70">{c.categoria}</p>
                <h3 className="mt-1 max-w-[16ch] text-lg font-extrabold uppercase leading-tight text-brand-forest">{c.cliente}</h3>
              </div>
              <ArrowUpRight className="size-5 shrink-0 text-brand-forest transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
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