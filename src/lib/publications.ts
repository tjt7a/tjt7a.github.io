import type { CollectionEntry } from 'astro:content';

/** Newest year first; within a year, the order they appear in publications.yaml. */
export const byRecency = (a: CollectionEntry<'publications'>, b: CollectionEntry<'publications'>) =>
  b.data.year - a.data.year || a.data.order - b.data.order;
