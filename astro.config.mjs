import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qbits-swd.netlify.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
