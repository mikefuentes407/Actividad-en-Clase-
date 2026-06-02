// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mikefuentes407.github.io/Actividad-en-Clase-/',
  base: '/Actividad-en-Clase-/',
  vite: {
    plugins: [tailwindcss()]
  }
});