import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    server: {
      preset: "cloudflare-pages",
      prerender: {
        crawlLinks: true,
      },
    },
    ssr: true,
  },
});
