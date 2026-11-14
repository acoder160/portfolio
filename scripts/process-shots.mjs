// Turns raw captures into web-ready WebP files in public/shots.
// Phone captures lose the Android status bar; desktop captures are scaled down.
import sharp from 'sharp';
import { mkdirSync, readdirSync } from 'node:fs';

const RAW = 'shots/raw';
const OUT = 'public/shots';
mkdirSync(OUT, { recursive: true });

const STATUS_BAR = 100; // px on the Fold6 cover screen (968 px wide)

for (const f of readdirSync(RAW).filter((n) => n.endsWith('.png'))) {
  const name = f.replace(/\.png$/, '');
  const img = sharp(`${RAW}/${f}`);
  const { width, height } = await img.metadata();
  const isWeb = name.startsWith('web_');
  const pipeline = isWeb
    ? img.resize({ width: 1600 })
    : img.extract({ left: 0, top: STATUS_BAR, width, height: height - STATUS_BAR }).resize({ width: 720 });
  await pipeline.webp({ quality: 80 }).toFile(`${OUT}/${name}.webp`);
  console.log(name);
}
