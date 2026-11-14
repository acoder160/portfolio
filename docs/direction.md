# Design direction

- **Thesis:** two shipped products, shown as two magazine chapters inside a near-black editorial shell.
  Each chapter speaks its product's own language instead of a generic portfolio template.
- **Type:** Archivo Variable (weight + width axes) for everything; IBM Plex Mono for labels and metadata.
  SpotCheck chapter = width 62 / weight 900 (close to the app's Big Shoulders). StyleSphere chapter =
  width 62 / weight 200 (close to the store's hairline headlines).
- **Color:** shell #0e0e0d / #ece9e3. SpotCheck: concrete #c9c9c4 + the app's five paint colors.
  StyleSphere: charcoal #171716 + bone + one red #f4625e. Contact: paint pink #ff4fa3 as the one signal.
- **Sections:** hero (name + two real phones) → work intro → SpotCheck → StyleSphere → stack → about
  (paper) → services (oversized outline type) → contact (pink) → footer.
- **Motion:** GSAP + ScrollTrigger, Lenis as the only smooth-scroll engine. Hero name rises through a mask,
  headings reveal word by word once, body fades up, screenshot rails drift sideways with the page scroll on
  wide fine-pointer screens (native horizontal scroll elsewhere). Everything is static under
  `prefers-reduced-motion`, and content shows if the script never runs (3 s fallback).
- **Three.js:** not used; a shader would add nothing to the story.
- **Assets:** only real screenshots of the two apps (phone via adb, web via Playwright + Edge), the author's own
  photo, CSS device frames. No stock, no invented testimonials, logos or numbers.
