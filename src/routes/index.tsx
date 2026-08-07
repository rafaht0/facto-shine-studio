import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services";
import { Shape, type ShapeKind } from "@/components/site/Shape";

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
        className={`${size} cursor-pointer transition-transform duration-300 ease-out hover:scale-125 hover:-rotate-12`}
      />
    </div>
  );
}

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Facto Agência Júnior de Comunicação" },
      {
        name: "description",
        content:
          "Há mais de uma década inovando a comunicação do mercado. Branding, mídias sociais, sites, tráfego pago e consultoria.",
      },
      { property: "og:title", content: "Facto Agência Júnior de Comunicação" },
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
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden md:block">
          <FloatingIcon kind="hex" color="var(--brand-green)" top="4%" left="66%" size="w-40" duration={7.5} delay={0.2} driftX={12} driftY={-20} rotate={6} />
          <FloatingIcon kind="hex" color="var(--brand-green)" top="67%" left="55%" size="w-40" duration={7.5} delay={0.2} driftX={12} driftY={-20} rotate={6} />
          <FloatingIcon kind="dot" color="var(--brand-red)" top="1%" left="18%" size="w-14" duration={5.5} delay={0.8} driftX={-8} driftY={-14} rotate={-10} />
          <FloatingIcon kind="sparkle" color="var(--brand-amber)" top="20%" left="88%" size="w-16" duration={6.5} delay={1.4} driftX={-10} driftY={-16} rotate={12} />
          <FloatingIcon kind="sparkle" color="var(--brand-amber)" top="47%" left="76%" size="w-16" duration={6.5} delay={1.4} driftX={-10} driftY={-16} rotate={12} />
          <FloatingIcon kind="burst" color="var(--brand-magenta)" top="34%" left="7%" size="w-16" duration={8} delay={0.5} driftX={10} driftY={-18} rotate={-8} />
          <FloatingIcon kind="burst" color="var(--brand-magenta)" top="50%" left="50%" size="w-16" duration={8} delay={0.5} driftX={10} driftY={-18} rotate={-8} />
          <FloatingIcon kind="spark" color="var(--brand-blue)" top="48%" left="62%" size="w-14" duration={5} delay={1.1} driftX={8} driftY={-20} rotate={14} />
          <FloatingIcon kind="blob" color="var(--brand-pink)" top="62%" left="90%" size="w-20" duration={7} delay={0.3} driftX={-12} driftY={-16} rotate={-6} />
          <FloatingIcon kind="blob" color="var(--brand-pink)" top="32%" left="67%" size="w-20" duration={7} delay={0.3} driftX={-12} driftY={-16} rotate={-6} />
          <FloatingIcon kind="star" color="var(--brand-orange)" top="78%" left="72%" size="w-16" duration={6} delay={0.9} driftX={10} driftY={-14} rotate={10} />
          <FloatingIcon kind="flower" color="var(--brand-forest)" top="70%" left="5%" size="w-14" duration={7} delay={1.6} driftX={-9} driftY={-18} rotate={8} />
        </div>

        <div className="pointer-events-none relative z-10 mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.35fr_1fr] md:py-28">
          <div>
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
              <span className="size-2 rounded-full bg-brand-lime" />
              impacto no mercado júnior e sênior há mais de uma década
            </p>
            <h1 className="headline text-5xl uppercase text-brand-forest sm:text-6xl md:text-7xl">
              Comunicação é com a maior
              <br />
              <span className="text-primary">manada da nação.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              A Facto não é somente mais uma agência de comunicação, com posicionamento, construção de marca e direcionamento de crescimento, temos tudo que você precisa para elevar sua comuniação a outro nível 
            </p>
            <div className="pointer-events-auto mt-9 flex flex-wrap gap-3">
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
                  <Shape
                    kind={s.shape}
                    color={s.color}
                    className="w-3.5 cursor-pointer transition-transform duration-300 ease-out hover:scale-150 hover:rotate-12"
                  />
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
  A Facto é uma empresa de comunicação estratégica formada pela integração de diferentes áreas da comunicação:
</p>

<div className="bg-green-900 p-6 rounded-xl my-6">
  <ul className="text-white font-bold space-y-2">
    <li> . COMUNICAÇÃO ORGANIZACIONAL</li>
    <li> . PUBLICIDADE E PROPAGANDA</li>
    <li> . JORNALISMO</li>
    <li> . AUDIOVISUAL</li>
  </ul>
</div>

<p>
  Buscamos estar em constante aprimoramento, pois entendemos que mudar é necessário e faz parte de qualquer
  adaptação. O que nos move é alcançar uma vivência empresarial mais constante, de forma saudável e com
  projetos de alta qualidade entregues aos nossos clientes.
</p>

<Link
  to="/sobre"
  className="inline-flex items-center gap-2 font-bold text-primary hover:underline"
>
  Conheça a Facto <ArrowRight className="size-4" />
</Link>
</div>
</div>

        <div className="group relative mr-auto -mt-100 aspect-square w-full max-w-md overflow-hidden rounded-2xl border-2 border-brand-forest">
          <img
            src="/Manada%20no%20festival%20Curicaca.png"
            alt="Equipe da Facto reunida no Festival Curicaca"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest/85 via-brand-forest/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <p className="absolute inset-x-6 bottom-6 translate-y-2 text-sm font-bold uppercase tracking-wide text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            A manada no Concentra 
            <br />
            (Encontro das Empresas Juniores do DF)
          </p>
        </div>
</section>

      <section
        className="grain relative overflow-hidden border-y border-border"
        style={{ backgroundColor: "color-mix(in oklab, var(--brand-green) 65%, var(--brand-forest))" }}
      >
        <div className="relative z-10 mx-auto max-w-6xl px-5 py-20">
          <h2 className="headline text-4xl text-white md:text-5xl">O que fazemos</h2>
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
                  <Shape
                    kind={s.shape}
                    color={s.color}
                    className="w-8 shrink-0 cursor-pointer transition-transform duration-300 ease-out hover:scale-125 group-hover:rotate-45"
                  />
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
