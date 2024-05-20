import React, { useEffect, useState } from 'react';
import wordleHook from '../hooks/WordleHook';
import WordleGrid from './WordleGrid';
import WordleKeypad from './WordleKeypad';
import WordleModal from './WordleModal';

export default function WordleComponent({ solution }) {
    const {currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys} = wordleHook(solution);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
      window.addEventListener('keyup', handleKeyup);

      if (isCorrect){
        // console.log('congrats, you won!');
        setTimeout(() => setShowModal(true), 2000);
        window.removeEventListener('keyup',handleKeyup);
      }

      if (turn > 5) {
        // console.log('unlucky, out of guesses :(');
        setTimeout(() => setShowModal(true), 2000);
        window.removeEventListener('keyup',handleKeyup);
      }

      return () => window.removeEventListener('keyup',handleKeyup);
    },[handleKeyup, isCorrect])


    // useEffect(() => {
    //   console.log(guesses, turn, isCorrect)
    // },[guesses, turn, isCorrect])

  return (
    <div>
      solution = {solution}
      <br></br>
      current guess = {currentGuess}
      <WordleGrid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
      <WordleKeypad usedKeys={usedKeys}/>
      {showModal && <WordleModal isCorrect={isCorrect} turn={turn} solution={solution}/>}
    </div>
  
  )
}
