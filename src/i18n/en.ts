import type es from './es';

const en: typeof es = {
  htmlLang: 'en',
  meta: {
    title: 'Andrii Chaika — Full-stack & Mobile Developer (React Native, Spring Boot)',
    description:
      'Full-stack and mobile developer based in Spain. Two products shipped end to end: SpotCheck (Spring Boot, PostGIS, React Native, 21 languages) and StyleSphere (Next.js, Expo, Supabase, Stripe). Open to roles and projects.',
  },
  skip: 'Skip to content',
  nav: { work: 'Work', stack: 'Stack', about: 'About', contact: 'Contact', menu: 'Menu', close: 'Close' },
  langName: 'English',
  otherLang: { code: 'es', label: 'ES', name: 'Español' },
  hero: {
    role: 'Full-stack & mobile developer · React Native · Java/Spring Boot',
    lede:
      'I build Android and iOS apps, websites and the backend that runs them, and I finish them: two complete products are live and you can install them today.',
    ctaWork: 'See the work',
    ctaCv: 'Download CV',
    ctaContact: 'Get in touch',
    facts: ['Pamplona, Spain · CET', 'ES · EN · RU · UK', 'Authorized to work in Spain (TIE)', 'Open to roles and projects'],
    phonesAlt: 'SpotCheck and StyleSphere screenshots on an Android phone',
  },
  work: {
    label: 'Work',
    title: 'Two complete products, from the database to the app store.',
  },
  meta_labels: { role: 'Role', platforms: 'Platforms', backend: 'Backend', years: 'Years', languages: 'Languages' },
  projects: {
    spotcheck: {
      kicker: 'A community map of skate spots',
      lede:
        'For skaters landing in a city they don’t know. Every spot comes in with a photo taken on site and pinned inside the GPS radius, so the map only shows places someone has actually stood at.',
      meta: {
        role: 'The whole product: design, API, apps and deployment',
        platforms: 'Android · iOS · Web · REST API',
        backend: 'Spring Boot + PostGIS',
        languages: '21, including Arabic (RTL)',
      },
      benefit:
        'What this means for you: an app with a map and location, user content checked by AI, data that updates on its own and your product in several languages from day one.',
      notes: [
        ['Sessions that are hard to steal', '15-minute access tokens and rotating refresh tokens stored as hashes. Replay an old one and the server revokes the whole session family.'],
        ['“I’m here” only counts on site', 'Check-ins are verified server-side with PostGIS (300 m), and live counts reach every open map over WebSocket, always after commit.'],
        ['AI on a leash', 'Suggests type and level from the photo, catches duplicate spots (distance, similar name and photo comparison) and moderates text and images. If no provider answers, the app keeps working.'],
        ['21 languages from one source', 'Translations are checked and synced into the web and mobile apps, including Arabic with a right-to-left layout.'],
        ['Tested on every push', '160 tests with JUnit and Testcontainers on real PostGIS. GitHub Actions checks the backend, the Docker image, web and mobile.'],
      ],
    },
    stylesphere: {
      kicker: 'A fashion store: Android and iOS app + website',
      lede:
        'A complete clothing store on two platforms sharing one backend: catalogue, cart, Stripe payments and an admin panel anyone can try without touching real data.',
      meta: {
        role: 'Freelance project for a private client: app, website and backend',
        platforms: 'Android and iOS (Expo) · Web (Next.js)',
        backend: 'Supabase + Stripe',
        languages: 'ES · EN · RU · UA',
      },
      benefit:
        'What this means for you: your own store on the web and on phones, real card payments, and a panel to manage products and orders without depending on anyone.',
      notes: [
        ['The server sets the price', 'Before a payment is created, an Edge Function re-prices the cart (prices, stock, promo code and shipping). The Stripe webhook marks the order as paid.'],
        ['An admin panel you can hand out', 'Every visitor gets their own sandbox, isolated in the database with Row Level Security. It is wiped on sign-out or after 24 hours.'],
        ['Promo codes and referrals without client code', 'Welcome codes and invite rewards are issued by PostgreSQL triggers after the first paid order.'],
        ['A checkout that doesn’t frustrate', 'Address autocomplete with a map, phone and postcode validated per country, and a size guide in cm and inches.'],
        ['A website that works without JavaScript', 'Filters are a plain GET form, so every filtered view is a shareable link. Tested with Jest, Vitest, Playwright and Maestro.'],
      ],
    },
  },
  notesTitle: 'Engineering decisions',
  stackTitle: 'Built with',
  actions: {
    live: 'Open the website',
    apk: 'Download the APK',
    code: 'Code on GitHub',
    privateCode: 'Private code, available on request',
  },
  shots: {
    rail: 'screenshots',
    hint: 'Swipe · {n} screens',
    sc_spot_bcn: 'Spot sheet: photo, type, level, distance and live check-in',
    sc_map_gornal: 'Spot preview on the map, with the route to it',
    sc_spot_detail: 'Average rating, your vote and threaded comments',
    sc_filters: 'Filters by type, distance and rating',
    sc_lang: 'Language picker with 21 languages',
    web_sc_spot: 'Spot sheet over the map',
    web_sc_map: 'Full-screen map',
    ss_product: 'Product page with colours and sizes',
    ss_list: 'Category with filters',
    ss_dash: 'Admin dashboard: sales and best sellers (demo data)',
    web_ss_home: 'Home page with campaigns',
    web_ss_product: 'Product page',
  },
  stack: {
    label: 'Stack',
    title: 'What I work with',
    intro: 'Only what I have shipped to production in these two projects.',
    groups: [
      ['Mobile', 'React Native, Expo, TypeScript, Android (APK and AAB), iOS, push notifications'],
      ['Frontend', 'React 19, Next.js, Vite, modern CSS, i18n with RTL, accessibility'],
      ['Backend', 'Java 21 and Spring Boot 3, Supabase Edge Functions, REST, WebSocket'],
      ['Data', 'PostgreSQL, PostGIS, Row Level Security, Flyway, pg_cron, hand-written SQL'],
      ['Integrations', 'Stripe, Cloudinary, Google OAuth, Groq and OpenAI, Open-Meteo'],
      ['Quality & delivery', 'Docker, GitHub Actions, Render, Vercel, Neon, Sentry, JUnit, Testcontainers, pgTAP, Jest, Vitest, Playwright, Maestro, k6'],
    ],
  },
  about: {
    label: 'About',
    title: 'Hi, I’m Andrii.',
    body: [
      'I live in Pamplona, Spain. I finished a Higher Diploma in Multiplatform App Development (DAM), with an internship at Solidus Solutions where I built complete business applications, back end and front end, inside a large company’s IT. Now I’m studying Computer Engineering at UNED and shipping products of my own.',
      'I came to software from business: I studied Commerce and Marketing and spent a few months in Dublin on Erasmus, where I got used to working in English. So when I build something, I also think about who will use it and what the company needs from it. I also teach chess to children at a school in Pamplona, which keeps the habit of thinking a few moves ahead.',
    ],
    photoAlt: 'Andrii Chaika in Pamplona',
    eduTitle: 'Education',
    edu: [
      ['BSc Computer Engineering', 'UNED, Pamplona · 2026 — present'],
      ['Higher Diploma in Multiplatform App Development (DAM)', 'María Ana Sanz, Pamplona · 2024 — 2026'],
      ['Diploma in Commerce and Marketing', 'Colegio Técnico Carlos III, Pamplona · 2022 — 2024'],
    ],
    langTitle: 'Languages',
    langs: [
      ['Spanish', 'very high'],
      ['English', 'B2'],
      ['Russian', 'native'],
      ['Ukrainian', 'native'],
    ],
  },
  services: {
    label: 'What I can build for you',
    items: [
      ['Android and iOS apps', 'One app for both phones, from the first sketch to Google Play and the App Store.'],
      ['Online stores', 'Catalogue, cart and real card payments, on the web and on mobile.'],
      ['Admin panels', 'Manage products, orders and content yourself, without calling a developer.'],
      ['Backends and integrations', 'User accounts, data, maps, payments and AI features that keep working when a provider fails.'],
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Hiring, or have a project?',
    lede: 'Write to me either way. I reply in English, Spanish, Russian or Ukrainian.',
    hiringTitle: 'Hiring?',
    hiring: 'I’m looking for a full-time role as a full-stack or mobile developer: remote (EU/US), hybrid, or on-site with relocation. I hold a Spanish residence and work permit.',
    cvLink: 'View the CV',
    processTitle: 'Have a project? Here’s how it works',
    process: [
      'You tell me the idea, when you need it and, if you have one, a rough budget.',
      'I send you scope, timeline and price in writing.',
      'You follow the progress on your own phone or browser while I build it.',
    ],
    cta: 'Email me',
    cv: 'Download CV',
    copy: 'Copy email',
    copied: 'Copied',
  },
  footer: { made: 'Designed and built by Andrii Chaika with Astro, GSAP and Lenis.', top: 'Back to top' },
  cv: {
    title: 'CV — Andrii Chaika, Full-stack & Mobile Developer',
    description:
      'Resume of Andrii Chaika: full-stack and mobile developer (React Native, Java/Spring Boot, Next.js, PostgreSQL). Pamplona, Spain. Authorized to work in Spain.',
    headline: 'Full-stack & Mobile Developer · React Native · Java/Spring Boot',
    back: 'Back to the portfolio',
    download: 'Download PDF',
    workAuth: 'Authorized to work in Spain (TIE residence & work permit)',
    availability: 'Open to remote (EU/US), hybrid and relocation · CET (UTC+1)',
    summaryTitle: 'Summary',
    summary:
      'Full-stack and mobile developer: Java/Spring Boot, React, React Native and PostgreSQL. Delivered a paid e-commerce app and website for a client and built SpotCheck, a live platform for Android, iOS and web, both solo from database schema to release. Five-month internship in the IT department of an international manufacturer. Automated tests, Docker and CI/CD on every project.',
    skillsTitle: 'Skills',
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Freelance Full-stack & Mobile Developer',
        org: 'StyleSphere (private client)',
        url: 'https://stylesphere-beta.vercel.app/es',
        place: 'Remote',
        dates: 'Jun 2026 – Aug 2026',
        project: 'stylesphere',
        bullets: [],
      },
      {
        role: 'Software Developer (DAM internship)',
        org: 'Solidus Solutions',
        url: 'https://solidus.com/es/',
        place: 'Navarra, Spain',
        dates: 'Feb 2026 – Jun 2026',
        bullets: [
          'Developed complete internal business applications end to end, from data model and business logic to the user-facing screens.',
          'Worked inside the IT department of an international manufacturer with 1,400+ employees, integrating with existing systems, real users and company processes.',
          'Platform: Unisys Business Information Server (BIS, formerly MAPPER).',
        ],
      },
    ],
    otherTitle: 'Other experience',
    other: [
      {
        role: 'Chess Teacher',
        org: 'CEIP Vázquez de Mella Bayonne',
        url: 'https://cpvazquezdemella.web.educacion.navarra.es/',
        place: 'Pamplona, Spain',
        dates: 'Sep 2026 – present',
        bullets: [
          'Teach chess to primary-school children: strategy, calculation and planning several moves ahead, explained in simple terms.',
        ],
      },
    ],
    projectsTitle: 'Projects',
    live: 'Live demo',
    code: 'Code',
    privateCode: 'private code, available on request',
    projects: {
      spotcheck: {
        sub: 'Community skate-spot map · Android, iOS and web · solo, end to end',
        bullets: [
          'Designed and shipped the whole product solo: Spring Boot 3 / Java 21 REST API (72 endpoints), PostgreSQL + PostGIS (18 tables, 9 Flyway migrations), React web app and Expo/React Native app for Android and iOS.',
          'Built the auth layer: 15-minute JWTs, hashed rotating refresh-token families with reuse detection, “sign out everywhere”, Google sign-in (ID token and PKCE) and 25 Bucket4j rate-limit policies.',
          'Geospatial core on PostGIS: GIST index on geography with a test that asserts the query plan uses it, check-ins verified within 300 m, live counters pushed over WebSocket/STOMP only after commit.',
          'AI moderation pipeline for text and images (Groq with OpenAI fallback) and duplicate detection combining distance, trigram name similarity and photo comparison.',
          '160 JUnit tests on real PostGIS via Testcontainers; GitHub Actions CI with 4 jobs (backend, Docker image, web, mobile); non-root multi-stage Docker image, k6 load tests and verified daily backups.',
          'Web and mobile in 21 languages, including Arabic right-to-left, with a script that validates keys and placeholders across all locales.',
        ],
      },
      stylesphere: {
        sub: 'Fashion e-commerce · Android & iOS app + Next.js website · paid client project, built solo end to end',
        bullets: [
          'Built solo for a paying client: Expo/React Native app (34 screens), Next.js 16 website (52 routes) and a Supabase backend with 36 tables, 77 Row Level Security policies, 7 Edge Functions and 11 pg_cron jobs.',
          'Payments done right with Stripe: server-side cart re-pricing, signature-verified webhook with an idempotent pending → paid transition, refunds with idempotency keys and stock reservations.',
          'Business logic in PostgreSQL: promo codes, referrals, loyalty points, returns, reviews and abandoned-cart notifications through 27 triggers and scheduled jobs.',
          'Public demo admin panel: every visitor gets a sandbox enforced in the database (RLS and override views) and purged automatically.',
          'Test pyramid in CI: 1,082 pgTAP database assertions, 200+ Vitest tests, Jest, Playwright on desktop and mobile viewports and 7 Maestro flows; 4-job pipeline with E2E against a throwaway Supabase.',
          'Release-ready: Sentry with PII scrubbing on both clients, Android App Bundle via EAS to the Google Play internal track, 4 languages, SEO with hreflang and JSON-LD.',
        ],
      },
    },
    eduTitle: 'Education',
    erasmus: 'Erasmus+ in Dublin, Ireland, during the Commerce and Marketing diploma',
    langTitle: 'Languages',
  },
  apkPage: {
    back: 'Back to the portfolio',
    label: 'Install on Android',
    download: 'Download the APK',
    version: 'Version',
    size: 'Size',
    wifi: 'Best on Wi-Fi',
    steps: [
      'Tap “Download the APK” on your Android phone.',
      'Open the downloaded file. The first time, Android asks you to allow installs from your browser or file manager.',
      'Install and open the app. You can uninstall it whenever you like.',
    ],
    qrTitle: 'On a computer?',
    qrText: 'Scan the code with your phone camera to open this page there.',
    webAlt: 'Or try it in the browser, nothing to install:',
    demo: {
      spotcheck: 'No account needed: tap “Try the demo” on the sign-in screen.',
      stylesphere: 'Test payments with card 4242 4242 4242 4242 (any future date and CVC). Turn on the demo admin panel under “Account”.',
    },
    note: 'The APK is published on GitHub Releases. It doesn’t come from Google Play, so Android asks you to confirm before installing.',
  },
};

export default en;
