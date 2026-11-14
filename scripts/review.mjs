// Dev helper: full-page captures of the local site for visual review.
// usage: node scripts/review.mjs <outDir> [path ...]
import { chromium } from 'playwright-core';
const [out, ...paths] = process.argv.slice(2);
const base = process.env.REVIEW_URL ?? 'http://localhost:4321/';
const browser = await chromium.launch({ channel: 'msedge' });
for (const [tag, viewport, scale] of [['d', { width: 1440, height: 900 }, 1], ['m', { width: 390, height: 844 }, 2]]) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: scale, reducedMotion: 'reduce', locale: 'es-ES' });
  const page = await ctx.newPage();
  for (const p of paths.length ? paths : ['es/']) {
    await page.goto(base + p, { waitUntil: 'networkidle' });
    await page.evaluate(async () => {
      document.querySelectorAll('img').forEach((i) => (i.loading = 'eager'));
      for (let y = 0; y < document.body.scrollHeight; y += 600) { scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); }
      document.querySelectorAll('[data-rail]').forEach((r) => (r.scrollLeft = r.scrollWidth));
      await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
      document.querySelectorAll('[data-rail]').forEach((r) => (r.scrollLeft = 0));
      scrollTo(0, 0);
    });
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(800);
    const name = `${out}/${tag}_${p.replace(/\W+/g, '_') || 'root'}.png`;
    await page.screenshot({ path: name, fullPage: true });
    const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    console.log(name, 'h=', await page.evaluate(() => document.body.scrollHeight), 'overflowX=', over);
  }
  await ctx.close();
}
await browser.close();
