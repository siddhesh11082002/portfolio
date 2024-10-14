import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollTrigger = (ref, animation) => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ref.current,
      start: 'top 75%',
      onEnter: () => animation(),
    });
  }, [ref, animation]);
};
