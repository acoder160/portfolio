// Facts shared by every language. Text lives in src/i18n.

export const person = {
  name: 'Andrii Chaika',
  email: 'acoder160@gmail.com',
  github: 'https://github.com/acoder160',
  city: 'Pamplona',
};

// APKs are attached to a release of the public portfolio repository
// (release assets of a private repo cannot be downloaded without signing in).
const RELEASE = 'https://github.com/acoder160/portfolio/releases/download/v1.1.0';

export type ProjectId = 'spotcheck' | 'stylesphere';

export interface Project {
  id: ProjectId;
  name: string;
  years: string;
  live: { url: string; label: string };
  repo?: string;
  apk: { url: string; sizeMb: number; version: string };
  phones: string[]; // public/shots/*.webp, phone captures
  browser: string[]; // public/shots/*.webp, desktop captures
  stack: string[];
}

export const projects: Project[] = [
  {
    id: 'spotcheck',
    name: 'SpotCheck',
    years: '2025 — 2026',
    live: { url: 'https://www.spot-check.live/', label: 'spot-check.live' },
    repo: 'https://github.com/acoder160/SpotCheck',
    apk: { url: `${RELEASE}/SpotCheck-1.1.0.apk`, sizeMb: 64, version: '1.1.0' },
    phones: ['sc_spot_bcn', 'sc_map_gornal', 'sc_spot_detail', 'sc_filters', 'sc_lang'],
    browser: ['web_sc_spot', 'web_sc_map'],
    stack: [
      'Java 21', 'Spring Boot 3', 'PostgreSQL', 'PostGIS', 'Flyway', 'WebSocket · STOMP',
      'React 19', 'Vite', 'Expo', 'React Native', 'TypeScript', 'Leaflet', 'i18next',
      'Docker', 'Render', 'Neon', 'Vercel', 'GitHub Actions', 'Cloudinary', 'Groq · OpenAI',
    ],
  },
  {
    id: 'stylesphere',
    name: 'StyleSphere',
    years: '2025 — 2026',
    live: { url: 'https://stylesphere-beta.vercel.app/es', label: 'stylesphere-beta.vercel.app' },
    apk: { url: `${RELEASE}/StyleSphere-1.1.0.apk`, sizeMb: 61, version: '1.1.0' },
    phones: ['ss_product', 'ss_list', 'ss_dash'],
    browser: ['web_ss_home', 'web_ss_product'],
    stack: [
      'React Native 0.88', 'Expo SDK 58', 'Next.js 16', 'TypeScript', 'Zustand', 'React Query',
      'Supabase', 'PostgreSQL · RLS', 'Edge Functions', 'Stripe', 'Cloudinary', 'Sentry',
      'Jest', 'Vitest', 'Playwright', 'Maestro',
    ],
  },
];

export const langs = ['es', 'en'] as const;
export type Lang = (typeof langs)[number];
