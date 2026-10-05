import { defineCollection, z } from 'astro:content';

const pilarSlugs = [
  'alugar-seu-imovel-em-curitiba',
  'vender-e-avaliar-imovel-em-curitiba',
  'morar-e-investir-em-curitiba',
  'locacao-descomplicada',
  'arquitetura-decoracao-e-viver-bem',
] as const;

const lpKeys = ['avalie', 'anuncie', 'indique', 'site'] as const;

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pilar: z.enum(pilarSlugs),
    keyword: z.string(),
    lp: z.enum(lpKeys).default('site'),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Equipe Tuesta & Galvão'),
    draft: z.boolean().default(false),
    // Pergunta/resposta para o schema FAQPage (opcional).
    faq: z
      .array(z.object({ q: z.string(), a: z.string() }))
      .optional(),
  }),
});

export const collections = { blog };
