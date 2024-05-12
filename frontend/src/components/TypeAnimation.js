import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');
  const phrases = [
    'Hello!',
    'Ciao!',
    '你好!',
    'Здравейте!',
    'Hola!',
    'Bonjour!',
    'नमस्ते!'
  ];

  useEffect(() => {
    const typingAnimation = () => {
      const currentPhrase = phrases[textIndex];
      setText(currentPhrase);
      setTextIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    };

    const interval = setInterval(typingAnimation, 2000);

    return () => clearInterval(interval);
  }, [textIndex, phrases]);

  return (
    <div style={{ fontSize: '2em' }}>
      {text}
    </div>
  );
};

export default AnimatedText;

