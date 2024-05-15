import React from 'react';
import styled from 'styled-components';
import quizImage from '../assets/QuizImage.png';
import QuizBgImg from '../assets/QuizBgImg.png';
import { Link } from 'react-router-dom';

const TakeOurQuiz = () => {
    return (
        <Container>
          <QuizTitleContainer>
          <Title>Welcome to the Book Recommendation Quiz</Title>
          <Description>Take this quiz to discover books tailored to your preferences.</Description>
          </QuizTitleContainer>
          <QuizImageContainer>
          <QuizImage src={quizImage} alt="QuizImage" />
          <Link to="/quiz"><StartButton>Get Started</StartButton></Link>

          </QuizImageContainer>
            
        
        </Container>
      );
    };

    const Container = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 800px;
    background-image: url(${QuizBgImg}); // Set the background image
  background-size: cover;
  `;
    const QuizTitleContainer = styled.div`
    background-color: white;
    padding: 0px 20px;
    border-radius: 40px;
    margin-bottom: 20px;
    border: 5px solid #DDBFB5;
    margin-top: 70px;
    
    `;
  const Title = styled.h2`
  font-family: "Agbalumo", system-ui;
  font-weight: 400;
  font-style: normal;    
  color: #3E2D70;
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;

  `;
  
  const Description = styled.p`
  font-family: "Manrope", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;   
  color: #3E2D70;
    font-size: 25px;
    margin-bottom: 5px;
    text-align: center;
  `;
  const QuizImageContainer = styled.div`
    position: relative;
    margin-bottom: 0px;
`;

  const QuizImage = styled.img`
  width: 600px; 
  height: auto;
  margin-top: 73px;
  z-index:3
`;

const StartButton = styled.button`
font-family: "Manrope", sans-serif;
font-optical-sizing: auto;
font-weight: 700;
font-style: normal;
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px 60px;
    background: #F68AAF;
    color: white;
    border: 3px solid #FFF;
    border-radius: 20px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  
    &:hover {
      background-color: #CD6F90;
    }
  `;
 
  

export default TakeOurQuiz;
