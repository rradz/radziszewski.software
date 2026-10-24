# radziszewski.software

Personal site: card, apps, blog. Built with [Astro](https://astro.build), hosted on GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:4321, drafts visible
npm run build    # static site in dist/, drafts left out
```

## Where things are

- `src/data/site.ts` — name, email, links.
- `src/pages/index.astro` — the card: intro, what I help with, background.
- `src/data/apps.ts` — app list. Set `appStoreUrl` when an app goes live.
- `src/pages/apps/<app>/` — app page, `support.md`, `privacy.md`.
- `src/content/blog/*.md` — posts. Frontmatter: `title`, `description`, `date`, optional `draft: true`.

## Deploy

Every push to `main` builds and deploys via `.github/workflows/deploy.yml`.

One-time setup:

1. Create the GitHub repo and push.
2. Repo → Settings → Pages → Source: **GitHub Actions**. Custom domain: `radziszewski.software`,
   then tick **Enforce HTTPS** once the certificate is issued.
3. DNS at the registrar:
   - `A` records for `radziszewski.software`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `AAAA` records: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`,
     `2606:50c0:8003::153`
   - `CNAME` for `www` → `rradz.github.io`

App Store Connect URLs for Watch Setter:

- Support: https://radziszewski.software/apps/watch-setter/support/
- Privacy: https://radziszewski.software/apps/watch-setter/privacy/
