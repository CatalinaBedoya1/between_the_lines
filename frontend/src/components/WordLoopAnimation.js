import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WordDiscussionTitle = styled.h1`
  font-size: 40px;
  font-family: Manrope;
  color: white;
  align-items: center;
  position: relative; 
`;

const Cursor = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 10px;
  background-color: white;
  animation: blink 0.8s infinite; /* Blink animation */
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const WordLoopAnimation = () => {
  const words = ['Groups', 'Author', 'Title', 'Genre', 'Topics'];
  const [displayedWord, setDisplayedWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (charIndex < words[currentIndex].length) {
          setDisplayedWord(prevWord => prevWord + words[currentIndex][charIndex]);
          setCharIndex(prevIndex => prevIndex + 1);
        } else {
          setIsTyping(false);
          setTimeout(() => setIsTyping(true), 1000); 
        }
      } else {
        if (displayedWord.length > 0) {
          setDisplayedWord(prevWord => prevWord.slice(0, -1));
        } else {
          setCurrentIndex(prevIndex => (prevIndex + 1) % words.length);
          setCharIndex(0);
        }
      }
    }, 150); // Typing speed

    return () => clearTimeout(timer);
  }, [charIndex, currentIndex, displayedWord, isTyping, words]);

  return (
    <WordDiscussionTitle>
      {displayedWord}
      {isTyping && <Cursor />} 
    </WordDiscussionTitle>
  );
};

export default WordLoopAnimation;




