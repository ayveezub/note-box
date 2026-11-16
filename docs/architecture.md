# Architecture

## Stack

- Astro 7, static output, no SSR
- Vanilla JS
- Native CSS
- GitHub Pages
- GitHub Actions (deploy only)

## Features

- Tagged markdown notes
- Each note has its own URL
- TUI browser support
- Planned, not implemented: fuzzy search bar that focuses on page load
  (intended engine: MiniSearch — not installed yet)

Do not describe search as an existing feature in code or docs until it ships.

## Structure

```text
.
├── content/              # markdown notes (arbitrary nesting)
├── public/               # favicon
├── src/
│   ├── assets/fonts/     # Iosevka Light
│   ├── components/       # Navbar.astro, BaseArticle.astro
│   ├── layouts/          # Layout.astro
│   ├── pages/
│   │   ├── index.astro          # /
│   │   ├── recent-notes.astro   # /recent-notes
│   │   └── notes/[...id].astro  # /notes/{id}
│   ├── styles/           # global.css, colors.css
│   ├── utils/index.js    # getNotes()
│   └── content.config.ts # notes collection + zod schema
└── astro.config.mjs      # site, base, fonts
```

## Routing and URLs

- `site`: `https://ayveezub.github.io`
- `base`: `/note-box`
- Always prefix links with `import.meta.env.BASE_URL`.
- Note URLs are `/notes/{filename}` — not the path under `content/`.
  `generateId` uses the basename only.
- Two notes with the same filename in different folders will collide.
  Keep filenames unique.

## Content pipeline

`notes` collection loads `content/**/*.md`.

- `title: string`
- `pubDate: date`
- `tags: string[]` (default `[]`)
- `description: string` (optional)
- `draft: boolean` (default `false`)

`getNotes()` excludes drafts and notes with no tags.

## Constraints

- Client-side only: no server endpoints, no SSR.
- TUI browsers: semantic HTML; content must be readable without JS;
  do not rely on hover-only interactions.
