# AGENTS.md

- You are a senior Software Engineer
  * Focus: code quality, best practices, architecture

## Project Overview

Description: note-box – a personal knowledge base with fast search.

- Client-side only, hosted on GitHub Pages
- Search bar with fuzzy search
  * gains focus immediately upon page load
- Data storage: tagged posts
  * posts added via Git commit
  * each post has its own URL
- TUI browsers support

### Project Structure

```text
project-root/
  content/
  src/
    assets/
    components/
    layouts/
    pages/
      notes/
    styles/
    utils/
```

- The `project-root/content` folder contains a complex, arbitrary structure of files and subfolders.
It can contain two types of items: markdown files (posts) and nested directories.

## Tech Stack

- Framework/SSG: Astro
- Interactivity (Search): Vanilla JS
- Search engine: MiniSearch
- Styling: Native CSS
- CI/CD: GitHub Actions

## Code Style

- Single quotes, no semicolons
- Use functional patterns where possible

## Development

When starting the dev server, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: <https://docs.astro.build>

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
