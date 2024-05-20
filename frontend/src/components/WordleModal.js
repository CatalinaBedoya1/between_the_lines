import React from 'react'

export default function WordleModal({ isCorrect, turn, solution}) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>You Win!</h1>
                <p className='solution'>{solution}</p>
                <p>You found the solution in {turn} guesses :D</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>You Lost!</h1>
                <p className='solution'>{solution}</p>
                <p>Better luck next time :D</p>
            </div>
        )}
    </div>
  )
}
