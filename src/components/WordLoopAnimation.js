import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const wordDiscussionTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: white;
  align-items: center;
`;

const Discussions = () => {
  const words = ['groups', 'author', 'title', 'genre', 'topics'];
  const [displayedWord, setDisplayedWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % words.length;
      setDisplayedWord(words[nextIndex]);
      setCurrentIndex(nextIndex);
    }, 1000); // Adjust the delay between each word

    return () => clearTimeout(timer);
  }, [currentIndex, words]);

  return (
    <wordDiscussionTitle>
      {displayedWord}
    </wordDiscussionTitle>
  );
};

export default Discussions;