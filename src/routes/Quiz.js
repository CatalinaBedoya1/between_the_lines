import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Quiz = () => {
  const [genre, setGenre] = useState('');
  const [length, setLength] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);

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
      options: ["Comples and morally ambiguous", "Relatable and everyday people", "Larger-than-life and heroic"]
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

  const handleGenreChange = (option) => {
    setGenre(option);
    setSelectedOption(option);
  };

  const handleLengthChange = (option) => {
    setLength(option);
    setSelectedOption(option);
  };

  const handleQuizSubmit = async () => {
    try {
      // Fetch book recommendations from Google Books API based on user preferences
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${genre}+${length}&key=${process.env.REACT_APP_GOOGLE_BOOKS_API_KEY}`
      );
      setRecommendations(response.data.items);
      setShowRecommendations(true); // Show recommendations after submitting quiz
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedOption('');
  };

  return (
    <Container>
      <QuizContent>
        {currentQuestion < quizQuestions.length ? (
          <>
            <QuestionBubble>
              <h3>{quizQuestions[currentQuestion].question}</h3>
            </QuestionBubble>
            <OptionsContainer>
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <OptionBubble
                  key={index}
                  onClick={() => {
                    if (currentQuestion === 0) handleGenreChange(option);
                    else handleLengthChange(option);
                  }}
                  selected={selectedOption === option}
                >
                  {option}
                </OptionBubble>
              ))}
            </OptionsContainer>
            <NextButton onClick={handleNextQuestion}>Next</NextButton>
          </>
        ) : (
          <SubmitButton onClick={handleQuizSubmit}>Submit</SubmitButton>
        )}
      </QuizContent>

      {/* Display recommendations only after submitting quiz */}
      {showRecommendations && (
        <Recommendations>
          <h3>Recommendations</h3>
          <ul>
            {recommendations.map((book) => (
              <li key={book.id}>
                <strong>Title:</strong> {book.volumeInfo.title}<br />
                <strong>Author:</strong> {book.volumeInfo.authors.join(', ')}<br />
                {/* Add more book details */}
              </li>
            ))}
          </ul>
        </Recommendations>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const QuizContent = styled.div`
  text-align: center;
`;

const QuestionBubble = styled.div`
  display: inline-block;
  background-color: #f0f0f0;
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
`;

export default Quiz;

