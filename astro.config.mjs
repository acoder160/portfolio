import { defineConfig } from 'astro/config';

// SITE and BASE decide the public URL (and therefore what the QR codes point to).
// Default: the Vercel deployment. A sub-path deployment would set BASE=/sub/
// (both are read at build time)
export default defineConfig({
  site: process.env.SITE ?? 'https://andrii-chaika.vercel.app',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
