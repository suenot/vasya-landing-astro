// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://vasya.app',
  output: 'server',
  adapter: vercel(),
  build: {
    inlineStylesheets: 'always'
  },

  integrations: [sitemap(), react()]
});