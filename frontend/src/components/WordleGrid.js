import React from 'react'
import WordleRow from './WordleRow'

export default function WordleGrid({ currentGuess, guesses, turn }) {
  return (
    <div>
        {guesses.map((g, i) => {

            if (turn === i) {
                return <WordleRow key ={i} currentGuess={currentGuess}/>
            }

            return <WordleRow key={i} guess={g}/>
        })}
    </div>
  )
}
