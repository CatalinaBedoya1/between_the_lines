import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import quizImage from '../assets/QuizImage.png';

const TakeOurQuiz = () => {
    return (
        <Container>
          <Title>Welcome to the Book Recommendation Quiz</Title>
          <Description>Take this quiz to discover books tailored to your preferences.</Description>
          <QuizImage src={quizImage} alt="QuizImage" />
          <Link to="/quiz">
            <StartButton>Get Started</StartButton>
          </Link>
        </Container>
      );
    };

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #DCE9EF
  `;
  
  const Title = styled.h2`
    font-size: 42px;
    margin-bottom: 20px;
  `;
  
  const Description = styled.p`
    font-size: 25px;
    margin-bottom: 40px;
  `;
  const QuizImage = styled.img`
  width: 250px; /* Adjust the width as needed */
  height: 200px;
  margin-bottom: 20px;
  z-index:3
`;
  
  const StartButton = styled.button`
    padding: 20px 30px;
    background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #0056b3;
    }
  `;
  

export default TakeOurQuiz;
