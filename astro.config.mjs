// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact()],
  output: "server",
  adapter: vercel(),
  image: {
    service: passthroughImageService(),
  },
});