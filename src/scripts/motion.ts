import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

declare global {
  interface Window {
    __motionReady?: boolean;
  }
}

const root = document.documentElement;
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Header turns solid once the hero is behind it (works with or without motion). */
const header = document.querySelector<HTMLElement>('[data-header]');
if (header && !header.classList.contains('always-solid')) {
  const onScroll = () => header.classList.toggle('is-solid', scrollY > 40);
  onScroll();
  addEventListener('scroll', onScroll, { passive: true });
}

/* Copy-email button */
document.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach((btn) => {
  const label = btn.textContent?.trim() ?? '';
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy ?? '');
      btn.textContent = btn.dataset.copied ?? label;
      setTimeout(() => (btn.textContent = label), 1800);
    } catch {
      location.href = `mailto:${btn.dataset.copy}`;
    }
  });
});

/* Split a plain-text element into masked words. The accessible name stays whole. */
function splitWords(el: HTMLElement): HTMLElement[] {
  const text = (el.textContent ?? '').trim();
  if (!el.hasAttribute('aria-label')) el.setAttribute('aria-label', text);
  el.textContent = '';
  const words: HTMLElement[] = [];
  text.split(/(\s+)/).forEach((part) => {
    if (!part.trim()) {
      el.append(part);
      return;
    }
    const mask = document.createElement('span');
    mask.className = 'word-mask';
    mask.setAttribute('aria-hidden', 'true');
    const word = document.createElement('span');
    word.className = 'word';
    word.textContent = part;
    mask.append(word);
    el.append(mask);
    words.push(word);
  });
  el.classList.add('is-split');
  return words;
}

if (!reduce) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: 'power3.out', duration: 0.85 });
  // Mobile browsers resize the viewport when the address bar hides; don't recalc on that.
  ScrollTrigger.config({ ignoreMobileResize: true });

  /* Smooth scroll only for mouse/trackpad. Touch devices keep native scrolling,
     which is smoother there and avoids fighting the browser. */
  const desktop = matchMedia('(min-width: 961px) and (pointer: fine)').matches;
  if (desktop) {
    const lenis = new Lenis({ lerp: 0.09, smoothWheel: true, anchors: { offset: -64 } });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* Hero intro: name rises through its mask, then copy, then the phones settle. */
  const name = document.querySelector<HTMLElement>('[data-hero-name]');
  if (name) {
    const words = [...name.querySelectorAll<HTMLElement>('span')].flatMap((line) => {
      const w = splitWords(line);
      line.removeAttribute('aria-label');
      return w;
    });
    name.classList.add('is-split');
    const tl = gsap.timeline({ delay: 0.1 });
    tl.from(words, { yPercent: 110, duration: 1, ease: 'expo.out', stagger: 0.09 })
      .from('[data-hero]', { autoAlpha: 0, y: 18, stagger: 0.07, duration: 0.7 }, 0.35)
      .from(
        '[data-hero-phone]',
        { autoAlpha: 0, y: desktop ? 80 : 32, duration: desktop ? 1.1 : 0.8, ease: 'expo.out', stagger: 0.12 },
        0.25,
      );
    // Phones drift apart slightly as the hero leaves (desktop only: scrubbing on touch stutters).
    if (desktop) gsap.to('[data-hero-phone]:first-child', {
      yPercent: -4,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
    });
    if (desktop) gsap.to('[data-hero-phone]:last-child', {
      yPercent: 4,
      ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 },
    });
  }

  /* Headings reveal word by word, once. */
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const words = splitWords(el);
    gsap.from(words, {
      yPercent: 110,
      duration: 0.55,
      ease: 'expo.out',
      stagger: 0.03,
      scrollTrigger: { trigger: el, start: 'top 95%', once: true, fastScrollEnd: true },
    });
  });

  /* Body content fades up; items inside a group stagger. */
  const revealed = new Set<Element>();
  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = [...group.querySelectorAll<HTMLElement>('[data-reveal]')];
    items.forEach((i) => revealed.add(i));
    gsap.set(items, { autoAlpha: 0, y: 14 });
    ScrollTrigger.batch(items, {
      start: 'top 95%',
      once: true,
      onEnter: (batch) => gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.04 }),
    });
  });
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
    if (revealed.has(el)) return;
    gsap.fromTo(
      el,
      { autoAlpha: 0, y: 14 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.45,
        scrollTrigger: { trigger: el, start: 'top 95%', once: true, fastScrollEnd: true },
      },
    );
  });

  /* Screens rail: a native horizontal scroller everywhere. While the chapter
     passes, the page scroll nudges it sideways, but it never takes it over: a
     swipe, trackpad or mouse drag moves it by hand and the drift carries on from
     there. With reduced motion it stays a plain swipe strip. */
  const mm = gsap.matchMedia();
  mm.add('all', () => {
    root.classList.add('rail-driven');
    const rails = [...document.querySelectorAll<HTMLElement>('[data-rail]')];
    const cleanups = rails.map((rail) => {
      const range = () => rail.scrollWidth - rail.clientWidth;
      let last = -1;
      const st = ScrollTrigger.create({
        trigger: rail,
        start: 'top bottom',
        end: 'bottom top',
        onUpdate: (self) => {
          if (last < 0) rail.scrollLeft = self.progress * range();
          else rail.scrollLeft += (self.progress - last) * range();
          last = self.progress;
        },
        onRefresh: () => { last = -1; },
      });

      // Mouse drag (touch and trackpads already scroll natively).
      let startX = 0;
      let startLeft = 0;
      let dragging = false;
      const down = (e: PointerEvent) => {
        if (e.pointerType !== 'mouse' || e.button !== 0) return;
        dragging = true;
        startX = e.clientX;
        startLeft = rail.scrollLeft;
        rail.classList.add('is-dragging');
      };
      const move = (e: PointerEvent) => {
        if (dragging) rail.scrollLeft = startLeft - (e.clientX - startX);
      };
      const up = () => {
        dragging = false;
        rail.classList.remove('is-dragging');
      };
      const noDrag = (e: Event) => e.preventDefault();
      rail.addEventListener('pointerdown', down);
      rail.addEventListener('dragstart', noDrag);
      addEventListener('pointermove', move);
      addEventListener('pointerup', up);
      return () => {
        st.kill();
        rail.removeEventListener('pointerdown', down);
        rail.removeEventListener('dragstart', noDrag);
        removeEventListener('pointermove', move);
        removeEventListener('pointerup', up);
      };
    });
    return () => {
      root.classList.remove('rail-driven');
      cleanups.forEach((fn) => fn());
    };
  });

  addEventListener('load', () => ScrollTrigger.refresh());
  document.fonts?.ready.then(() => ScrollTrigger.refresh());
}

window.__motionReady = true;
