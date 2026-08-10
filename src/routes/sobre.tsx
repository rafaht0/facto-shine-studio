import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { Shape, type ShapeKind } from "@/components/site/Shape";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
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
}) {
  return (
    <div
      className="floating-shape pointer-events-auto absolute"
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

const memorias = [
  { year: "2009", label: "Fundação da Facto", src: "/memorias/2009-fundacao.jpeg" },
  { year: "2013", label: "Primeiro ENEJ", src: "/memorias/2013-enej.jpeg" },
  { year: "2014", label: "Primeiro Sábado Júnior", src: "/memorias/2014.jpeg" },
  { year: null, label: "Lei das EJs aprovada", src: "/Solenidade.jpeg" },
  { year: "2016", label: "Alto Crescimento", src: "/memorias/2016.jpeg" },
  { year: "2025", label: "HEPTA Impacto", src: "/memorias/2025.jpeg" },
];

const valores = [
  { title: "bora bora", text: "Estagnar significa perder oportunidades. Buscamos novos caminhos a cada projeto.", shape: "sparkle" as const, color: "var(--brand-amber)" },
  { title: "profissionalismo", text: "Mudar é necessário e faz parte de qualquer adaptação — evoluímos junto do mercado.", shape: "burst" as const, color: "var(--brand-magenta)" },
  { title: "identidade de manada", text: "Uma vivência empresarial mais constante, sustentável e saudável para o time.", shape: "flower" as const, color: "var(--brand-green)" },
  { title: "inquietação", text: "Projetos de alta qualidade entregues do começo ao fim, com método e transparência.", shape: "hex" as const, color: "var(--brand-lime)" },
];

function Sobre() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          <FloatingIcon kind="hex" color="var(--brand-green)" top="8%" left="72%" size="w-32" duration={7.5} delay={0.2} driftX={12} driftY={-20} rotate={6} />
          <FloatingIcon kind="hex" color="var(--brand-green)" top="2%" left="31%" size="w-20" duration={5.5} delay={0.2} driftX={12} driftY={-20} rotate={6} />
          <FloatingIcon kind="sparkle" color="var(--brand-amber)" top="12%" left="90%" size="w-14" duration={6.5} delay={1.4} driftX={-10} driftY={-16} rotate={12} />
          <FloatingIcon kind="burst" color="var(--brand-magenta)" top="55%" left="85%" size="w-16" duration={8} delay={0.5} driftX={10} driftY={-18} rotate={-8} />
          <FloatingIcon kind="burst" color="var(--brand-magenta)" top="55%" left="5%" size="w-16" duration={3} delay={0.5} driftX={10} driftY={-18} rotate={-8} />
          <FloatingIcon kind="blob" color="var(--brand-pink)" top="70%" left="65%" size="w-20" duration={7} delay={0.3} driftX={-12} driftY={-16} rotate={-6} />
          <FloatingIcon kind="star" color="var(--brand-orange)" top="10%" left="55%" size="w-14" duration={6} delay={0.9} driftX={10} driftY={-14} rotate={10} />
          <FloatingIcon kind="dot" color="var(--brand-red)" top="88%" left="30%" size="w-12" duration={5.5} delay={0.8} driftX={-8} driftY={-14} rotate={-10} />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20">
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
              src="/foto-cerimonia.jpeg"
              alt="Equipe da Facto reunida no Festival Curicaca"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/85 via-brand-forest/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <p className="absolute inset-x-6 bottom-6 translate-y-2 text-sm font-bold uppercase tracking-wide text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              Hepta impacto da maior manada da nação em 2025
            </p>
          </div>
        </div>
        <div className="grain relative overflow-hidden rounded-lg bg-primary p-10">
          <Shape kind="flower" color="var(--brand-lime)" className="pointer-events-none absolute -bottom-10 -right-6 w-56 opacity-30" />
          <p className="relative z-10 mb-4 text-xl font-bold uppercase tracking-widest text-brand-lime">
            Memórias da manada 
          </p>
          <Carousel setApi={setApi} opts={{ loop: true }} className="relative z-10">
            <CarouselContent>
              {memorias.map((m) => (
                <CarouselItem key={m.src}>
                  <div className="aspect-[3/4] overflow-hidden rounded-md border border-primary-foreground/15">
                    <img
                      src={m.src}
                      alt={m.label}
                      className="h-full w-full scale-125 object-cover object-[center_75%]"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 border-none bg-background/90 text-brand-forest hover:bg-background" />
            <CarouselNext className="right-2 border-none bg-background/90 text-brand-forest hover:bg-background" />
          </Carousel>

          <div className="relative z-10 mt-4 flex flex-wrap items-center gap-2">
            {memorias.map((m, i) => (
              <button
                key={m.src}
                type="button"
                onClick={() => api?.scrollTo(i)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                  i === current
                    ? "bg-brand-lime text-brand-forest"
                    : "bg-primary-foreground/10 text-primary-foreground/70 hover:bg-primary-foreground/20"
                }`}
              >
                {m.year ?? m.label}
              </button>
            ))}
          </div>
          <p className="relative z-10 mt-2 text-sm text-primary-foreground/80">{memorias[current]?.label}</p>
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
