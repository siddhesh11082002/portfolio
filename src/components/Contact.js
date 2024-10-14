import React, { useRef } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

const Contact = () => {
  const buttonRef = useRef();

  const handleHover = () => {
    gsap.to(buttonRef.current, { scale: 1.1, duration: 0.2 });
  };

  const handleOut = () => {
    gsap.to(buttonRef.current, { scale: 1, duration: 0.2 });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required />
        <button
          ref={buttonRef}
          onMouseEnter={handleHover}
          onMouseLeave={handleOut}
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
