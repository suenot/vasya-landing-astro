/**
 * Scroll-triggered motion. Uses IntersectionObserver (no scroll listeners).
 * Needs the `js` class on <html>, which index.astro sets only when the user
 * has not asked for reduced motion.
 */
export function initMotion(): void {
  const root = document.documentElement;
  if (!root.classList.contains('js')) return;

  // Product mockup: start the chat story the first time it is mostly visible.
  const mockup = document.querySelector<HTMLElement>('.appMockup');
  if (mockup) {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          mockup.classList.add('play');
          io.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(mockup);
  }

  // Section titles and cards: reveal in reading order, then hand hover
  // transitions back to the original card styles.
  const groups: Array<[string, number]> = [
    ['.sectionTitle', 1],
    ['.featuresGrid', 3],
    ['.downloadTitle, .downloadSubtitle', 1],
    ['.downloadGrid', 3],
    ['.allReleasesLink', 1],
  ];
  const targets: HTMLElement[] = [];
  for (const [selector, cols] of groups) {
    document.querySelectorAll<HTMLElement>(selector).forEach((node, idx) => {
      const items =
        cols > 1 ? Array.from(node.children).filter((c): c is HTMLElement => c instanceof HTMLElement) : [node];
      items.forEach((el, i) => {
        el.style.setProperty('--i', String(cols > 1 ? i % cols : idx));
        el.classList.add('reveal');
        targets.push(el);
      });
    });
  }

  const revealIo = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        el.classList.add('in');
        revealIo.unobserve(el);
        el.addEventListener(
          'transitionend',
          (ev) => {
            if (ev.propertyName === 'opacity') el.classList.remove('reveal', 'in');
          },
          { once: false },
        );
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
  );
  targets.forEach((el) => revealIo.observe(el));
}
