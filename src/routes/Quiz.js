import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

// Define your quiz questions and answers
const quizData = [
  {
    id: 1,
    question: "What genre of books do you prefer?",
    choices: ["Mystery/Thriller", "Romance", "Science Fiction/Fantasy"]
  },
  {
    id: 2,
    question: "How long do you prefer your books to be?",
    choices: ["Short (less than 300 pages)", "Medium (300-500 pages)", "Long (more than 500 pages)"]
  },
  // Add more questions as needed
];

const Quiz = () => {
  const { questionId } = useParams();
  const [selectedAnswer, setSelectedAnswer] = useState('');

  const handleAnswerSelection = (answer) => {
    setSelectedAnswer(answer);
  };

  const currentQuestion = quizData.find(question => question.id === parseInt(questionId));

  return (
    <Container>
      <Question>{currentQuestion.question}</Question>
      <Choices>
        {currentQuestion.choices.map((choice, index) => (
          <Choice key={index} onClick={() => handleAnswerSelection(choice)} selected={selectedAnswer === choice}>
            {choice}
          </Choice>
        ))}
      </Choices>
      <NextButton disabled={!selectedAnswer}>
        {parseInt(questionId) < quizData.length ? (
          <Link to={`/quiz/${parseInt(questionId) + 1}`}>Next</Link>
        ) : (
          <Link to="/quiz/result">Finish</Link>
        )}
      </NextButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Question = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Choices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Choice = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? '#007bff' : 'transparent')};
  color: ${({ selected }) => (selected ? '#fff' : '#000')};
`;

const NextButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#007bff' : '#0056b3')};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default Quiz;


