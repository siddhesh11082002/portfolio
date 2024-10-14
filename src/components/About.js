import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        I am a MERN Stack Developer with experience in building dynamic web applications...
      </p>
    </section>
  );
};

export default About;
