# CV website

My personal CV / portfolio site. **Astro + Tailwind CSS v4**, dark theme, deployed on **GitHub Pages**.

## Edit the content
Everything is in **`src/pages/index.astro`** — the `me`, `skills`, `experience` and `projects` objects at the top. Change the text, add/remove items, done.

- Colors/fonts: `src/styles/global.css` (`--color-accent`).
- Page `<head>` / title: `src/layouts/Layout.astro`.

## Run locally
```bash
npm install
npm run dev      # http://localhost:4321/cv-website
npm run build    # output in dist/
```

## Deploy
Push to `main` → the GitHub Action builds and publishes to GitHub Pages automatically.
Live at **https://asytuyf.github.io/cv-website**.

> One-time: in the repo on GitHub, Settings → Pages → Source = **GitHub Actions**.
