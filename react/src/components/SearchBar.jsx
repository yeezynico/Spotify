import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState(''); 

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query, searchType);  
  };

  return (
    <div className="search-bar md:text-2xl lg:text-3xl mb-12">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Rechercher..."
     
      />
      <select onChange={(e) => setSearchType(e.target.value)} value={searchType}
           className='mr-12'>
        <option value="artist">Artistes</option>
        <option value="album">Albums</option>
        <option value="genre">Genres</option>
        
      </select>
      <button onClick={handleSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;
