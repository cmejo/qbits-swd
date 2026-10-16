import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://qbitsswd.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
