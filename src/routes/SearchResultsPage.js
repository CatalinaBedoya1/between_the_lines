import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';
import SearchRPPicks from '../components/SearchRPPicks';
import gridIcon from '../assets/gridIcon.png';
import AbstractImg from '../assets/AbstractImg.png';
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
//carousel images
import CarouselImg1 from '../assets/CarouselImg1.png';
import CarouselImg2 from '../assets/CarouselImg2.png';
import CarouselImg3 from '../assets/CarouselImg3.png';
import SearchbackgroundImg from '../assets/SearchbackgroundImg.png';
//carousel 
const CarouselHeader = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  
  background-color: #FFF;


`;

const ContentContainer = styled.div`
  display: flex;
`;

const DiscoverMoreContainer = styled.div`
  width: 30%; /* Width for the "Discover More" section */
  padding: 20px;
  margin-left: 30px;
`;

const DiscoverMoreTitle = styled.h2`
margin-top: 10px;

font-size: 66px;
font-family: "Pacifico", cursive;
  font-weight: 400;
  color: #A08786; /* White text color */
`;
const DiscoverPara = styled.p`
margin-top:10px;

font-size: 16px;
font-family: "Roboto Mono", monospace;
  font-weight: <weight>;
  font-style: normal;
color: #A08786;
`
const CarouselContainer = styled.div`
  position: relative;
  width: 600px; /* Width for the carousel */
  height: 500px;
  margin-left: 260px;
  margin-top: 40px;
  overflow: hidden;
`;

const CarouselInner = styled.div`
  display: flex;
  align-items: flex-start;
  transition: transform 0.5s ease;
  width: ${(props) => props.length * 100}%; /* Adjust width dynamically based on number of items */
`;

const CarouselItem = styled.div`
  margin-top: 10px;
  
  display: flex;
  align-items: flex-start;
  flex: 0 0 ${(props) => 100 / props.length}%; /* Adjust width dynamically based on number of items */
`;
const CarouselImg = styled.img`
margin-top: 50px;
  width: 250px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
`;

const CarouselTextContainer = styled.div`
  flex: 1;
  padding: 20px; /* Adjusted padding */
  margin-top: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  width: 100%; /* Adjusted width */
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #A08786;
  margin-bottom: 10px;
`;

const Author = styled.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 10px;
`;
const Rating = styled.div`
  font-size: 16px;
  color: #FFD700; /* Gold color */
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #A08786;
  margin-bottom: 10px;
  line-height: 1.5; /* Adjusted line height */
`;

//regular

const SearchContainer = styled.div`
  display: flex;
  
  flex-direction: column;
  align-items: center;
  
  height: 2100px; 
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
  background-color: white;
`;

const SearchIconContainer = styled.div`
  padding: 5px;
  display: flex;
  
`;

const SearchIcon = styled(IoSearchOutline)`
  flex-shrink: 0;
  
`;

const SearchBar = styled.div`
margin-top:30px;
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  color: #fff;
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
  padding: 10px 40px;
  background-color: #CCB7B6;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`;
const FilterButtonRomance = styled.button`
  padding: 10px 40px;
  background-color: #93C8C2;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`;
const FilterButtonSciFi = styled.button`
  padding: 10px 40px;
  background-color: #679DAE;
  color: #FFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 10px;
`;
const FilterButtonMore = styled.button`
  padding: 10px 20px;
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

const SearchTitle = styled.h2`
  margin-bottom: 25px;
  text-align: left;
  font-family: Roboto;
  font-size: 26px;
  font-color: black;
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
  color: black;
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

    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselbooks = [
      {
        id: 1,
        title: "The Sirens of Titan",
        author: "Kurt Vonnegut",
        description: "This novel follows the wealthy Malachi Constant as he becomes embroiled in a cosmic conflict orchestrated by alien forces. Through a blend of satire and science fiction, the novel delves into themes of fate, free will, and the absurdity of human existence.",
        rating: 4.5,
        image: CarouselImg1,
      },
      {
        id: 2,
        title: "All The Light We Cannot See",
        author: "Anthony Doerr",
        description: "While not afraid to confront the horrors of the Second World War, All the Light We Cannot See is a story of hope and resistance. The novel offers the reader an interesting glimpse into the French Resistance, Le Maquis, in his portrayal of the occupied city of Saint-Malo.",
        rating: 5,
        image: CarouselImg2,
      },
      {
        id: 3,
        title: "A Court of Thorns and Roses",
        author: "Sarah J. Maas",
        description: "Feyre is a huntress. She thinks nothing of slaughtering a wolf to capture its prey. But, like all mortals, she fears what lingers beyond the forest. And she will learn that taking the life of a magical creature comes at a high price . . .",
        rating: 4.3,
        image: CarouselImg3,
      },
    ];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselbooks.length);
      }, 3000); // Change slide every 3 seconds
  
      return () => clearInterval(interval);
    }, [carouselbooks.length]);



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
<SearchContainer>
    <CarouselHeader>

      <ContentContainer>
        <DiscoverMoreContainer>
          <DiscoverMoreTitle>Discover New Books</DiscoverMoreTitle>
          <DiscoverPara>Search by author, title, or genre!</DiscoverPara>
          {/* Add any content you want for the "Discover More" section */}
          
          <SearchBar>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIconContainer>
              <SearchIcon size={20} color="#666" />
            </SearchIconContainer>
          </SearchBar>
          <ButtonContainer>
        <FilterButtonAll onClick={() => setSearchQuery('all')}>All</FilterButtonAll>
        <FilterButtonRomance onClick={() => setSearchQuery('romance')}>Romance</FilterButtonRomance>
        <FilterButtonSciFi onClick={() => setSearchQuery('fantasy')}>Fantasy</FilterButtonSciFi>
        <FilterButtonMore onClick={() => setSearchQuery('more')}>+</FilterButtonMore>
        
      </ButtonContainer>

        </DiscoverMoreContainer>
        <CarouselContainer>
          <CarouselInner length={carouselbooks.length} style={{ transform: `translateX(-${currentIndex * (100 / carouselbooks.length)}%)` }}>
            {carouselbooks.map((book, index) => (
              <CarouselItem key={index} length={carouselbooks.length}>
                <CarouselImg src={book.image} alt={book.title} />
                <CarouselTextContainer>
                  <Title>{book.title}</Title>
                  <Author>by {book.author}</Author>
                  <Rating>{'\u2605'.repeat(Math.floor(book.rating))}</Rating>
                  <Description>{book.description}</Description>
                </CarouselTextContainer>
              </CarouselItem>
            ))}
          </CarouselInner>
        </CarouselContainer>
      </ContentContainer>
    </CarouselHeader>






      <SearchRPPicks />
      <TitleContainer>
        <SearchTitle>All...</SearchTitle>
        
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


    </SearchContainer>
  );
};

export default SearchResultsPage;
