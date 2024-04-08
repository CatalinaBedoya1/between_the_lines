import React, { useEffect } from 'react';
import styled from 'styled-components';

const ScrollAnimation = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.scroll-animation');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition < windowHeight * 0.75) {
          element.classList.add('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
   
  );
};

const Container = styled.div`
  height: 1000px; /* Adjust the height as needed */
`;

const Content = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.5s, transform 0.5s;
  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

export default ScrollAnimation;
