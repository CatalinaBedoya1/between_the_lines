import React, { useRef, useEffect, useState } from 'react';
import '../App.css';

const ScrollReveal = ({ children }) => {
  const revealRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const revealOnScroll = () => {
      const revealPosition = revealRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (revealPosition < windowHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', revealOnScroll);

    return () => {
      window.removeEventListener('scroll', revealOnScroll);
    };
  }, []);

  return (
    <div className={isVisible ? 'fade-in visible' : 'fade-in'} ref={revealRef}>
      {children}
    </div>
  );
};

export default ScrollReveal;
