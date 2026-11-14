// Captures the live web clients of both projects into shots/raw (uses the installed Edge, no download).
import { chromium } from 'playwright-core';
import { mkdirSync } from 'node:fs';

const OUT = new URL('../shots/raw/', import.meta.url);
mkdirSync(OUT, { recursive: true });
const file = (name) => new URL(`${name}.png`, OUT).pathname.replace(/^\/([A-Z]:)/, '$1');

const browser = await chromium.launch({ channel: 'msedge' });
const desktop = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  locale: 'en-US',
  // A fixed point in Barcelona, so the map never shows anyone's real location
  geolocation: { latitude: 41.3755, longitude: 2.1655 },
  permissions: ['geolocation'],
});

async function dismiss(page, labels) {
  for (const name of labels) {
    const btn = page.getByRole('button', { name, exact: false }).first();
    if (await btn.isVisible().catch(() => false)) await btn.click().catch(() => {});
  }
}

// SpotCheck (the API on Render may need a minute to wake up)
{
  const page = await desktop.newPage();
  await page.goto('https://www.spot-check.live/map', { waitUntil: 'networkidle', timeout: 120_000 });
  await page.waitForTimeout(6000);
  await dismiss(page, ['Got it']);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: file('web_sc_map') });

  await page.goto('https://www.spot-check.live/map?spot=3029', { waitUntil: 'networkidle', timeout: 120_000 });
  await page.waitForTimeout(6000);
  await dismiss(page, ['Got it']);
  await page.waitForTimeout(1500);
  await page.screenshot({ path: file('web_sc_spot') });
  await page.close();
}

// StyleSphere
{
  const page = await desktop.newPage();
  await page.goto('https://stylesphere-beta.vercel.app/en', { waitUntil: 'networkidle', timeout: 120_000 });
  await page.waitForTimeout(3000);
  await dismiss(page, ['Reject', 'Decline', 'Only necessary', 'Necessary only']);
  await page.waitForTimeout(800);
  await page.screenshot({ path: file('web_ss_home') });

  const product = page.locator('a[href*="/product"]').first();
  if (await product.count()) {
    await product.click();
    await page.waitForLoadState('networkidle');
    await page.waitForFunction(() => [...document.images].filter((i) => i.getBoundingClientRect().top < innerHeight).every((i) => i.complete && i.naturalWidth > 0), null, { timeout: 30_000 }).catch(() => {});
    await page.waitForTimeout(2500);
    await page.screenshot({ path: file('web_ss_product') });
  }
  await page.close();
}

await browser.close();
console.log('web captures done');
