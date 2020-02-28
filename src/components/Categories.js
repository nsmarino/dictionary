import React from 'react'

const Categories = ({cat, handleClick}) => {
  
  const listCats = () => {
    return cat.map(c => <div className='catView' key={c.category}>
      <h2>{c.category}</h2>
      <ul onClick={handleClick}>
        {c.snippets.map(s => <li key={s.id}>{s.title}</li>)}
      </ul>
      </div>)
  } 

  return (
      <div className="catContainer">
          {listCats()}
      </div>
  )
}


export default Categories