import React from 'react';

const Search = ({handleSubmit, clearSearch, handleClick}) => {
  return (
    <div className="search">
      <h2>search</h2>
      <form onSubmit={handleSubmit}>
        search <input id='search'/>
      </form>
      <button onClick={clearSearch}>clear</button>
      <ul id='resultList' onClick={handleClick}></ul>
    </div>
  )}

  export default Search