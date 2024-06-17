import { defineConfig } from "@solidjs/start/config";

// https://ryanjc.com/blog/solidstart-cloudflare-pages/
export default defineConfig({
  server: {
    preset: "cloudflare-pages",
    // We will need to enable CF Pages node compatiblity
    // https://developers.cloudflare.com/workers/runtime-apis/nodejs/asynclocalstorage/
    rollupConfig: {
      external: ["__STATIC_CONTENT_MANIFEST", "node:async_hooks"],
    },
  },
})
