---
title: How This Wiki Works
description: A reference note on writing wiki pages (kept as a draft, visible only locally).
created: 2026-11-13
tags: [meta]
status: evergreen
draft: true
---

Each note is a Markdown file in `src/content/wiki/`. The filename becomes the URL, so `research-questions.md` is published at `/wiki/research-questions/`.

## Linking notes

Wrap a note's title in double brackets to link to it: [[Research Questions]]. The title is converted to a filename slug, so that link goes to `research-questions.md`. To show different link text, add a pipe: [[research-questions|my open questions]].

Linking to a note that doesn't exist yet is fine, for example [[An Idea I Haven't Written Up]]. The link appears greyed out until you create the note.

Every note lists the notes that link to it under **Linked from**, so connections work in both directions without extra effort.

## Frontmatter

```yaml
---
title: Note Title
description: Optional one-line summary shown in lists
created: 2026-11-13
updated: 2026-11-20      # optional
tags: [methods, reading]
status: seedling         # seedling | budding | evergreen
draft: true              # optional: visible locally, hidden on the live site
---
```

## Status

- **seedling**: a rough idea worth writing down
- **budding**: has some structure and references
- **evergreen**: reasonably complete and stable
