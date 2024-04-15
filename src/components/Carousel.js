import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CarouselImg1 from '../assets/CarouselImg1.png';
import CarouselImg2 from '../assets/CarouselImg2.png';
import CarouselImg3 from '../assets/CarouselImg3.png';
import { IoSearchOutline } from 'react-icons/io5';

const CarouselHeader = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  background-color: #FFC0CB; /* Pink background color */
`;

const ContentContainer = styled.div`
  display: flex;
`;

const DiscoverMoreContainer = styled.div`
  width: 30%; /* Width for the "Discover More" section */
  padding: 20px;
`;

const DiscoverMoreTitle = styled.h2`
margin-top: 150px;
margin-left: 20px;
font-size: 56px;
font-family: Roboto;
  color: #fff; /* White text color */
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  margin-top: 20px;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 0px;
  border: none;
  outline: none;
  margin-right: 10px;
`;

const SearchIconContainer = styled.div`
  padding: 5px;
`;

const SearchIcon = styled(IoSearchOutline)`
  flex-shrink: 0;
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
  margin-top: 40px;
  
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
  color: #333;
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
  color: #333;
  margin-bottom: 10px;
  line-height: 1.5; /* Adjusted line height */
`;

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Implement your search functionality here
    console.log('Searching for:', searchQuery);
  };

  const books = [
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [books.length]);

  return (
    <CarouselHeader>
      <ContentContainer>
        <DiscoverMoreContainer>
          <DiscoverMoreTitle>Discover New Books</DiscoverMoreTitle>
          {/* Add any content you want for the "Discover More" section */}
          <SearchBar>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchIconContainer onClick={handleSearch}>
              <SearchIcon size={20} color="#666" />
            </SearchIconContainer>
          </SearchBar>
          <ButtonContainer>
        <FilterButtonAll onClick={() => setSearchQuery('all')}>All</FilterButtonAll>
        <FilterButtonRomance onClick={() => setSearchQuery('romance')}>Romance</FilterButtonRomance>
        <FilterButtonSciFi onClick={() => setSearchQuery('sci-fi')}>Sci-Fi</FilterButtonSciFi>
        <FilterButtonMore onClick={() => setSearchQuery('more')}>+</FilterButtonMore>
        
      </ButtonContainer>

        </DiscoverMoreContainer>
        <CarouselContainer>
          <CarouselInner length={books.length} style={{ transform: `translateX(-${currentIndex * (100 / books.length)}%)` }}>
            {books.map((book, index) => (
              <CarouselItem key={index} length={books.length}>
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
  );
};

export default Carousel;
