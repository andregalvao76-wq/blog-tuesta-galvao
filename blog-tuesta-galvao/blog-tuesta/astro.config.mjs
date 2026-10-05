import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Domínio de produção do blog. Trocar aqui se mudar o subdomínio.
const SITE = 'https://blog.tuestagalvao.com.br';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
