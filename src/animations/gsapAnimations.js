import { gsap } from 'gsap';

export const fadeInUp = (element, delay = 0) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 50 },
    { opacity: 1, y: 0, duration: 1, delay, ease: 'power2.out' }
  );
};
