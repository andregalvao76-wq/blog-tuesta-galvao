# Blog Tuesta & Galvão

Site estático do blog da imobiliária, em **Astro**, para publicar em **Cloudflare Pages**
no domínio `blog.tuestagalvao.com.br`.

Arquitetura de **clusters de conteúdo** (pillar + artigos): 4 guias-pilar e, abaixo de
cada um, os artigos que linkam de volta para ele. SEO, schema (JSON-LD), sitemap e RSS
já vêm prontos.

---

## 1. O que já está pronto

- **4 guias-pilar** em `/guias/…` (Alugar, Vender e avaliar, Morar e investir, Locação).
- **5 artigos** de exemplo em `/blog/…`, cada um ligado ao seu pilar e à landing page certa.
- **SEO automático**: `<title>`, meta description, canonical, Open Graph, imagem de
  compartilhamento, `sitemap-index.xml`, `robots.txt` e feed `rss.xml`.
- **Schema.org** (RealEstateAgent + Article + BreadcrumbList + FAQPage) em todas as páginas.
- **Tema claro/escuro** e layout responsável (mobile).
- Todos os CTAs apontam para as LPs de campanha (avalie / anuncie / indique) → RTUESTA.

---

## 2. Como publicar um novo artigo (o que o agente de conteúdo faz)

1. Criar **um arquivo `.md`** dentro de `src/content/blog/`.
   O nome do arquivo vira a URL. Ex.: `reajuste-de-aluguel-igpm.md`
   → `blog.tuestagalvao.com.br/blog/reajuste-de-aluguel-igpm/`
2. Começar o arquivo com o bloco de dados (frontmatter) abaixo e escrever o texto em Markdown.
3. Salvar / commitar. O site se reconstrói sozinho (ver item 3).

Modelo de frontmatter:

```markdown
---
title: "Reajuste de aluguel: como funciona o IGP-M e o IPCA"
description: "Resumo de uma frase que aparece no Google e nas redes (até ~155 caracteres)."
pilar: "locacao-descomplicada"        # um dos 4 slugs de pilar (ver src/data/pilares.ts)
keyword: "reajuste de aluguel igpm"    # palavra-chave principal do artigo
lp: "anuncie"                          # avalie | anuncie | indique | site
pubDate: 2026-10-10
author: "Equipe Tuesta & Galvão"
faq:                                   # opcional — vira "Perguntas frequentes" + schema FAQ
  - q: "Com que frequência o aluguel é reajustado?"
    a: "Uma vez por ano, na data de aniversário do contrato."
---

Texto do artigo em Markdown. Use `##` para subtítulos, listas, **negrito** e
links internos para o pilar e para outros artigos:

Este artigo faz parte do [guia de locação](/guias/locacao-descomplicada/).
```

**Slugs de pilar válidos** (campo `pilar`):
`alugar-seu-imovel-em-curitiba` · `vender-e-avaliar-imovel-em-curitiba` ·
`morar-e-investir-em-curitiba` · `locacao-descomplicada`

**Regra de SEO (links internos):** todo artigo deve ter **pelo menos um link para o
seu pilar** e, quando fizer sentido, um link para outro artigo do mesmo pilar. É isso
que constrói autoridade tópica.

---

## 3. Como colocar no ar (deploy)

### Opção recomendada — GitHub + Cloudflare Pages (publica sozinho)
1. Subir este projeto para um repositório no GitHub.
2. No Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** → escolher o repo.
3. Configuração de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Em **Custom domains**, adicionar `blog.tuestagalvao.com.br`.
5. Pronto: a cada novo `.md` commitado, o Cloudflare reconstrói e publica sozinho.

### Opção manual — upload direto (igual às LPs)
1. Rodar localmente: `npm install` e depois `npm run build`.
2. Subir a pasta **`dist/`** no Cloudflare Pages (Direct Upload).
   Desvantagem: precisa rebuildar a cada artigo novo.

---

## 4. Rodar na sua máquina (opcional)

```bash
npm install
npm run dev      # abre em http://localhost:4321
npm run build    # gera a pasta dist/ pronta para publicar
```

---

## 5. Onde mexer

| Quero mudar…                         | Arquivo                         |
|--------------------------------------|---------------------------------|
| Telefone, e-mail, endereço, LPs      | `src/data/site.ts`              |
| Textos e CTAs dos guias-pilar        | `src/data/pilares.ts`           |
| Cores / fontes da marca              | `src/styles/global.css`         |
| Domínio do site                      | `astro.config.mjs` (campo site) |
| Um artigo                            | `src/content/blog/*.md`         |

---

Tuesta & Galvão Corretagem de Imóveis Ltda. · CRECI J07217
