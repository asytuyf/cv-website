# cv-website — project context

Personal CV / portfolio site.

- **Stack:** Astro 5 + **Tailwind CSS v4** (via `@tailwindcss/vite`) + TypeScript.
- **All content is in `src/pages/index.astro`** — the `me`, `skills`, `experience`, `projects` objects at the top. Layout/head in `src/layouts/Layout.astro`; accent color/fonts in `src/styles/global.css` (`--color-accent`).
- **Run:** `npm install && npm run dev` → http://localhost:4321/cv-website. Build: `npm run build`.
- **Deploy:** **GitHub Pages** via `.github/workflows/deploy.yml` (auto on push to `main`). Live at https://asytuyf.github.io/cv-website/.
- ⚠️ `astro.config.mjs` sets `base: "/cv-website"` — keep in-page links as `#anchors`; prefix any `public/` asset with `import.meta.env.BASE_URL`. If moved to a custom domain or user page, drop `base`.

Commit as Abdel, no Claude co-author trailer.
