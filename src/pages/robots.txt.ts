import { absolute } from '../lib/url';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${absolute('sitemap.xml')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
