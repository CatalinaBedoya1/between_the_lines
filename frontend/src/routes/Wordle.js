import React, { useState, useEffect } from 'react';
import './Wordle.css';
import WordleComponent from '../components/WordleComponent';
import leaderboard from '../assets/UpdatedLeaderboard.png';
import bookdle from '../assets/bookle.png';

const Wordle = () => {
    const [solutions, setSolutions] = useState([]);
    const [solution, setSolution] = useState(null);

    useEffect(() => {
        fetch('http://localhost:4000/wordle-data')
            .then(res => res.json())
            .then(data => {
                console.log('Data from server:', data);
                if (data && data.solutions && data.solutions.length > 0) {
                    setSolutions(data.solutions);
                    const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)];
                    console.log('Random solution:', randomSolution);
                    if (randomSolution && randomSolution.word) {
                        setSolution(randomSolution.word);
                    } else {
                        console.error('Invalid data format:', randomSolution);
                    }
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => {
                console.error('Error fetching wordle data:', error);
            });
    }, []);

    return (
        <div>

        <img className='bookdle-img' src={bookdle} alt='header' />

        <div className='game-container'>
            <div className='wordle-container'>            
                <div className='wtitle'>Bookdle</div>
                <div className='wbody'>
                    Guess the word of the day!
                </div>

                {solution && <WordleComponent solution={solution} />}
            </div>

            <div className='side-container'>
            <div className='wtitle'>Bookdle History</div>
            <div className='wbody'>
                    Yesterday's Bookdle: 
                    <div className='wtitle2'>Novel</div>
                    <br></br>
                    1% of users guessed in 1 turn
                    <br></br>
                    5% of users guessed in 2 turns
                    <br></br>
                    8% of users guessed in 3 turns
                    <br></br>
                    17% of users guessed in 4 turn
                    <br></br>
                    20% of users guessed in 5 turns
                    <br></br>
                    33% of users guessed in 6 turns
                    <br></br>
                    
                </div>
            </div>


        </div>

        <img className='leaderboard-img' src={leaderboard} alt='leaderboard' />
        </div>


    );
};

export default Wordle;




