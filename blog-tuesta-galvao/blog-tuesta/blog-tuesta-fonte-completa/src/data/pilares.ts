import type { LpKey } from './site';

// Os clusters de conteúdo do blog (páginas-pilar).
// Cada artigo aponta para um pilar; o pilar lista seus artigos e vice-versa.
// Modelo pillar + cluster: autoridade tópica local (Curitiba).

export interface Pilar {
  slug: string;
  nav: string;          // rótulo curto no menu
  titulo: string;       // H1 da página-pilar
  tituloSeo: string;    // <title>
  descricao: string;    // meta description
  keyword: string;      // palavra-chave principal do cluster
  lp: LpKey;            // landing page de destino do cluster
  ctaTitulo: string;
  ctaTexto: string;
  ctaBotao: string;
  // Parágrafos de abertura do pilar (conteúdo editorial real, não navegação).
  intro: string[];
}

export const PILARES: Pilar[] = [
  {
    slug: 'alugar-seu-imovel-em-curitiba',
    nav: 'Alugar seu imóvel',
    titulo: 'Como alugar seu imóvel em Curitiba',
    tituloSeo: 'Como alugar seu imóvel em Curitiba: o guia do proprietário',
    descricao:
      'O guia completo para o proprietário que quer alugar em Curitiba sem vacância e sem risco: preço certo, documentos, garantias e administração.',
    keyword: 'alugar imóvel em Curitiba',
    lp: 'anuncie',
    ctaTitulo: 'Quer alugar seu imóvel sem dor de cabeça?',
    ctaTexto:
      'A Tuesta & Galvão cuida de tudo — do anúncio à administração do contrato. Conte seu imóvel e receba um plano de locação.',
    ctaBotao: 'Anunciar meu imóvel',
    intro: [
      'Imóvel parado é prejuízo silencioso: além do aluguel que deixa de entrar, correm condomínio, IPTU e manutenção. A boa notícia é que a maior parte do tempo de vacância em Curitiba vem de três coisas que o proprietário controla — preço, apresentação e documentação — e não da falta de interessados.',
      'Este guia reúne o que a gente aplica todos os dias na administração de locação: como chegar ao valor de aluguel que o mercado do seu bairro aceita, quais documentos deixar prontos antes de anunciar, como escolher a garantia locatícia certa e quando faz sentido deixar a imobiliária administrar o contrato no seu lugar.',
    ],
  },
  {
    slug: 'vender-e-avaliar-imovel-em-curitiba',
    nav: 'Vender e avaliar',
    titulo: 'Vender e avaliar seu imóvel em Curitiba',
    tituloSeo: 'Quanto vale e como vender seu imóvel em Curitiba',
    descricao:
      'Descubra quanto vale seu imóvel em Curitiba e como vender pelo preço certo: avaliação de mercado, o que valoriza, documentos e erros que travam a venda.',
    keyword: 'quanto vale meu imóvel em Curitiba',
    lp: 'avalie',
    ctaTitulo: 'Quanto vale o seu imóvel hoje?',
    ctaTexto:
      'Receba uma avaliação de mercado feita por corretor, com base em imóveis comparáveis do seu bairro em Curitiba — não um chute de portal.',
    ctaBotao: 'Avaliar meu imóvel',
    intro: [
      'O maior erro de quem vai vender é começar pelo preço que gostaria de receber, e não pelo preço que o mercado paga. Em Curitiba, um imóvel anunciado acima do valor de mercado não "testa o terreno": ele encalha, acumula dias de anúncio e, quando finalmente baixa, já carrega a fama de encalhado — e vende por menos do que valeria.',
      'Aqui você entende como é feita uma avaliação de mercado séria, o que realmente pesa no preço de um imóvel além do metro quadrado, quais bairros de Curitiba estão valorizando e quais documentos ter em mãos para a venda não travar na reta final.',
    ],
  },
  {
    slug: 'morar-e-investir-em-curitiba',
    nav: 'Morar e investir',
    titulo: 'Morar e investir em Curitiba',
    tituloSeo: 'Morar e investir em Curitiba: guia dos bairros e do mercado',
    descricao:
      'Guia dos bairros de Curitiba para morar e investir: valorização, rentabilidade de aluguel, planta x usado e para quem cada região faz sentido.',
    keyword: 'investir em imóveis em Curitiba',
    lp: 'avalie',
    ctaTitulo: 'Pensando em comprar ou investir em Curitiba?',
    ctaTexto:
      'A gente conhece a cidade bairro a bairro. Fale com a Tuesta & Galvão e encontre o imóvel certo para morar ou rentabilizar.',
    ctaBotao: 'Falar com um corretor',
    intro: [
      'Curitiba não é um mercado só: o metro quadrado, o perfil de inquilino e o potencial de valorização mudam radicalmente entre o Batel, o Água Verde, o Cabral e os bairros em expansão da cidade. Quem compra para morar e quem compra para investir olham a mesma planta com olhos completamente diferentes.',
      'Este cluster é o nosso guia da cidade: onde os imóveis mais valorizaram, qual a rentabilidade real do aluguel por região, quando compensa comprar na planta e para qual perfil cada bairro de Curitiba faz sentido.',
    ],
  },
  {
    slug: 'locacao-descomplicada',
    nav: 'Locação sem dor de cabeça',
    titulo: 'Locação sem dor de cabeça',
    tituloSeo: 'Locação sem dor de cabeça: contrato, reajuste e inadimplência',
    descricao:
      'As regras da locação explicadas em português claro: reajuste de aluguel, rescisão, multa, inadimplência e o que fazer quando o inquilino não paga.',
    keyword: 'contrato de locação',
    lp: 'anuncie',
    ctaTitulo: 'Deixe a parte chata com a gente',
    ctaTexto:
      'Reajuste, cobrança, inadimplência, rescisão: a Tuesta & Galvão administra o contrato e você recebe em dia. Saiba como funciona.',
    ctaBotao: 'Conhecer a administração',
    intro: [
      'A maioria dos conflitos de locação não nasce de má-fé — nasce de gente que não sabia a regra. Reajuste pelo índice certo, prazo de aviso, multa proporcional, o passo a passo quando o aluguel atrasa: tudo isso está na Lei do Inquilinato e no contrato, e dá para resolver sem briga quando se conhece o caminho.',
      'Reunimos aqui as dúvidas que mais chegam ao nosso jurídico, respondidas de forma direta e aplicada ao dia a dia de quem aluga ou administra imóvel em Curitiba.',
    ],
  },
  {
    slug: 'arquitetura-decoracao-e-viver-bem',
    nav: 'Viver bem',
    titulo: 'Arquitetura, decoração e viver bem em Curitiba',
    tituloSeo: 'Arquitetura, decoração e viver bem em Curitiba',
    descricao:
      'Tendências de arquitetura e decoração, ideias para aproveitar seu espaço e o que faz viver bem em Curitiba — inspiração para a sua casa.',
    keyword: 'tendências de decoração',
    lp: 'site',
    ctaTitulo: 'Procurando um imóvel com a sua cara?',
    ctaTexto:
      'Veja os imóveis disponíveis da Tuesta & Galvão em Curitiba e encontre o espaço certo para viver do seu jeito.',
    ctaBotao: 'Ver imóveis em Curitiba',
    intro: [
      'Casa boa não é a maior nem a mais cara — é a que combina com o jeito de viver de quem mora nela. Antes de ser metro quadrado e preço, um imóvel é luz, planta, acabamento e a sensação de chegar em casa. É disso que este guia trata.',
      'Reunimos tendências de arquitetura e decoração, ideias práticas para aproveitar cada ambiente e um olhar sobre o que faz, de fato, viver bem em Curitiba — do clima da cidade às regiões com mais verde, cultura e qualidade de vida. Inspiração para quem vai mudar, reformar ou só deixar o lar com mais cara.',
    ],
  },
];

export function getPilar(slug: string): Pilar | undefined {
  return PILARES.find((p) => p.slug === slug);
}

// Foto de capa por pilar (home + página do guia). Hotlink Unsplash (licença permite).
const IMG = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&h=420&q=80`;
export const PILAR_IMG: Record<string, { src: string; alt: string }> = {
  'alugar-seu-imovel-em-curitiba':       { src: IMG('photo-1742318592061-15c5f19e1e47'), alt: 'Chaves de imóvel com chaveiro em forma de casa' },
  'vender-e-avaliar-imovel-em-curitiba': { src: IMG('photo-1772588627354-ca3617853217'), alt: 'Calculadora, caneta e documentos sobre a mesa' },
  'morar-e-investir-em-curitiba':        { src: IMG('photo-1763257708545-18addc8bef6b'), alt: 'Vista aérea de um bairro residencial ao entardecer' },
  'locacao-descomplicada':               { src: IMG('photo-1603796846097-bee99e4a601f'), alt: 'Pessoa preenchendo um documento sobre a mesa' },
  'arquitetura-decoracao-e-viver-bem':   { src: IMG('photo-1724582586458-a51791349977'), alt: 'Sala de estar moderna com grande janela e luz natural' },
};
