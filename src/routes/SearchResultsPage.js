import React, { useState } from 'react';
import styled from 'styled-components';
import { IoSearchOutline } from 'react-icons/io5';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px; /* Adjust the margin top as needed */
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc; /* Add a border for visual separation */
  border-radius: 20px; /* Add rounded corners */
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  outline: none; /* Remove the default outline */
`;

const SearchIconContainer = styled.button`
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  cursor: pointer;
`;

const SearchIcon = styled(IoSearchOutline)`
  flex-shrink: 0; /* Prevent the icon from shrinking */
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 5px 20px;
`;

const FilterButtonAll = styled.button`
  padding: 5px 30px;
  background-color: #CCB7B6;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 20px;
`;
const FilterButtonRomance = styled.button`
  padding: 5px 30px;
  background-color: #679DAE;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 20px;
`;
const FilterButtonSciFi = styled.button`
  padding: 5px 30px;
  background-color: #93C8C2;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 20px;
`;
const FilterButtonMore = styled.button`
  padding: 5px 20px;
  background-color: #E1DDDD;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 20px;
`;

const SearchResultsPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

  const handleFilterClick = (filter) => {
    // Handle filter click logic
  };

  const handleSearch = async () => {
    try {
      // Make API request with the user's search query (searchQuery)
      const response = await fetch(`https://openlibrary.org/search.json?q=${searchQuery}`);
      const data = await response.json();
      // Process API response and update search results
      console.log(data);
    } catch (error) {
      console.error('Error searching:', error);
    }
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
        <SearchIconContainer onClick={handleSearch}>
            <SearchIcon size={20} color="#666" />
        </SearchIconContainer>
      </SearchBar>

      <ButtonContainer>
        <FilterButtonAll onClick={() => handleFilterClick('all')}>All</FilterButtonAll>
        <FilterButtonRomance onClick={() => handleFilterClick('romance')}>Romance</FilterButtonRomance>
        <FilterButtonSciFi onClick={() => handleFilterClick('sci-fi')}>Sci-Fi</FilterButtonSciFi>
        <FilterButtonMore onClick={() => handleFilterClick('more')}>+</FilterButtonMore>
        {/* Add more filter buttons as needed */}
      </ButtonContainer>
    </Container>
  );
};

export default SearchResultsPage;
