import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import SearchRPPicks from '../components/SearchRPPicks';
import gridIcon from '../assets/gridIcon.png';
import AbstractImg from '../assets/AbstractImg.png';
// import { Link } from 'react-router-dom';
import Card from "../components/Card";

// Import forum images
import forumSquare1 from '../assets/forumSquare1.png';
import forumSquare2 from '../assets/forumSquare2.png';
import forumSquare3 from '../assets/forumSquare3.png';
import forumSquare4 from '../assets/forumSquare4.png';
import forumSquare5 from '../assets/forumSquare5.png';
import forumSquare6 from '../assets/forumSquare6.png';
import forumSquare7 from '../assets/forumSquare7.png';
import forumSquare8 from '../assets/forumSquare8.png';




const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  min-height: 100vh; 
  background-image: url(${AbstractImg});
  background-size: cover;
  background-attachment: fixed;
`;

const BooksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* Each row will contain 6 books */
  gap: 20px; /* Gap between books */
`;

const Book = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookImage = styled.img`
  width: 150px; /* Adjust width as needed */
  height: 200px; /* Adjust height as needed */
`;

const BookTitle = styled.h3`
  margin-top: 10px;
  font-size: 16px;
`;

const BookAuthor = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

const SearchIconContainer = styled.div`
  padding: 5px;
  display: flex;
  
`;

const SearchIcon = styled(IoSearchOutline)`
  flex-shrink: 0;
  
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0px;
  border: none;
  outline: none;
  margin-right: 110px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

const FilterButtonAll = styled.button`
  padding: 10px 50px;
  background-color: #CCB7B6;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`;
const FilterButtonRomance = styled.button`
  padding: 10px 50px;
  background-color: #93C8C2;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`;
const FilterButtonSciFi = styled.button`
  padding: 10px 50px;
  background-color: #679DAE;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`;
const FilterButtonMore = styled.button`
  padding: 10px 30px;
  background-color: #E1DDDD;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 32px; /* Adjust the margin as needed */
  margin-bottom: 25px;
`;

const Title = styled.h2`
  margin-bottom: 25px;
  text-align: left;
  font-family: Roboto;
  font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.08px;
`;
const GridIcon = styled.img`
  width: 20px; /* Adjust the size as needed */
  height: auto;
  margin-left: 1100px; /* Adjust the margin as needed */
  
`;

const bounce = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
`;


const AnimatedButton = styled.button`
  padding: 10px 40px;
  background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
  color: #FFF;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 10px;
  animation: ${bounce} 1s infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const SectionTitle = styled.h4`
  font-weight: bold;
  color: #333;
  margin-left: -1190px;
  text-align: left;
  font-family: Roboto;
  font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.08px;
`;

const SeeMoreButton = styled.button`
padding: 10px 40px;
background: linear-gradient(230.28deg, #ddbfb5, #5397ac);
color: #FFF;
border: none;
font-size: 16px;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 10px;
  margin-bottom: 20px;
  animation: ${bounce} 1s infinite;
  
  &:hover {
    animation-play-state: paused;
`;




const Forum2ArtSection = () => {
    const forums = [
      {
        imageUrl: forumSquare1,
        description: "Book of the Month: If You Could See the Sun By Ann Liang",
      },
      {
        imageUrl: forumSquare2,
        description: "A Darker Shade of Magic by V.E. Schwab",
      },
      {
        imageUrl: forumSquare3,
        description: "Do I Know You by Emily Wibberley & Austin Seigmud- Broka",
      },
      {
        imageUrl: forumSquare4,
        description: "Verity By Colleen Hoover",
      }
    ];
    const forums2ndrow = [
      {
        imageUrl: forumSquare5,
        description: "Rebecca By Daphne Du Maurier",
      },
      {
        imageUrl: forumSquare6,
        description: "Where the Crawdads Sing By Delia Owens",
      },
      {
        imageUrl: forumSquare7,
        description: "All the Light We Cannot See By Anthony Doerr",
      },
      {
        imageUrl: forumSquare8,
        description: "The Gilded Ones By Namina Forna",
      }
    ];
  
    return (
      <>
        <SectionTitle className="forums2art-text" id="Art">
          Book Club...
        </SectionTitle>
        <div className="forums2artsection">
          {forums.map((forum, index) => (
            <Card
              key={index}
              imageUrl={forum.imageUrl}
              description={forum.description}
            />
          ))}
        </div>
        <div className="forums2artsection">
          {forums2ndrow.map((forum, index) => (
            <Card
              key={index}
              imageUrl={forum.imageUrl}
              description={forum.description}
            />
          ))}
        </div>
        <SeeMoreButton to="/community">See More</SeeMoreButton>
        
      </>
    );
  };




const SearchResultsPage = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [startIndex, setStartIndex] = useState(0);
  const maxResults = 24;

  useEffect(() => {
    // Function to fetch books based on the user's search query and pagination
    const fetchBooks = async () => {
      try {
        
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=genre:${searchQuery}&startIndex=${startIndex}&maxResults=${maxResults}`
        );
        const data = await response.json();

            //use get request, and post request to submit data 
        // Process API response and update state with book data
        if (data.items) {
          const booksData = data.items.map(item => ({
            id: item.id,
            title: item.volumeInfo.title,
            author: item.volumeInfo.authors ? item.volumeInfo.authors[0] : 'Unknown Author',
            image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : '',
          }));
          setBooks(booksData);
        }
      } catch (error) {
        console.error('Error searching:', error);
      }
    };

    // Call the fetchBooks function when searchQuery or startIndex changes
    if (searchQuery.trim() !== '') {
      fetchBooks();
    }
  }, [searchQuery, startIndex]);

  const handleNextPage = () => {
    setStartIndex(prevIndex => prevIndex + maxResults);
  };

  const handlePreviousPage = () => {
    setStartIndex(prevIndex => Math.max(prevIndex - maxResults, 0));
  };


  return (
    <Container>
      <SearchBar>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <SearchIconContainer onClick={() => setSearchQuery(searchQuery)}>
          <SearchIcon size={20} color="#666" />
        </SearchIconContainer>
      </SearchBar>
      <ButtonContainer>
        <FilterButtonAll onClick={() => setSearchQuery('all')}>All</FilterButtonAll>
        <FilterButtonRomance onClick={() => setSearchQuery('romance')}>Romance</FilterButtonRomance>
        <FilterButtonSciFi onClick={() => setSearchQuery('sci-fi')}>Sci-Fi</FilterButtonSciFi>
        <FilterButtonMore onClick={() => setSearchQuery('more')}>+</FilterButtonMore>
        
      </ButtonContainer>

      <SearchRPPicks />
      <TitleContainer>
        <Title>All...</Title>
        
        <GridIcon src={gridIcon} alt="Grid Icon" />
        <span>Sort by: Most Popular</span>
      </TitleContainer>

      <BooksGrid>
        {books.map(book => (
          <Book key={book.id}>
            <BookImage src={book.image} alt={book.title} />
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>{book.author}</BookAuthor>
          </Book>
        ))}
      </BooksGrid>
      <ButtonContainer>
        <AnimatedButton onClick={handlePreviousPage}>Previous</AnimatedButton>
        <div style={{ marginRight: '10px' }}></div>
        <AnimatedButton onClick={handleNextPage}>Next</AnimatedButton>
      </ButtonContainer>

      <Forum2ArtSection />


    </Container>
  );
};

export default SearchResultsPage;

