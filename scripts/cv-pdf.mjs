// Prints /en/cv/ and /es/cv/ from the local dev server into public/Andrii-Chaika-CV-{EN,ES}.pdf.
// Run `npm run dev` first, then `npm run cv`. Text stays selectable, so ATS parsers can read it.
import { chromium } from 'playwright-core';

const base = (process.env.REVIEW_URL ?? 'http://localhost:4321/').replace(/\/?$/, '/');
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ reducedMotion: 'reduce' });

for (const lang of ['en', 'es']) {
  await page.goto(`${base}${lang}/cv/`, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: 'astro-dev-toolbar{display:none!important}' });
  await page.evaluate(() => document.fonts.ready);
  const file = `public/Andrii-Chaika-CV-${lang.toUpperCase()}.pdf`;
  await page.pdf({ path: file, format: 'A4', preferCSSPageSize: true, printBackground: true });
  console.log(`${file} written`);
}

await browser.close();
