import React from 'react';

const Search = ({handleSubmit, clearSearch, handleClick}) => {
  return (
  <div className="searchContainer">

    <div className="search">
      <form onSubmit={handleSubmit}>
      <span role="img" aria-label="search">🔎</span><input id='search'/> 
      </form>
      <button onClick={clearSearch}>clear</button>
    </div>
    <ul id='resultList' onClick={handleClick}></ul>

    
  </div>
  )}

  export default Search