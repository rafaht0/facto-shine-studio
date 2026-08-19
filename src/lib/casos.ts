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
    resultado: "Crescimento nos seguidores no perfil e marca inconfundível no mercado",
    resumo: "Reposicionamento completo de marca, com novo território visual e tom de voz aplicados no Instagram.",
    detalhes:
      "A MF Geologia chegou até a Facto precisando de uma presença digital que refletisse a seriedade técnica da empresa sem perder a proximidade com o público. Reconstruímos a identidade visual das redes sociais, criamos uma linha editorial própria e assumimos a gestão mensal de conteúdo, sempre alinhados aos objetivos comerciais do cliente.",
    entregaveis: [
      "Manual de identidade visual aplicado às redes",
      "Logo da marca",
      "Linha editorial e pilares de conteúdo",
      "Produção mensal de artes e legendas",
      "Calendário de publicações",
      "Relatório mensal de desempenho",
    ],
    shape: "hex",
    color: "var(--brand-lime)",
    image: "/projetos/mf-geologia/logo-capa.png",
    gallery: [
      "/projetos/mf-geologia/logo-capa.png",
      "/projetos/mf-geologia/adesivos.png",
      "/projetos/mf-geologia/pasta.png",
      "/projetos/mf-geologia/cartoes.png",
      "/projetos/mf-geologia/celular.png",
      "/projetos/mf-geologia/crachas.png",
      "/projetos/mf-geologia/copos.png",
      "/projetos/mf-geologia/bones.png",
    ],
  },
  {
    slug: "fap-guardanapos",
    cliente: "FAP Guardanapos",
    categoria: "MIV",
    resultado: "Renovação da logo, cores, tipografia e artes aplicáveis com a cara da marca.",
    resumo: "Reposicionamento estético completo de marca, com novo território visual no nosso manual.",
    detalhes:
      "Foi desenvolvido um Manual de Identidade Visual para a FAP Guardanapos, com renovação da logo, cores, tipografia e elementos gráficos. O projeto também definiu padrões de aplicação da marca, garantindo mais consistência, reconhecimento e unidade visual.",
    entregaveis: [
      "Documdnto de Manual de identidade visual",
      "Nova Logo",
      "Cores institucionais e auxiliares",
      "Aplicações corretas e incorretas",
      "Elementos visuais para a marca",
    ],
    shape: "blob",
    color: "var(--brand-green)",
    image: "/projetos/fap-guardanapos/badge.png",
    gallery: [
      "/projetos/fap-guardanapos/badge.png",
      "/projetos/fap-guardanapos/padrao.png",
      "/projetos/fap-guardanapos/elementos-grade.png",
    ],
  },
  {
    slug: "banco-do-brasil",
    cliente: "Banco do Brasil",
    categoria: "Gerenciamento de Mídias",
    resultado: "Aumento de engajamento e atividade frequente no perfil",
    resumo:
      "Estabelecimento de frequência de postagens no perfil de Instagram do Projeto Rolê que Rende, uma iniciativa do BB para jovens adultos que estão iniciando sua vida financeira.",
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
    image: "/projetos/banco-do-brasil/banco-do-brasil-vector-logo.png",
    gallery: [
      "/projetos/banco-do-brasil/banco-do-brasil-vector-logo.png",
      "/projetos/banco-do-brasil/feed-bb.jpeg",
      "/projetos/banco-do-brasil/post-1.jpg",
      "/projetos/banco-do-brasil/post-2.png",
    ],
  },
  {
    slug: "advocatta",
    cliente: "AdvocattA",
    categoria: "Arte Gráfica",
    resultado: "Camiseta personalizada para a EJ, transmitindo a persionalidade da empresa em qualquer lugar",
    resumo: "Desenvolvimento de arte gráfica para camiseta da AdvocattA, unindo a identidade da marca a uma composição visual marcante e contemporânea.",
    detalhes:
      "A proposta foi criar uma camiseta com forte presença visual, equilibrando identidade institucional e linguagem criativa. A composição trabalha a aplicação da marca na parte frontal e nas mangas, enquanto as costas recebem uma estampa de maior impacto, protagonizada pela ilustração da arara-azul e por elementos gráficos que reforçam o conceito da peça. Todo o conjunto foi pensado considerando hierarquia visual, contraste, composição e aplicação sobre o tecido, garantindo unidade entre frente, costas e detalhes da camiseta.",
    entregaveis: [
      "Desenvolvimento do conceito visual da camiseta",
      "Criação e composição da estampa traseira",
      "Tratamento e aplicação da ilustração da arara-azul",
      "Composição tipográfica da peça",
      "Aplicação da identidade visual na parte frontal",
      "Aplicação de elementos gráficos e marcas nas mangas",
      "Definição da disposição dos elementos na camiseta",
      "Mockup de apresentação da peça",
    ],
    shape: "flower",
    color: "var(--brand-forest)",
    image: "/projetos/advocatta/camiseta-mockup.jpg",
  },
];

export const getCaso = (slug: string) => casos.find((c) => c.slug === slug);