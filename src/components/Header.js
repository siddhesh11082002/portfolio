import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      '.header-title',
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' }
    );
  }, []);

  return (
    <header className="header">
      <h1 className="header-title">Siddhesh Talawadekar</h1>
      <h2 className="header-subtitle">MERN Stack Developer</h2>
    </header>
  );
};

export default Header;
