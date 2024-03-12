import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://astrofy-template.netlify.app',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: netlify()
});