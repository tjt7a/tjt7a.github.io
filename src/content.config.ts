import { defineCollection, reference, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { parse } from 'yaml';

// The file loader doesn't guarantee entries come back in file order, so record each
// entry's position and sort on it wherever order matters.
const withFileOrder = (text: string) =>
  (parse(text) as Record<string, unknown>[]).map((entry, i) => ({ ...entry, order: i }));

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'past']).default('active'),
    order: z.number().default(100),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    // Publication ids from src/data/publications.yaml, listed at the bottom of the project page.
    publications: z.array(reference('publications')).default([]),
  }),
});

const wiki = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/wiki' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    created: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // seedling = rough idea, budding = developing, evergreen = mature
    status: z.enum(['seedling', 'budding', 'evergreen']).default('seedling'),
    draft: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  loader: file('./src/data/publications.yaml', { parser: withFileOrder }),
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string(),
    year: z.number(),
    type: z.enum(['journal', 'conference', 'workshop', 'preprint', 'thesis', 'other']),
    selected: z.boolean().default(false),
    note: z.string().optional(),
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    order: z.number(),
  }),
});

// CV sections, rendered in file order. Publications are added automatically.
const cv = defineCollection({
  loader: file('./src/data/cv.yaml', { parser: withFileOrder }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    entries: z.array(
      z.object({
        when: z.coerce.string(),
        what: z.string(),
        where: z.string().optional(),
        details: z.string().optional(),
      }),
    ),
  }),
});

export const collections = { projects, wiki, publications, cv };
