import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const WordDiscussionTitle = styled.h1`
  font-size: 40px;
  font-family: Roboto;
  color: white;
  align-items: center;
`;

const Discussions = () => {
  const words = ['Groups', 'Author', 'Title', 'Genre', 'Topics'];
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
    <WordDiscussionTitle>
      {displayedWord}
    </WordDiscussionTitle>
  );
};

export default Discussions;