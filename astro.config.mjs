// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import mdx from "@astrojs/mdx";

import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://computermama.net",
  integrations: [preact(), mdx()],

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },

  adapter: netlify()
});