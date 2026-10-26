# radziszewski.software

Company site of Radziszewski Software. Static HTML built with [Astro](https://astro.build): no JavaScript,
no cookies, one inlined stylesheet. Hosted on GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321 (the dev server injects Vite's reload script; the build has none)
npm run build    # static site in dist/
```

## Where things are

- `src/data/site.ts` — company name, tagline, email, links.
- `src/pages/` — home, consulting, about, apps.
- `src/data/apps.ts` — app list. Set `appStoreUrl` when an app goes live.
- `src/pages/apps/<app>/` — app page, `support.md`, `privacy.md`.
- `src/content/blog/*.md` — posts (`title`, `description`, `date`, optional `draft: true`). The blog, its nav
  link and the RSS feed only appear once a post without `draft: true` exists.
- `src/styles/global.css` — all styling.

## Deploy

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

DNS for `radziszewski.software`:

- `A`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `AAAA`: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`
- `CNAME` for `www` → `rradz.github.io`

App Store Connect URLs for Watch Setter:

- Support: https://radziszewski.software/apps/watch-setter/support/
- Privacy: https://radziszewski.software/apps/watch-setter/privacy/
