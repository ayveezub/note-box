---
title: "AGENTS.md progressive disclosure prompt"
pubDate: "2026-11-19"
tags: ["agents-md", "prompting", "docs"]
description: "Prompt template for initializing or refactoring AGENTS.md with progressive disclosure, plus a standing Conventional Commits rule."
draft: false
---

A prompt for initializing or refactoring `AGENTS.md` so the root file stays minimal and details live in linked topic files.

## The prompt

```
I want you to initialize or refactor my AGENTS.md and related docs using progressive disclosure.

Context:
- Root AGENTS.md is loaded into every agent session. Keep it minimal.
- Linked files are read only when the agent needs them.
- Works both when AGENTS.md already exists and when starting from scratch.

Process:

0. Inventory (do this first, write nothing yet)
   - Read the existing AGENTS.md (if any) and every doc it links.
   - Scan the repo for real conventions: package.json scripts, linter/formatter configs, CI, README.
   - Do not invent rules that are not in current docs or clearly practiced in the code.

1. Contradictions
   - List every conflict between instructions, including conflicts with what the code actually does.
   - For each, ask me which version to keep. Wait for my answers before writing any file.

2. Essentials for the root AGENTS.md
   Keep only:
   - One-sentence project description
   - Package manager (only if not npm)
   - Non-standard build/typecheck/test commands
   - Rules that truly apply to every single task
   - Relative markdown links to the topic files
   Soft target: readable in under a minute.

3. Group the rest
   - One topic per file, kebab-case names (code-style.md, testing.md, git-workflow.md).
   - Do not duplicate a rule in two places — link instead.
   - Do not create empty stub files for categories that have nothing to say.
   - Preserve or fix existing inbound links so they don't break.

4. Draft before write
   - Show me the proposed file tree and a one-line purpose for each new or moved file.
   - Wait for my confirmation before creating or overwriting files.

5. After writing — deletion pass
   Re-read every file you created or changed. Flag anything that is:
   - Redundant (the agent already knows it)
   - Too vague to be actionable
   - Overly obvious ("write clean code")
   - Duplicated from another file
   Ask me before deleting each item.

After AGENTS.md initialization or refactoring, add rules:
- After any change to files in a git-tracked directory, recommend a
  Conventional Commits message: <type>[optional scope]: <short description>
```

## Why the prompt is shaped this way

- **Inventory first.** Without reading linked docs and repo config, the agent refactors from the root file only and invents or drops conventions.
- **Do not invent rules.** Models fill gaps with generic best practices. That is noise in an agents file.
- **Draft and confirm before writing.** Refactoring can delete content. Immediate writes are the wrong default.
- **Deletion pass after writing, not during creation.** It is a review of what was actually written. Asking before each deletion prevents silent data loss.
- **No stub files.** Empty category files "for completeness" are noise.
- **Preserve inbound links.** Refactors commonly orphan existing `docs/*` references.
- **Contradictions batched.** One list, not one-question-at-a-time.

## Standing commit rule vs the task

The Conventional Commits recommendation is a standing session rule, not a step of the AGENTS.md flow. It applies to any tracked-file change. If the tool has an always-on instruction layer (rules file, system prompt), put the standing rule there and keep the task prompt as steps 0–5 only.
