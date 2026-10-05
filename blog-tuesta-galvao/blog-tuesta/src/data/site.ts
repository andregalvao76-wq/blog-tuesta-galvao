// Dados globais da imobiliária — usados no SEO, schema e rodapé.
export const SITE = {
  name: 'Blog Tuesta & Galvão',
  shortName: 'Tuesta & Galvão',
  legalName: 'Tuesta & Galvão Corretagem de Imóveis Ltda.',
  url: 'https://blog.tuestagalvao.com.br',
  siteUrl: 'https://www.tuestagalvao.com.br',
  description:
    'Mercado imobiliário de Curitiba explicado por quem opera a cidade: guias de aluguel, venda, avaliação e investimento em imóveis, sem enrolação.',
  creci: 'CRECI J07217',
  cnpj: '28.846.235/0001-18',
  telefone: '+55 41 99589-7202',
  telefoneExibicao: '(41) 99589-7202',
  email: 'contato@galvao.imb.br',
  endereco: {
    rua: 'Praça Zacarias, 58 — Sala 1004',
    bairro: 'Centro',
    cidade: 'Curitiba',
    uf: 'PR',
    cep: '80020-100',
    pais: 'BR',
  },
  autor: {
    nome: 'Equipe Tuesta & Galvão',
    cargo: 'Corretores de imóveis — CRECI J07217',
  },
  // Landing pages de campanha (destino dos CTAs dos artigos → RTUESTA)
  lps: {
    avalie: 'https://avalie.tuestagalvao.com.br',
    anuncie: 'https://anuncie.tuestagalvao.com.br',
    indique: 'https://indique.tuestagalvao.com.br',
    site: 'https://www.tuestagalvao.com.br',
  },
  social: {
    instagram: 'https://instagram.com/tuestaegalvao',
    linkedin: 'https://linkedin.com/in/andregalvaoimoveis',
  },
};

export type LpKey = 'avalie' | 'anuncie' | 'indique' | 'site';
