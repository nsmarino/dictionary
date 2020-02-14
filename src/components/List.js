import React from 'react'

const List = ({results, handleClick}) => {
  
  const listResults = () => results.map(result => <li key={result.id}>{result.title}</li>) 
  return (
    <div className="results">
      <h2>all</h2>
        <ul onClick={handleClick}>
          {listResults()}
        </ul>
    </div>
  )
}

export default List