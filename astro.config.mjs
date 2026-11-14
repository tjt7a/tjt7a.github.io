import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import remarkWikilinks from './src/plugins/remark-wikilinks.mjs';

export default defineConfig({
  // Set this to your final URL (used for canonical links and the sitemap-style metadata).
  site: 'https://tjt7a.github.io',
  markdown: {
    processor: unified({ remarkPlugins: [remarkWikilinks] }),
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
