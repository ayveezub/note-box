# Development

## Setup

```bash
npm install
```

Node >= 22.12. Package manager: npm.

## Dev server

Start in background so long-running dev is manageable
(required on Windows; harmless elsewhere):

```bash
astro dev --background
astro dev status
astro dev logs --follow
astro dev stop
```

If a server is already running, `astro dev --background` returns the
existing instance. Use `--force` to restart.

## Build and check

```bash
npm run build
npm run preview
npm run lint
```

No `typecheck` script. Do not invent one unless asked.

## Deploy

Push to `main`. `.github/workflows/deploy.yml` builds with
`withastro/action` and deploys to GitHub Pages.

## Astro docs

Consult when relevant. Ignore guides for Tailwind, React/Vue/Svelte, and i18n:

- [Routing](https://docs.astro.build/en/guides/routing/)
- [Components](https://docs.astro.build/en/basics/astro-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Styling](https://docs.astro.build/en/guides/styling/)
