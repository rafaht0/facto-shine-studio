import type { ShapeKind } from "@/components/site/Shape";

export type Caso = {
  slug: string;
  cliente: string;
  categoria: string;
  resultado: string;
  resumo: string;
  detalhes: string;
  entregaveis: string[];
  shape: ShapeKind;
  color: string;
  /** Caminho da imagem/capa do case em /public (ex.: "/projetos/mf-geologia.jpg"). Sem imagem, mostra a capa ilustrada. */
  image?: string;
  /** Fotos adicionais do projeto, exibidas na galeria da página de detalhe. */
  gallery?: string[];
};

export const casos: Caso[] = [
  {
    slug: "mf-geologia",
    cliente: "MF Geologia",
    categoria: "Gerenciamento + MIV",
    resultado: "Crescimento de x% nos seguidores no perfil e marca inconfundível no mercado",
    resumo: "Reposicionamento completo de marca, com novo território visual e tom de voz aplicados no Instagram.",
    detalhes:
      "A MF Geologia chegou até a Facto precisando de uma presença digital que refletisse a seriedade técnica da empresa sem perder a proximidade com o público. Reconstruímos a identidade visual das redes sociais, criamos uma linha editorial própria e assumimos a gestão mensal de conteúdo, sempre alinhados aos objetivos comerciais do cliente.",
    entregaveis: [
      "Manual de identidade visual aplicado às redes",
      "Linha editorial e pilares de conteúdo",
      "Produção mensal de artes e legendas",
      "Calendário de publicações",
      "Relatório mensal de desempenho",
    ],
    shape: "hex",
    color: "var(--brand-lime)",
  },
  {
    slug: "banco-do-brasil",
    cliente: "Banco do Brasil",
    categoria: "Gerenciamento de Mídias",
    resultado: "+85% de engajamento",
    resumo:
      "Criação do zero do perfil de Instagram do Projeto Rolê que Rende, uma iniciativa do BB para jovens adultos que estão iniciando sua vida financeira.",
    detalhes:
      "O Rolê que Rende nasceu como uma iniciativa do Banco do Brasil para aproximar educação financeira de jovens adultos. A Facto foi responsável por criar o perfil do zero: identidade visual, tom de voz e estratégia de conteúdo, buscando engajamento genuíno em um tema historicamente visto como distante ou complicado.",
    entregaveis: [
      "Estratégia de lançamento do perfil",
      "Identidade visual das peças e templates",
      "Produção de carrosséis, reels e artes estáticas",
      "Gestão de comunidade e respostas",
      "Acompanhamento de métricas de engajamento",
    ],
    shape: "sparkle",
    color: "var(--brand-blue)",
  },
  {
    slug: "cliente-exemplo-c",
    cliente: "Cliente exemplo C",
    categoria: "Arte Gráfica",
    resultado: "+40% de conversão",
    resumo: "Novo site institucional responsivo, com arquitetura de informação pensada para gerar leads qualificados.",
    detalhes:
      "Case de exemplo — substitua por um projeto real. Aqui entra o contexto do desafio do cliente, o que a Facto propôs e como o processo se desenrolou do briefing à entrega final.",
    entregaveis: [
      "Arquitetura de informação e wireframes",
      "Design de interface responsivo",
      "Desenvolvimento e publicação",
      "Otimização básica de SEO",
    ],
    shape: "flower",
    color: "var(--brand-forest)",
  },
  {
    slug: "cliente-exemplo-d",
    cliente: "Cliente exemplo D",
    categoria: "Tráfego Pago",
    resultado: "-30% custo por lead",
    resumo: "Estruturação e otimização contínua de campanhas pagas, com leitura de dados e ajustes de verba semanais.",
    detalhes:
      "Case de exemplo — substitua por um projeto real. Aqui entra o contexto do desafio do cliente, o que a Facto propôs e como o processo se desenrolou do briefing à entrega final.",
    entregaveis: [
      "Definição de objetivos e verba",
      "Estruturação de campanhas e públicos",
      "Criação de anúncios e copies",
      "Relatório de performance",
    ],
    shape: "star",
    color: "var(--brand-orange)",
  },
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);