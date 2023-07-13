import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://dybowski.pro',
  integrations: [preact(), image(), sitemap()]
});
