# Content

Notes are markdown files anywhere under `content/`. Nesting is
organizational only and does not affect the URL.

## Adding a note

1. Copy `content/note-template.md` or create a new `.md` file.
2. Fill frontmatter.
3. Commit and push. CI deploys to GitHub Pages.

## Frontmatter

```yaml
---
title: "Example note"
pubDate: "2026-07-26"
tags: ["browsers", "firefox"]
description: "Optional short summary"
draft: false
---
```

- `title` and `pubDate` are required.
- A note needs at least one tag to appear.
- `draft: true` hides the note.
- Filename becomes the URL id: `content/2026/7/foo.md` → `/notes/foo`.

Use unique filenames.

## Public notes

Notes are published to GitHub Pages. Never include passwords, tokens,
API keys, cookies, or private personal data. Redaction protocol for
Q&A saves: [qa.md](qa.md).
