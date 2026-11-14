// Turns [[Note Title]] and [[note-slug|custom label]] into links to /wiki/<slug>/.
// Wiki note slugs are their filenames, so [[Sparse Attention]] links to src/content/wiki/sparse-attention.md.

export const WIKILINK_RE = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;

export function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function splitText(value) {
  const nodes = [];
  let last = 0;
  for (const match of value.matchAll(WIKILINK_RE)) {
    const [raw, target, label] = match;
    if (match.index > last) nodes.push({ type: 'text', value: value.slice(last, match.index) });
    nodes.push({
      type: 'link',
      url: `/wiki/${slugify(target)}/`,
      data: { hProperties: { className: ['wikilink'] } },
      children: [{ type: 'text', value: (label ?? target).trim() }],
    });
    last = match.index + raw.length;
  }
  if (last < value.length) nodes.push({ type: 'text', value: value.slice(last) });
  return nodes;
}

function transform(node) {
  if (!node.children) return;
  const out = [];
  for (const child of node.children) {
    if (child.type === 'text' && child.value.includes('[[')) {
      out.push(...splitText(child.value));
    } else {
      // Don't rewrite inside code or existing links.
      if (child.type !== 'link' && child.type !== 'inlineCode' && child.type !== 'code') transform(child);
      out.push(child);
    }
  }
  node.children = out;
}

export default function remarkWikilinks() {
  return (tree) => transform(tree);
}
