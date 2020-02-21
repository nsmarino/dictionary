import React from 'react'

const List = ({results, handleClick, showForm}) => {
  
  const listResults = () => results.map(result => <li key={result.id}>{result.title}</li>) 
  return (
    <div id="all" className="flexChild">
      <h2>dictionary</h2> <button>sort by category</button>
        <ul onClick={handleClick}>
          {listResults()}
        </ul>
        <button onClick={showForm}>new</button>
    </div>
  )
}

export default List