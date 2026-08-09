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
    short: "Posicionamento, propósito e uma marca que as pessoas reconhecem.",
    color: "var(--brand-lime)",
    shape: "hex",
    intro:
      "",
    deliverables: [
      "Diagnóstico de marca e do mercado",
      "Propósito, missão, visão e valores",
      "Posicionamento e proposta de valor",
      "Arquétipos e tom de voz",
      "Naming e territórios criativos",
      "Documento estratégico de marca",
    ],
    steps: [
      { title: "Imersão", text: "Entrevistas com sócios e time, análise de concorrentes e escuta do público." },
      { title: "Estratégia", text: "Definição de posicionamento, propósito e diferenciais competitivos." },
      { title: "Expressão", text: "Tradução da estratégia em tom de voz, conceito e direcionamento visual." },
      { title: "Entrega", text: "Apresentação, documento final e plano de ativação da marca." },
    ],
    forWho: "Negócios em fase de criação, reposicionamento ou expansão que precisam de clareza sobre a própria identidade.",
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
      { title: "Conceito", text: "Definição do conceito visual a partir da estratégia da marca." },
      { title: "Desenho", text: "Criação ou refinamento do logotipo e do sistema visual." },
      { title: "Sistematização", text: "Regras de uso, grid, cores, tipografia e elementos de apoio." },
      { title: "Manual", text: "Diagramação do documento final e entrega dos arquivos abertos." },
    ],
    forWho: "Marcas que já têm um logotipo, mas não têm padrão — e cada peça sai com uma cara diferente.",
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
    short: "Um olhar externo, técnico e honesto sobre a sua comunicação.",
    color: "var(--brand-pink)",
    shape: "flower",
    intro:
      "",
    deliverables: [
      "Auditoria dos canais e materiais atuais",
      "Benchmark de concorrentes",
      "Diagnóstico com pontos críticos",
      "Recomendações priorizadas",
      "Reunião de devolutiva",
      "Relatório final consolidado",
    ],
    steps: [
      { title: "Escuta", text: "Conversa com o time e entendimento do momento do negócio." },
      { title: "Auditoria", text: "Análise técnica de canais, materiais e narrativa da marca." },
      { title: "Diagnóstico", text: "Consolidação dos achados em pontos críticos e oportunidades." },
      { title: "Devolutiva", text: "Apresentação das recomendações com plano de prioridades." },
    ],
    forWho: "Gestores que sentem que algo não funciona na comunicação, mas não sabem exatamente o quê.",
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
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
