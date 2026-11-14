# Personal website

A static academic website built with [Astro](https://astro.build): home page, research projects, publications, CV, and a personal wiki.

## Running it

```sh
npm install
npm run dev      # http://localhost:4321, live-reloads as you edit; draft notes are visible
npm run build    # writes the finished site to dist/
npm run preview  # serves dist/ to check the production build
```

## Where things live

| To change…                    | Edit                                         |
| ----------------------------- | -------------------------------------------- |
| Name, bio, links, photo       | `src/site.config.ts`                         |
| Publications                  | `src/data/publications.yaml`                 |
| CV sections                   | `src/data/cv.yaml`                           |
| CV PDF download               | add `public/cv.pdf`                          |
| Research projects             | `src/content/projects/*.md`                  |
| Wiki notes                    | `src/content/wiki/*.md`                      |
| Colors and fonts              | `src/styles/global.css`                      |
| Images, paper PDFs            | `public/` (served from the site root)        |

Publications appear on the Publications page, the CV, the home page if `selected: true` is set, and on any research project page that lists the publication's `id` under `publications:`. Each one is defined once in `publications.yaml`.

## Writing wiki notes

Create `src/content/wiki/my-idea.md`:

```markdown
---
title: My Idea
created: 2026-11-13
tags: [ideas]
status: seedling   # seedling | budding | evergreen
draft: true        # optional, hides it from the live site
---

Builds on [[Research Questions]].
```

- `[[Note Title]]` links to the note whose filename is the slugified title. `[[slug|text]]` sets custom link text.
- Links to notes that don't exist yet are shown greyed out.
- Each note lists the notes that link to it ("Linked from").
- The wiki index has a filter box and tag pages.

`src/content/wiki/how-this-wiki-works.md` is a worked example.

## Deploying

The output is plain static HTML in `dist/`, so it can go almost anywhere:

- **GitHub Pages**: push to a repo named `<username>.github.io`, then set Settings → Pages → Source to "GitHub Actions". `.github/workflows/deploy.yml` builds and publishes on every push to `main`.
- **University web space**: run `npm run build` and copy the contents of `dist/` to your `public_html` directory.
- **Netlify / Cloudflare Pages**: connect the repo with build command `npm run build` and output directory `dist`.

Set `site` in `astro.config.mjs` to your final URL. If the site lives under a subpath (for example `https://example.edu/~you/`), also set `base: '/~you'`.
