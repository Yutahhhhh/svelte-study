// @ts-check
import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  output: "static",
  
  build: {
    format: "file",
    inlineStylesheets: "auto",
  },
  
  site: "https://svelte-study-frontend.pages.dev",
  
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: "es2020",
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ["svelte"],
          },
        },
      },
    },
  }
});
