# Q&A mode and saving notes

## When this applies

Q&A mode is for questions that are not about this repository's code.
Development rules (BASE_URL, ESLint, no Tailwind) do not apply unless
the session also changes the site.

## During the session

- Answer the question. Do not write files unless the user asks, unless
  they confirmed saving notes, or unless the write is to `docs/temp/`.
- For version numbers, APIs, and dates, prefer current official docs
  over memory.
- If `docs/topics/<topic>.md` exists for the subject, read it when the
  topic comes up. No brief means generalist mode.

## Scratch files: docs/temp

`docs/temp/` is local scratch space. It is not published.

- Use it before or during a session for dumps, screenshots, PDFs,
  snippets, and other working files.
- The user or the agent may place files there as needed. The agent does
  not need to ask before writing to `docs/temp/`.
- `docs/temp/.gitignore` ignores everything except itself. Only that
  file is committed. Do not `git add` other `docs/temp/` contents.
- Notes must not link to files in `docs/temp/` — they will not exist
  on GitHub Pages.
- Never copy private temp content into a note without redaction
  (see Privacy).

## Offering to save

Near the end of a session — or when the user says "save this" — propose:

- One note or several. Split when the session covered unrelated topics.
  One coherent topic is one note.
- Title in lookup-key style ("Firefox TLS fallback", not "Our chat").
- Tags: 1–5, lowercase. Reuse tags already used in `content/`.
- Filename slug.
- Every planned redaction (what will be removed or replaced).

If the session is mostly private, warn that notes publish to a public
GitHub Pages site. Offer not to save, or to save only a redacted
non-private subset.

Do not write the file until the user confirms.

## Privacy

Notes are public. When turning a session into a note:

Remove entirely:

- Passwords, tokens, API keys, cookies, private keys
- Emails, phone numbers, addresses, names of private people
- Local identifiers: `C:\Users\<name>\`, LAN IPs, internal hostnames,
  license keys

Keep:

- Public technical facts: software, versions, config keys, public URLs,
  procedures

Rules:

- Prefer deleting a private detail over inventing fake data.
- Placeholder only if the shape matters: `user@example.com`,
  `<redacted>`, `C:\Users\<user>\`.
- Do not make the note vague. Technical content must still work
  (see `firefox-tls-fallback.md`).

## Writing the note

- Path: `content/<year>/<month>/<slug>.md` using the session date.
- Slug: kebab-case, unique, descriptive (`firefox-tls-fallback.md`).
- `pubDate`: date of the session.
- `draft: false` once the user confirmed the save (including redactions).
- Frontmatter schema: see [content.md](content.md). Do not invent a
  second schema.
- Body: distilled reference, not a chat log. It must make sense
  without this conversation. Apply confirmed redactions.
- Model: `content/2026/7/firefox-tls-fallback.md`.

Do not `git commit` unless the user asks. Publishing is commit + push.

## Topic packs

Add `docs/topics/<topic>.md` to sharpen a domain without locking out
other questions:

- Scope: what is in and out
- Stable facts (things that will not rot next week)
- What to look up instead of trusting memory
- Preferred sources
- Suggested tags

Keep it short. A topic brief is a lens, not a cage.
