// Sitemap with es/en alternates for every page (no extra dependency needed).
import { langs, projects } from '../data/site';
import { absolute } from '../lib/url';

const paths = ['', 'cv/', ...projects.map((p) => `${p.id}/`)];

export function GET() {
  const urls = paths.flatMap((path) =>
    langs.map((lang) => {
      const alts = langs
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${absolute(`${l}/${path}`)}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${absolute(`${lang}/${path}`)}</loc>\n${alts}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
