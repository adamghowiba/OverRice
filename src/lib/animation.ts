import { gsap } from 'gsap';

export const setupHeaderAnimation = () => {
  let timeline = gsap.timeline();

  timeline.set('.bottom__bar__item', { opacity: 0 });
  timeline.add(
    gsap.from('.hero__headings__h1', { delay: 0.2, opacity: 0, yPercent: -5, duration: 0.5, ease: 'power1' })
  );
  timeline.add(
    gsap.from('.hero__headings__p, .hero__headings__button-wrap, .subtitle--hero', {
      delay: 0.3,
      opacity: 0,
      xPercent: -10,
      duration: 0.5,
      ease: 'power1',
      stagger: 0.4,
    })
  );
  timeline.add(setupQuickAction, '<');
};

export const setupQuickAction = () => {
  let timeline = gsap.timeline();
  timeline.add(gsap.set('.bottom__bar__item', { opacity: 1 }));
  timeline.add(gsap.from('.bottom__bar__item', { opacity: 0, stagger: 0.2 }));

  return timeline;
};
