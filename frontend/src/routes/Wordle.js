import React, { useState, useEffect } from 'react';

import WordleComponent from '../components/WordleComponent';

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
            <br></br>
            <h1>wordle</h1>
            {solution && <WordleComponent solution={solution} />}
        </div>
    );
};

export default Wordle;




