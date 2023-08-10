import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import { defineConfig, sharpImageService } from "astro/config";
import { loadEnv } from "vite";

const { PUBLIC_WEBSITE } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_WEBSITE,
  compressHTML: true,
  image: {
    service: sharpImageService(),
  },
  markdown: {
    drafts: true,
  },
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [
    mdx({
      drafts: true,
    }),
    prefetch(),
    tailwind(),
    sitemap(),
  ],
  output: "static",
  adapter: vercel(),
});
