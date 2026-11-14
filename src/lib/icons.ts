// One stroke icon set (24px grid, 1.8 stroke) so arrows are drawn, not typed glyphs.
const svg = (d: string) =>
  `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;

export const icon = {
  external: svg('M7 17 17 7M8 7h9v9'),
  download: svg('M12 4v12m-5-5 5 5 5-5M5 20h14'),
  back: svg('M19 12H5m6-6-6 6 6 6'),
  swipe: svg('M4 12h16M8 8l-4 4 4 4M16 8l4 4-4 4'),
};
