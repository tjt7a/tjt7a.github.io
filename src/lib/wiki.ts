import { getCollection, type CollectionEntry } from 'astro:content';
import { WIKILINK_RE, slugify } from '../plugins/remark-wikilinks.mjs';

export type Note = CollectionEntry<'wiki'>;

/** All published notes, newest activity first. Drafts are visible in `npm run dev` only. */
export async function getNotes(): Promise<Note[]> {
  const notes = await getCollection('wiki', ({ data }) => import.meta.env.DEV || !data.draft);
  return notes.sort((a, b) => lastTouched(b) - lastTouched(a));
}

export function lastTouched(note: Note): number {
  return (note.data.updated ?? note.data.created).valueOf();
}

/** Slugs this note links to via [[wikilinks]]. */
export function outgoingLinks(note: Note): Set<string> {
  const targets = new Set<string>();
  for (const match of (note.body ?? '').matchAll(WIKILINK_RE)) targets.add(slugify(match[1]));
  return targets;
}

/** Notes that link to `slug`. */
export function backlinks(slug: string, notes: Note[]): Note[] {
  return notes.filter((n) => n.id !== slug && outgoingLinks(n).has(slug));
}

export function allTags(notes: Note[]): [string, number][] {
  const counts = new Map<string, number>();
  for (const n of notes) for (const t of n.data.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

export const formatDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
