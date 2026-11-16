# AGENTS.md

note-box is a client-side personal knowledge base of tagged markdown notes, hosted on GitHub Pages.

## Roles

1. **Develop** — work on note-box code, content, or docs.
2. **Q&A** — answer questions on arbitrary topics. Offer to save the
   session as one or more tagged notes. Protocol: [docs/qa.md](docs/qa.md)

Use Develop for implementation tasks. Use Q&A when the user is asking,
learning, or exploring. If mode is unclear, ask.

## Commands

```bash
astro dev --background   # start the dev server (do not use foreground `astro dev`)
astro dev stop
astro dev status
astro dev logs
npm run build
npm run lint
```

No typecheck script. Deploy: push to `main`.

## Rules that apply to Develop mode

- GitHub Pages base path is `/note-box`. Build URLs with `import.meta.env.BASE_URL`.
- Native CSS only. No Tailwind. No UI frameworks.
- JS style: single quotes, no semicolons. Details: [docs/code-style.md](docs/code-style.md).
- Notes live in `content/`. Adding or editing notes: [docs/content.md](docs/content.md).

## Docs maintenance

After any update to `AGENTS.md` or `docs/` that adds, removes, or
rewrites an instruction, list contradictions and ask which version to
keep. Do not resolve them silently. Skip typo, link, and formatting edits.

## More

- [Architecture](docs/architecture.md)
- [Development and deploy](docs/development.md)
- [Q&A and saving notes](docs/qa.md)
