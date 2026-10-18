// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Deployed to GitHub Pages at https://asytuyf.github.io/cv-website
// (if you later use a custom domain or a user page, update `site` + remove `base`)
export default defineConfig({
  site: "https://asytuyf.github.io",
  base: "/cv-website",
  vite: {
    plugins: [tailwindcss()],
  },
});
