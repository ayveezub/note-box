# note-box

A personal knowledge base with fast search.

- Client-side only, hosted on GitHub Pages
- Fuzzy search bar that focuses immediately on page load
- Posts are tagged markdown files, added via Git commit
- Each post has its own URL
- TUI browsers supported

## Development

```bash
npm install
npm run dev        # start dev server (background)
astro dev stop     # stop the background server
npm run build      # production build
npm run lint       # run eslint
npm run preview    # preview the production build
```

## Adding a post

1. Create a markdown file under `content/` (use `content/note-template.md` as a starting point).
2. Fill in frontmatter: `title`, `pubDate`, `tags`, `description`.
3. Commit and push — CI builds and deploys to GitHub Pages.

## Tech Stack

- Astro (SSG)
- Vanilla JS + MiniSearch (search)
- Native CSS
- GitHub Actions (CI/CD)
