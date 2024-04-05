import React, { useState, useEffect, useCallback } from 'react';
import styled, { keyframes } from 'styled-components';




// Define your book data
const books = [
  //romance
  { 
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    length: 'Medium',
    pace: 'Moderate',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'Slow-burn and character-driven',
    settings: 'Rural and countryside',
    description: 'A classic romance novel featuring the strong-willed Elizabeth Bennet and the enigmatic Mr. Darcy.'
  },
  {
    title: 'Twisted Love',
    author: 'Ana Huang',
    genre: 'Romance',
    length: 'Medium',
    pace: 'Moderate',
    writingStyle: 'Descriptive and engaging',
    characters: 'Complex and multidimensional',
    plot: 'Gripping and full of twists and turns',
    setting: 'Urban Landscape',
    description: 'Twisted Love” by Ana Huang is a contemporary romance novel and the first book in the ‘Twisted’ series. The narrative, set against the backdrop of four close friends – Ava, Bridget, Jules, and Stella, focuses primarily on the intense romance between Ava Chen and Alex Volkov. Their story is one of passion, facing the demons of their pasts, and the complex dynamics of love..'
   },
   {
   title: 'Twisted Games',
    author: 'Ana Huang',
    genre: 'Romance',
    length: 'Medium',
    pace: 'Fast',
    writingStyle: 'Dialogue-heavy and conversational',
    characters: 'Complex and morally ambiguous',
    plot: 'Slow burn and character driven',
    settings: 'Urban and modern city',
    description: 'A contemporary royal bodyguard romance that follows Princess Bridget von Ascheburg and her bodyguard Rhy Larsen, as they navigate the challenges of duty and desire. As Bridget yearns for freedom and Rhys wrestles with his professional obligations, their forbidden attraction sparks a perilous dance between loyalty and longing. With political tensions mounting and their secrets threatening to unravel, they must confront the consequences of their illicit affair. This is book 2 in the Twisted Series, but may be read as a standalone.',
   },
   {
    title: 'Twisted Hate',
    author: 'Ana Huang',
    genre: 'Romance',
    length: 'Long',
    pace: 'Moderate',
    writingStyle: 'Dialogue-heavy and conversational',
    characters: 'Complex and morally ambiguous',
    plot: 'Slow burn and character driven',
    settings: 'Urban and modern city',
    description: 'The 3rd book in the Twisted Series follows future doctor Josh Chen and fiery redhead Jules Ambrose in a heated enemies-with-benefits arrangement, swearing off love. As their relationship deepens, they confront their pasts and must decide whether to embrace their unexpected connection or risk losing everything. This captivating tale explores passion, redemption, and the transformative power of love and can be read as a standalone.',
    },
   {
    title: 'Twisted Lies',
    author: 'Ana Huang',
    genre: 'Romance',
    length: 'Long',
    pace: 'Moderate',
    writingStyle: 'Concise and to the point',
    characters: 'Complex and morally ambiguous',
    plot: 'Twisty and full of surprises',
    settings: 'Urban and modern city',
    description: 'Twisted Lies is about Christian Harper, a charming yet deadly man, who is drawn to Stella Alonso, a shy woman with a troubled past. Despite his dark nature, Christian offers Stella a deal she cant refuse, sparking a passionate and dangerous romance. As secrets unravel, their love becomes tainted by lies, threatening to destroy them both. This is the last and final installment of the Twisted Series and can be read as a standalone.'
    },
   
   //Sci-fi
  {
    title: 'Steelheart',
    author: 'Brandon Sanderson',
    genre: 'Science fiction/ fantasy',
    length: 'Medium',
    pace: 'Moderate',
    writingStyle: 'Concise and to the point',
    characters: 'Larger than life and heroic',
    plot: 'Fast-paced and action-packed',
    setting: 'Urban and modern city',
    description: 'An action-packed urban fantasy follows a group of rebels, the Reckoners, as they challenge the tyrannical rule of superpowered beings known as Epics.In their daring mission, they encounter danger, betrayal, and unexpected twists in their quest for justice and freedom.',
   },
   //classics
   {
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    genre: 'Gothic fiction/Romance/Classic',
    length: 'Medium',
    pace: 'Moderate',
    writingStyle: 'Evocative and atmospheric',
    characters: 'Complex',
    plot: 'Intricate and multi-generational, centered around themes of love, revenge, and redemption',
    setting: 'desolate moorland of Yorkshire, England',
    description: 'Wuthering Heights is a timeless classic that delves into the passionate and tumultuous relationships between the inhabitants of two neighboring houses, Wuthering Heights and Thrushcross Grange. The story unfolds through the eyes of the narrator, Mr. Lockwood, as he becomes entangled in the dark history of the Earnshaw and Linton families. Emily Brontës masterful prose and vivid depiction of the Yorkshire moors create an atmospheric backdrop for the intense emotions and moral conflicts that drive the narrative forward. Wuthering Heights explores themes of love, revenge, and the destructive power of obsession, leaving a lasting impact on readers with its haunting portrayal of human nature.'
   },
   //mystery
   { 
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Mystery/Thriller',
    length: 'Medium',
    pace: 'Moderate',
    writingStyle: 'Twisty and full of surprise',
    characters: 'Complex and morally ambiguous',
    plot: 'Twisty and full of surprise',
    settings: 'Urban and modern cities',
    description: 'A gripping psychological thriller about a woman who disappears on her fifth wedding anniversary.'
  },
  {
  title: 'The Silent Patient',
  author: 'Alex Michaelides',
  genre: 'Mystery/Thriller',
  length: 'Medium',
  pace: 'Moderate',
  writingStyle: 'Descriptive and lyrical',
  characters: 'Complex and morally ambiguous',
  plot: 'Twisty and full of surprise',
  settings: 'Urban and modern city',
  description: 'A gripping psychological thriller that follows the story of Alicia Berenson, a talented artist who inexplicably murders her husband and then stops speaking. Confined to a psychiatric facility, she becomes the obsession of Theo Faber, a psychotherapist determined to unravel the mystery behind her silence. Theo delves deeper into Alicias past and psyche, he uncovers shocking secrets that force him to confront his own demons.', 
  },

  //Memoir
  {
    title: 'Finding Me',
    author: 'Viola Davis',
    genre: 'Biography/Memoir',
    length: 'Medium',
    pace: 'Moderate',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: "This memoir follows Viola Davis journey as she reflects on her life's challenges and shares the truth of reinventing our narratives to fit into a competitive and judgmental society. From humble beginnings to her success in the limelight, it's a raw story of resilience, hard work, and inspiration that illustrates the struggles and triumphs of finding oneself.", 
  },
  {
    title: 'Thicker than Water',
    author: 'Kerry Washington',
    genre: 'Biography/Memoir',
    length: 'Medium',
    pace: 'Moderate',
    writingStyle: 'Descriptive and lyrical',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: "Kerry Washington's life took a drastic turn when she received a text that shattered her identity. Her memoir offers readers a deeply personal account of her journey, revealing her roles as a mother, daughter, wife, artist, and advocate. From childhood traumas to stardom and political advocacy, Washington shares the challenges she faced and the mentors who guided her. Through her candid narrative, she invites others to explore their own identities and find a deeper sense of belonging.",
  },
  {
    title: "I'm Glad My Mom Died",
    author: 'Jennette McCurdy',
    genre: 'Biography/Memoir',
    length: 'Medium',
    pace: 'Slow',
    writingStyle: 'Concise and to the point',
    characters: 'Relatable and everyday people',
    plot: 'A journey of self-discovery and personal growth',
    settings: 'One or more of the above',
    description: "Jennette McCurdy's memoir details her tumultuous journey from child actress to fame and the personal struggles that accompanied it. From her mother's relentless pursuit of stardom to the pressures of maintaining a public image, she shares the raw and unfiltered reality behind the glitz and glamour. Battling eating disorders, addiction, and unhealthy relationships, she grapples with anxiety and self-loathing amidst the spotlight. Tragically, her mother's passing only exacerbates these issues, leading McCurdy to a breaking point. Yet, through therapy and self-discovery, she finds the courage to forge her own path and prioritize her well-being.",

  },
  //Historical Fiction
  {

  },
  {

  },
  //Fantasy
  {

  },
  {},
  //Non-fiction


  //Contemporary Fiction

  //Horror
{
  title: 'Mexican Gothic',
  author: 'Silvia Moreno-Garcia',
  genre: 'Horror',
  length: 'Medium',
  pace: 'Fast',
  writingStyle: 'Descriptive and lyrical',
  characters: 'Complex and morally ambiguous',
  plot: 'Twisty and full of surprise',
  settings: 'Rural and countryside',
  description: "Set in 1950s Mexico, 'Mexican Gothic' follows socialite Noemí Taboada as she investigates strange occurrences in a remote mansion where her cousin resides. With elements of horror and psychological suspense, this atmospheric novel explores themes of family secrets, colonialism, and the supernatural."
},
  
];
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const slideIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;


const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: 100vh; /* Set height to fill the viewport */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const QuestionContainer = styled.div`
  animation: ${slideIn} 0.5s ease forwards;
  opacity: 0;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;

  &.active {
    opacity: 1;
  }
`;
const AnswerContainer = styled.div`
  margin-top: 10px;
`;
const AnswerButton = styled.button`
  padding: 10px 20px;
  background: #FFF;
  color: #000;
  border: 2px solid #000;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 10px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background: #000;
    color: #FFF;
  }

  &.selected {
    background: #000;
    color: #FFF;
  }
`;

const BookImage = styled.img`
  max-width: 200px;
  display: block;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease forwards;
`;

const SeeResultsButton = styled.button`
  padding: 10px 20px;
  background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
  color: #FFF;
  border: none;
  cursor: pointer;
  border-radius: 20px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
  color: #FFF;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 10px;
`;

// State to store user answers
// Function to handle user's answer selection
// Function to calculate book recommendations based on user answers
// Filter books based on user's answers
const questionOptions = [
  ["Mystery/Thriller", "Romance", "Science Fiction", "Historical Fiction","Fantasy", "Non-fiction", "Biography/Memoir", "Horror", "Contemporary Fiction", "Classic Literature"],
  ["Short (less than 300 pages)", "Medium (300-500 pages)", "Long (more than 500 pages)"],
  ["Slow (1-2 weeks per book)", "Moderate (3-4 days per book)", "Fast (1-2 days per book)"],
  ["Descriptive and lyrical", "Concise and to the point", "Dialogue-heavy and conversational"],
  ["Complex and morally ambiguous", "Relatable and everyday people", "Larger-than-life and heroic"],
  ["Twisty and full of surprise", "Slow-burn and character-driven", "Fast-paced and action-packed", "A journey of self-discovery and personal growth"],
  ["Urban and modern cities","Rural and countryside","Historical periods and settings","One or more of the above"]
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendedBooks, setRecommendedBooks] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer) => {
    setAnswers({ ...answers, [currentQuestion]: answer });
    if (currentQuestion < 6) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const recommendations = getBookRecommendations();
      setRecommendedBooks(recommendations);
      setShowResults(true);
    }
  };
  

  const fetchBookCovers = useCallback(async () => {
    const booksWithCovers = await Promise.all(recommendedBooks.map(async (book) => {
      const coverUrl = await fetchBookCover(book.title);
      return { ...book, coverUrl };
    }));
    setRecommendedBooks(booksWithCovers);
  }, [recommendedBooks]);

  useEffect(() => {
    if (showResults) {
      fetchBookCovers();
    }
  }, [showResults, fetchBookCovers]);

  const fetchBookCover = async (bookTitle) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`);
      const data = await response.json();
      const bookData = data.items[0];
      if (bookData && bookData.volumeInfo && bookData.volumeInfo.imageLinks) {
        return bookData.volumeInfo.imageLinks.thumbnail;
      }
    } catch (error) {
      console.error('Error fetching book cover:', error);
    }
  };

  const getBookRecommendations = () => {
    let filteredBooks = books;

    // Filter books based on user's answers for each question
    for (let questionId in answers) {
      const answer = answers[questionId];
      switch (parseInt(questionId)) {
        case 0: // Genre
          filteredBooks = filteredBooks.filter(book => book.genre === answer);
          break;
        case 1: // Length
          filteredBooks = filteredBooks.filter(book => book.length === answer);
          break;
        case 2: // Pace
          filteredBooks = filteredBooks.filter(book => book.pace === answer);
          break;
        case 3: // Writing Style
          filteredBooks = filteredBooks.filter(book => book.writingStyle === answer);
          break;
        case 4: // Characters
          filteredBooks = filteredBooks.filter(book => book.characters === answer);
          break;
        case 5: // Plot
          filteredBooks = filteredBooks.filter(book => book.plot === answer);
          break;
        case 6: // Settings
          filteredBooks = filteredBooks.filter(book => book.settings.includes(answer));
          break;
        default:
          break;
      }
    }

    // Return filtered books, or return a random book if no match found
    return filteredBooks.length > 0 ? filteredBooks : [books[Math.floor(Math.random() * books.length)]];
  };

  const renderQuestion = () => {
    const questionText = [
      "What genre of books do you prefer?",
      "How long do you prefer your books to be?",
      "How fast do you typically read?",
      "What type of writing style do you enjoy?",
      "What kind of characters do you prefer?",
      "What type of plot do you find most engaging?",
      "What settings do you prefer in books?"
    ];

    return (
      <QuestionContainer>
        <h2>{questionText[currentQuestion]}</h2>
        <AnswerContainer>
          {questionOptions[currentQuestion].map(option => (
            <AnswerButton
              key={option}
              onClick={() => handleAnswerSelect(option)}
              className={answers[currentQuestion] === option ? 'selected' : ''}
            >
              {option}
            </AnswerButton>
          ))}
        </AnswerContainer>
      </QuestionContainer>
    );
  };

  const renderBookRecommendations = () => {
    return (
      <div>
        <h2>Book Recommendations:</h2>
        {recommendedBooks.map(book => (
          <div key={book.title}>
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
            {book.coverUrl && <BookImage src={book.coverUrl} alt="Book Cover" />}
          </div>
        ))}
      </div>
    );
  };

  
  // Function to render "See Results" button
  const renderSeeResultsButton = () => {
    if (!showResults && Object.keys(answers).length === 7) {
      return (
        <SeeResultsButton onClick={() => setShowResults(true)}>
          See Results
        </SeeResultsButton>
      );
    }
    return null;
  };
  

  return (
    <Container>
      {!showResults && renderQuestion()}
      {showResults && renderBookRecommendations()}
      {renderSeeResultsButton()}
    </Container>
  );
};

export default Quiz;