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
      "Construímos a base estratégica da sua marca: quem ela é, para quem fala e por que deveria ser lembrada. Do diagnóstico ao território verbal e visual, entregamos uma marca coerente em todos os pontos de contato.",
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
      "Cuidamos das redes sociais da sua marca de ponta a ponta: planejamento de conteúdo, produção de artes e legendas, publicação e leitura de métricas. Presença constante, com propósito e não por acaso.",
    deliverables: [
      "Planejamento mensal de conteúdo",
      "Linha editorial e pilares de comunicação",
      "Criação de artes estáticas, carrosséis e reels",
      "Redação de legendas e hashtags",
      "Calendário de publicações",
      "Relatório mensal de desempenho",
    ],
    steps: [
      { title: "Diagnóstico", text: "Análise dos perfis atuais, do público e da concorrência digital." },
      { title: "Planejamento", text: "Definição de pilares, formatos e frequência de publicação." },
      { title: "Produção", text: "Criação das peças, revisão e aprovação com o cliente." },
      { title: "Análise", text: "Acompanhamento das métricas e ajuste da rota a cada ciclo." },
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
      "O MIV é o guia definitivo da sua marca: logo, cores, tipografia, elementos gráficos e aplicações. Um documento que garante que a marca seja aplicada do mesmo jeito por qualquer pessoa, em qualquer lugar.",
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
      "Criamos as artes que colocam sua marca em movimento no dia a dia: do digital ao impresso. Cada peça nasce alinhada à identidade visual, com hierarquia clara e acabamento profissional — sem depender de retrabalho ou improviso.",
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
      "Estruturamos a comunicação da sua empresa em um plano concreto, com objetivos, públicos, canais, mensagens e indicadores. Menos achismo, mais direção.",
    deliverables: [
      "Análise de cenário e SWOT de comunicação",
      "Mapeamento de públicos e personas",
      "Objetivos e metas mensuráveis",
      "Matriz de canais e mensagens-chave",
      "Cronograma de ações",
      "Indicadores de acompanhamento",
    ],
    steps: [
      { title: "Coleta", text: "Levantamento de dados internos, históricos e percepções do público." },
      { title: "Diagnóstico", text: "Identificação de gargalos e oportunidades de comunicação." },
      { title: "Construção", text: "Definição de objetivos, canais, mensagens e cronograma." },
      { title: "Apresentação", text: "Entrega do plano com prioridades e próximos passos." },
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
      "Analisamos como sua marca se comunica hoje e apontamos, com clareza, o que manter, o que ajustar e o que abandonar. Ideal para quem precisa de direção antes de investir.",
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
      "Projetamos e desenvolvemos sites institucionais e landing pages pensados para conversão: arquitetura clara, design alinhado à identidade e performance em qualquer tela.",
    deliverables: [
      "Arquitetura de informação e wireframes",
      "Design de interface responsivo",
      "Desenvolvimento e publicação",
      "Otimização básica de SEO",
      "Formulários e integrações",
      "Treinamento de uso",
    ],
    steps: [
      { title: "Briefing", text: "Objetivos do site, público e referências visuais." },
      { title: "Estrutura", text: "Mapa de páginas, conteúdo e wireframes aprovados." },
      { title: "Design", text: "Interface aplicando a identidade visual da marca." },
      { title: "Publicação", text: "Desenvolvimento, testes, ajustes finais e go live." },
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
      "Planejamos, configuramos e otimizamos campanhas pagas para levar sua marca às pessoas certas. Cada real investido é acompanhado por dados e por relatórios que você entende.",
    deliverables: [
      "Definição de objetivos e verba",
      "Estruturação de campanhas e públicos",
      "Criação de anúncios e copies",
      "Configuração de rastreamento",
      "Otimização contínua",
      "Relatório de performance",
    ],
    steps: [
      { title: "Planejamento", text: "Objetivo da campanha, público-alvo e definição de verba." },
      { title: "Setup", text: "Criação das campanhas, segmentações e criativos." },
      { title: "Otimização", text: "Testes, ajustes de lance e realocação de investimento." },
      { title: "Relatório", text: "Leitura dos resultados e recomendações para o próximo ciclo." },
    ],
    forWho: "Negócios que querem gerar demanda previsível e parar de depender só do alcance orgânico.",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
