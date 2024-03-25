import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for styling
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #DCE9EF;
`;

const QuizContent = styled.div`
  text-align: center;
`;

const QuestionBubble = styled.div`
  display: inline-block;
  background-color: #FFFFFF;
  border-radius: 20px;
  padding: 60px;
  margin-bottom: 60px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
`;

const OptionBubble = styled.div`
  display: inline-block;
  background-color: ${({ selected }) => (selected ? '#007bff' : '#c0c0c0')};
  color: ${({ selected }) => (selected ? '#ffffff' : '#000000')};
  border-radius: 20px;
  padding: 10px 20px;
  margin: 0 10px 10px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ selected }) => (selected ? '#007bff' : '#a0a0a0')};
  }
`;

const NextButton = styled.button`
  margin-top: 20px;
  padding: 10px 40px;
  border-radius: 20px;
  font-size: 20px;
  transition: background-color 0.3s ease; /* Add transition for smooth effect */

  &:hover {
    background-color: #0056b3; /* Change background color on hover */
  }
`;

const SubmitButton = styled.button`
  margin-top: 20px;
`;

const Recommendations = styled.div`
  margin-top: 40px;
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const RecommendationItem = styled.div`
  margin-bottom: 20px;
`;

const RecommendationTitle = styled.h4`
  margin-bottom: 10px;
`;

const RecommendationDetails = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const RecommendationImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const Quiz = () => {
  const [userPreferences, setUserPreferences] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const handleAnswerSelection = (questionId, answer) => {
    setUserPreferences({ ...userPreferences, [questionId]: answer });
  };

  const quizQuestions = [
    {
      id: 1,
      question: "What genre of books do you prefer?",
      options: ["Mystery/Thriller", "Romance", "Science Fiction/Fantasy", "Historical Fiction", "Non-fiction", "Biography/Memoir", "Horror", "Contemporary Fiction", "Classic Literature"]
    },
    {
      id: 2,
      question: "How long do you prefer your books to be?",
      options: ["Short (less than 300 pages)", "Medium (300-500 pages)", "Long (more than 500 pages)"]
    },
    {
      id: 3,
      question: "How fast do you typically read?",
      options: ["Slow (1-2 weeks per book)", "Moderate (3-4 days per book)", "Fast (1-2 days per book)"]
    },
    {
      id: 4,
      question: "What type of writing style do you enjoy?",
      options: ["Descriptive and lyrical", "Concise and to the point", "Dialogue-heavy and conversational"]
    },
    {
      id: 5,
      question: "What kind of characters do you prefer?",
      options: ["Complex and morally ambiguous", "Relatable and everyday people", "Larger-than-life and heroic"]
    },
    {
      id: 6,
      question: "What type of plot do you find most engaging?",
      options: ["Twisty and full of surprise", "Slow-burn and character-driven", "Fast-paced and action-packed"]
    },
    {
      id: 7,
      question: "What settings do you prefer in books?",
      options: ["Urban and modern cities","Rural and countryside","Historical periods and settings"]
    }
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleQuizSubmit = () => {
    setIsSubmitted(true);
    // Construct search terms from user preferences
    const searchTerms = Object.values(userPreferences).join('+');
    // Fetch book recommendations from Google Books API based on user preferences
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerms}&key=AIzaSyCSGZabU9B0s_HlH9cmg7BBCjxFQZl0x3g`)
      .then(response => response.json())
      .then(result => {
        // Extract the first book recommendation from the response
        const firstBook = result.items[0];
        // Set recommendation state with the first book recommendation
        setRecommendation(firstBook);
      })
      .catch(error => {
        console.error('Error fetching recommendations:', error);
      });
  };

  return (
    <Container>
      <QuizContent>
        <QuestionBubble>
          <h3>{quizQuestions[currentQuestion].question}</h3>
          <OptionsContainer>
            {quizQuestions[currentQuestion].options.map((option) => (
              <OptionBubble
                key={option}
                selected={userPreferences[quizQuestions[currentQuestion].id] === option}
                onClick={() => handleAnswerSelection(quizQuestions[currentQuestion].id, option)}
              >
                {option}
              </OptionBubble>
            ))}
          </OptionsContainer>
          {currentQuestion < quizQuestions.length - 1 && (
            <NextButton onClick={handleNextQuestion}>Next</NextButton>
          )}
          {currentQuestion === quizQuestions.length - 1 && (
            <SubmitButton onClick={handleQuizSubmit}>Submit</SubmitButton>
          )}
        </QuestionBubble>
        {isSubmitted && recommendation && (
          <Recommendations>
            <RecommendationItem>
              <RecommendationTitle>{recommendation.volumeInfo.title}</RecommendationTitle>
              <RecommendationDetails>
                <strong>Author:</strong> {recommendation.volumeInfo.authors.join(', ')}<br />
                {/* Add more book details */}
              </RecommendationDetails>
              <RecommendationImage
                src={recommendation.volumeInfo.imageLinks.thumbnail}
                alt={recommendation.volumeInfo.title}
              />
            </RecommendationItem>
          </Recommendations>
        )}
      </QuizContent>
    </Container>
  );
};

export default Quiz;