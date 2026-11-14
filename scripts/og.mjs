// Renders public/og.jpg (1200x630 social preview) from the local dev server's hero.
import { chromium } from 'playwright-core';
import sharp from 'sharp';
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1, reducedMotion: 'reduce' });
await page.goto(process.env.REVIEW_URL ?? 'http://localhost:4321/en/', { waitUntil: 'networkidle' });
await page.addStyleTag({ content: '.site-header{display:none} .hero{min-height:630px;padding:40px 0} astro-dev-toolbar{display:none!important}' });
await page.waitForTimeout(500);
const png = await page.screenshot();
await sharp(png).jpeg({ quality: 84 }).toFile('public/og.jpg');
await browser.close();
console.log('og.jpg written');
