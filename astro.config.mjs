import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://emi-calc.pages.dev/',
  output: 'static',
  server: {
    host: true,
  },
});
