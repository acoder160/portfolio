import type es from './es';

const en: typeof es = {
  htmlLang: 'en',
  meta: {
    title: 'Andrii Chaika — Full-stack & mobile developer',
    description:
      'Android and iOS apps, websites and the backend behind them, end to end. Two shipped products: SpotCheck (a skate spot map) and StyleSphere (a fashion store with Stripe).',
  },
  skip: 'Skip to content',
  nav: { work: 'Work', stack: 'Stack', about: 'About', contact: 'Contact', menu: 'Menu', close: 'Close' },
  langName: 'English',
  otherLang: { code: 'es', label: 'ES', name: 'Español' },
  hero: {
    role: 'Full-stack & mobile developer',
    lede:
      'I design, build and ship Android and iOS apps and websites, together with the backend that runs them. From the idea to an APK you can install today.',
    ctaWork: 'See the work',
    ctaContact: 'Get in touch',
    facts: ['Pamplona, Spain', 'ES · EN · RU · UK', 'Open to projects'],
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
        'What this means for you: apps with maps and location, user content moderated by AI, real-time data and several languages from day one.',
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
        role: 'Full development of app, website and backend',
        platforms: 'Android and iOS (Expo) · Web (Next.js)',
        backend: 'Supabase + Stripe',
        languages: 'ES · EN · RU · UA',
      },
      benefit:
        'What this means for you: your own store on the web and on mobile, real payments with Stripe, and a panel to manage products and orders yourself.',
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
      ['Data', 'PostgreSQL, PostGIS, Row Level Security, Flyway, hand-written SQL'],
      ['Integrations', 'Stripe, Cloudinary, Google OAuth, Groq and OpenAI, Open-Meteo'],
      ['Quality & delivery', 'Docker, GitHub Actions, Render, Vercel, Neon, Sentry, JUnit, Testcontainers, Jest, Vitest, Playwright, Maestro'],
    ],
  },
  about: {
    label: 'About',
    title: 'Hi, I’m Andrii.',
    body: [
      'I live in Pamplona, Spain. I did a Higher Diploma in Multiplatform App Development (DAM) and now I’m studying Computer Engineering at UNED.',
      'Before switching to computing, I studied Business and Marketing. I spent a few months in Dublin on Erasmus, where I gained the confidence to work in English, and when I came back I worked at Solidus Solutions here in Pamplona. Having been through that means that when I code, I don’t only look at the code, but also at who’s going to use the app and what the company is after.',
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
      ['Android and iOS apps', 'From the idea to Google Play and the App Store, with React Native and Expo.'],
      ['Online stores', 'Catalogue, cart and real Stripe payments, on the web and on mobile.'],
      ['Admin panels', 'To manage products, orders and content without touching code.'],
      ['APIs and backends', 'Authentication, databases, real-time features and AI integrations.'],
    ],
  },
  contact: {
    label: 'Contact',
    title: 'Tell me about your project.',
    lede: 'Write to me with what you want to build, when you need it and, if you have one, a rough budget. I reply in English, Spanish, Russian or Ukrainian.',
    processTitle: 'How we work',
    process: [
      'You tell me the idea and we talk about what is really needed.',
      'I send you scope, timeline and price in writing.',
      'You follow the progress on your own phone or browser while I build it.',
    ],
    cta: 'Email me',
    copy: 'Copy email',
    copied: 'Copied',
  },
  footer: { made: 'Designed and built by Andrii Chaika with Astro, GSAP and Lenis.', top: 'Back to top' },
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
