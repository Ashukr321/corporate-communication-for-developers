# DevSpeak — website

Docs site for [Corporate Tech Communication for Developers](../README.md). Scaffolded with `nxt-init`, then built on Next.js 16 + Tailwind v4.

Pages are prerendered from the markdown guides in the repo root (`../0*-*/*.md`). Set `CONTENT_DIR` to read them from elsewhere.

| Command | What it does |
|---------|--------------|
| `npm run dev` | Dev server on http://localhost:3000 |
| `npm run build && npm start` | Production build / server |
| `npm run lint` / `npm run typecheck` / `npm run test:unit` | Checks |
| `npm run icons` | Regenerate favicon, PWA icons and `og.jpg` from `public/icons/icon.svg` and the repo banner |
| `docker compose up --build` | Build and run the Docker image (context is the repo root) |

## Where things live

- `src/lib/content.ts` — reads the markdown, builds the nav, rewrites `.md` links to site URLs, site name/URL
- `src/components/common/Shell.tsx` — sidebar, top bar, theme toggle
- `src/components/common/CommandMenu.tsx` — Ctrl/⌘ K search (cmdk)
- `src/app/manifest.ts`, `public/sw.js` — PWA
- `src/app/sitemap.ts`, `src/app/robots.ts`, `metadata` in `layout.tsx` and pages — SEO
- `Dockerfile`, `Dockerfile.dockerignore`, `docker-compose.yml` — container

Set `NEXT_PUBLIC_APP_URL` to the public URL at build time (canonical links, sitemap, Open Graph).
