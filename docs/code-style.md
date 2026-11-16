# Code style

ESLint is the source of truth: `npm run lint`.

Config: `eslint.config.js`. It only lints `**/*.{js,mjs,cjs}` —
`.astro` and `.ts` files are not linted.

Key rules:

- Single quotes (template literals allowed)
- No semicolons
- 2-space indent
- Stroustrup brace style
- Trailing commas on multiline
- Arrow parens only when needed (except block body)
- Newline at EOF, no trailing spaces

## Preferences

- Prefer small pure functions. This codebase has no classes;
  do not introduce them unless there is a clear reason.
- No CSS framework. Use custom properties from `src/styles/colors.css`.
