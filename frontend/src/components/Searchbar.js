import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    if (query.trim() !== '') {
      history.push(`/search-results?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for books..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;


