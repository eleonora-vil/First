import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input type="text" placeholder="Search..." />
      <button type="button">Search</button>
    </div>
  )

}

export default SearchBar;
