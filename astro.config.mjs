import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://mdrakibulhaquesardar.github.io',
  base: process.env.BASE_PATH || '/Legal-Center-Management',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
