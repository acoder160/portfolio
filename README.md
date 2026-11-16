# Portfolio — Andrii Chaika

Static Astro site (ES / EN) presenting SpotCheck and StyleSphere, with APK download pages and QR codes.

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # dist/
npm run shots      # re-capture web screenshots and convert raw captures to WebP
npm run cv         # with dev running: print /en/cv/ and /es/cv/ to public/Andrii-Chaika-CV-*.pdf
```

- Hosted on Vercel (https://andrii-chaika.vercel.app). `SITE` and `BASE` env vars override the public URL that QR codes encode; see `astro.config.mjs`.
- APKs are attached to the `v1.1.0` release of this repository; links live in `src/data/site.ts`.
- Text lives in `src/i18n/es.ts` and `src/i18n/en.ts`. Design notes: `docs/direction.md`.
- `/qr/` is a printable sheet with both QR codes.
