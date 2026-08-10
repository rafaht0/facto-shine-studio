export type Service = {
  slug: string;
  name: string;
  short: string;
  color: string;
  shape: "star" | "burst" | "flower" | "hex" | "sparkle" | "blob" | "dot";
  intro: string;
  deliverables: string[];
  steps: { title: string; text: string }[];
  forWho: string;
};

export const services: Service[] = [
  {
    slug: "branding",
    name: "Branding",
    short: "Construa sua marca do zero e conquiste autoridade digital com bom custo-benefício.",
    color: "var(--brand-lime)",
    shape: "hex",
    intro:
      "",
    deliverables: [
      "Documento descritivo — explicação de todas as etapas da construção do Branding (.pdf)",
      "Brandbook — documento visual com as principais informações de cada etapa (.pdf)",
      "Manual de Identidade Visual — a identidade visual da marca e suas formas de aplicação (.pdf)",
      "Logos, vetores e tipografias — elementos desenvolvidos para a comunicação visual da marca (.png e .eps)",
    ],
    steps: [
      { title: "Diagnóstico", text: "Levantamento do momento atual da marca, do mercado e dos concorrentes para embasar as próximas etapas." },
      { title: "Posicionamento", text: "Definição de propósito, valores e proposta de valor que vão guiar toda a construção da marca." },
      { title: "Marca", text: "Criação do naming, conceito criativo e território visual e verbal da marca." },
      { title: "Experiência", text: "Desenho de como a marca se manifesta em cada ponto de contato com o público." },
      { title: "Brandbook", text: "Consolidação de tudo em um documento com as diretrizes principais da marca." },
    ],
    forWho: "Negócios que estão começando do zero e querem construir uma marca completa, com identidade própria e autoridade digital.",
  },
  {
    slug: "gerenciamento-de-midias",
    name: "Gerenciamento de Mídias",
    short: "Presença digital consistente, com pauta, arte e resultado.",
    color: "var(--brand-blue)",
    shape: "sparkle",
    intro:
      "",
    deliverables: [
      "Planejamento mensal de conteúdo",
      "Linha editorial e pilares de comunicação",
      "Criação de artes estáticas, carrosséis e reels",
      "Redação de legendas e hashtags",
      "Calendário de publicações",
      "Relatório mensal de desempenho",
    ],
    steps: [
      { title: "Reunião de imersão com o cliente ", text: "Encontro inicial com a equipe do projeto para compreender o negócio, os objetivos da marca e alinhar expectativas." },
      { title: "Plano de Comunicação", text: "Desenvolvimento do planejamento estratégico que orientará toda a comunicação nas redes sociais." },
      { title: "Moodboard", text: "Definição da direção visual e estética que guiará a identidade dos conteúdos." },
      { title: "Roteiro e Cronograma", text: "Estruturação das pautas, roteiros e organização do calendário de publicações mensalmente." },
      { title: "Produção Visual", text: "Criação dos materiais visuais e conteúdos que serão utilizados nas redes sociais." },
    ],
    forWho: "Marcas que já têm redes sociais, mas publicam sem estratégia — ou não conseguem manter constância.",
  },
  {
    slug: "manual-de-identidade-visual",
    name: "Manual de Identidade Visual",
    short: "Todas as regras da sua marca reunidas em um só documento.",
    color: "var(--brand-gray)",
    shape: "star",
    intro:
      "",
    deliverables: [
      "Construção e malha do logotipo",
      "Versões, reduções e usos indevidos",
      "Paleta cromática com códigos",
      "Tipografia e hierarquia",
      "Elementos gráficos e texturas",
      "Aplicações e mockups",
    ],
    steps: [
      { title: "Reunião de imersão com o cliente", text: "Encontro inicial para compreender a marca, seus valores, posicionamento e necessidades visuais." },
      { title: "Moodboard", text: "Construção da direção estética da marca, definindo referências visuais, estilo, cores e elementos que orientarão a identidade." },
      { title: "Produção do Manual de Identidade Visual", text: "Desenvolvimento do documento com as diretrizes de aplicação da marca, incluindo cores, tipografia, usos corretos do logotipo e orientações visuais." },
    ],
    forWho: "Marcas que querem definir toda a sua estrutura visual de maneira profissional",
  },
  {
    slug: "arte-grafica",
    name: "Arte Gráfica",
    short: "Peças visuais para todos os pontos de contato da sua marca.",
    color: "var(--brand-forest)",
    shape: "burst",
    intro:
      "",
    deliverables: [
      "Peças para redes sociais e campanhas",
      "Materiais impressos: cartões, folders e banners",
      "Apresentações institucionais e comerciais",
      "Templates editáveis para uso interno",
      "Adaptação de peças para múltiplos formatos",
      "Arquivos finais organizados e prontos para produção",
    ],
    steps: [
      { title: "Briefing", text: "Levantamento do objetivo da peça, público e prazo de entrega." },
      { title: "Direção", text: "Definição do conceito visual dentro da identidade da marca." },
      { title: "Produção", text: "Criação, ajustes e aprovação das artes com o cliente." },
      { title: "Entrega", text: "Exportação nos formatos certos e arquivos organizados para uso." },
    ],
    forWho: "Marcas que precisam de peças gráficas constantes e com qualidade, sem depender de um designer interno para cada demanda.",
  },
  {
    slug: "plano-de-comunicacao",
    name: "Plano de Comunicação",
    short: "Um mapa claro do que falar, onde falar e para quem.",
    color: "var(--brand-amber)",
    shape: "sparkle",
    intro:
      "",
    deliverables: [
      "Análise de cenário e SWOT de comunicação",
      "Mapeamento de públicos e personas",
      "Objetivos e metas mensuráveis",
      "Matriz de canais e mensagens-chave",
      "Cronograma de ações",
      "Indicadores de acompanhamento",
    ],
    steps: [
      { title: "Diagnóstico", text: "Análise da comunicação atual, presença digital e contexto de mercado." },
      { title: "Análise Estratégica", text: "Estudo de concorrência e identificação de oportunidades." },
      { title: "Definição de Posicionamento", text: "Construção da proposta de valor e diferenciação da marca" },
      { title: "Planejamento Estratégico", text: "Estruturação e entrega do plano de comunicação" },
    ],
    forWho: "Empresas que comunicam de forma reativa e querem previsibilidade e método.",
  },
  {
    slug: "consultoria-em-comunicacao",
    name: "Consultoria em Comunicação",
    short: "Aulas personalizadas para desenvolver a comunicação da sua equipe.",
    color: "var(--brand-pink)",
    shape: "flower",
    intro:
      "",
    deliverables: [
      "Diagnóstico e estudo das necessidades do cliente",
      "Plano de aulas personalizado, com dias e duração combinados",
      "Treinamentos em comunicação e marketing digital",
      "Aulas de peças gráficas e redação publicitária",
      "Conteúdo sobre produção de conteúdo",
      "Material de apoio para a equipe",
    ],
    steps: [
      { title: "Diagnóstico", text: "Estudo aprofundado das necessidades e do momento de comunicação do cliente." },
      { title: "Planejamento das Aulas", text: "Definição das pautas, duração e dias dos treinamentos, de acordo com o que foi identificado no diagnóstico." },
      { title: "Aulas Personalizadas", text: "Realização dos treinamentos, com conteúdo sob medida — de marketing digital a redação publicitária e produção de conteúdo." },
      { title: "Acompanhamento", text: "Suporte e ajustes de conteúdo ao longo do treinamento, conforme a evolução da equipe." },
    ],
    forWho: "Equipes e profissionais que querem desenvolver habilidades em comunicação, marketing digital, peças gráficas, redação publicitária ou produção de conteúdo, com um treinamento sob medida.",
  },
  {
    slug: "producao-de-website",
    name: "Produção de Website",
    short: "Sites rápidos, responsivos e com a cara da sua marca.",
    color: "var(--brand-forest)",
    shape: "flower",
    intro:
      "",
    deliverables: [
      "Arquitetura de informação e wireframes",
      "Design de interface responsivo",
      "Desenvolvimento e publicação",
      "Otimização básica de SEO",
      "Formulários e integrações",
      "Treinamento de uso",
    ],
    steps: [
      { title: "Reunião de imersão com o cliente", text: "Encontro inicial com a equipe do projeto para compreender o negócio, os objetivos da marca e alinhar expectativas para o desenvolvimento do site." },
      { title: "Plano de Comunicação", text: "Estruturação estratégica da comunicação que guiará o conteúdo e o posicionamento do site." },
      { title: "Moodboard", text: "Definição da direção visual e estética que orientará o design e a identidade do site." },
      { title: "Desenvolvimento do Site", text: "Criação do layout, estruturação das páginas e desenvolvimento técnico do site pela equipe de criação." },
    ],
    forWho: "Marcas sem site, ou com um site lento, desatualizado e que não converte.",
  },
  {
    slug: "trafego-pago",
    name: "Tráfego Pago",
    short: "Investimento em mídia com meta, acompanhamento e leitura de dados.",
    color: "var(--brand-orange)",
    shape: "star",
    intro:
      "",
    deliverables: [
      "Definição de objetivos e verba",
      "Estruturação de campanhas e públicos",
      "Criação de anúncios e copies",
      "Configuração de rastreamento",
      "Otimização contínua",
      "Relatório de performance",
    ],
    steps: [
      { title: "Reunião de imersão com o cliente", text: "Encontro inicial com a equipe do projeto para compreender o negócio, os objetivos da marca e alinhar expectativas." },
      { title: "Plano de Comunicação", text: "Definição da estratégia de comunicação e dos objetivos das campanhas." },
      { title: "Checklist estratégico", text: "Levantamento e organização das informações necessárias para a estruturação das campanhas." },
      { title: "Etapas de otimização", text: "Ajustes estratégicos, segmentação de público e melhoria de desempenho das campanhas." },
      { title: "Relatórios de Desempenho", text: "Envio de relatórios com análise de resultados e acompanhamento das campanhas ao longo do mês." },
    ],
    forWho: "Negócios que querem gerar demanda previsível e parar de depender só do alcance orgânico.",
  },
  {
    slug: "e-book",
    name: "E-book",
    short: "Material estratégico para apresentar serviços, portfólio ou conteúdo educativo.",
    color: "var(--brand-magenta)",
    shape: "blob",
    intro:
      "",
    deliverables: [
      "Estruturação estratégica do conteúdo",
      "Direção visual e moodboard exclusivos",
      "Design e diagramação completos do e-book",
      "Identidade visual alinhada à marca",
      "Entregas parciais por etapa",
      "Arquivo final pronto para publicação",
    ],
    steps: [
      { title: "Reunião de Imersão com o Cliente", text: "Encontro inicial para compreender os objetivos do material, público e conteúdo que será apresentado." },
      { title: "Moodboard", text: "Definição da direção visual e estética que orientará o design do e-book." },
      { title: "Desenvolvimento do Layout", text: "Criação do design e diagramação do e-book, garantindo clareza, organização visual e identidade alinhada à marca." },
    ],
    forWho: "Marcas que precisam de um material estruturado para apresentar serviços, projetos ou conteúdo educativo, e sentem falta de autoridade no mercado ou geração de leads consistente.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
