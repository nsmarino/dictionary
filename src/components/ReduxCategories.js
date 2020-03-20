import React from 'react'
import { useSelector } from 'react-redux'


const ReduxCategories = ({ handleClick }) => {
  // attempt to refactor using redux-hooks

  // first get relevant parts of state with selectors
  const categories = useSelector(state => state.categories)
  const items = useSelector(state => state.items)

  const filter = useSelector(state => state.filter)

  // filters based on filter state
  const filteredItems = items.filter(i => 
    i.content.toLowerCase().includes(filter) 
    || 
    i.title.toLowerCase().includes(filter)
  ) 

  // creates object for each category with an array of Items belonging to that category
  const categoryObjects = categories.map(cat => {
    const matchingItems = filteredItems
      .filter(item => item.category === cat)

    const catObj = {
      category: cat,
      items: matchingItems
    } 
    return catObj 
  })

  // only returns categories that have items in them
  const populatedCategories = categoryObjects.filter(obj =>
    obj.items.length !== 0)

return (
      <div className="catContainer">
        {populatedCategories.map(c => 
          <div className='catView' key={c.category}>
            <h2>{c.category}</h2>
            <ul onClick={handleClick}>
              {c.items.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
          </div>
        )}
      </div>
    )
}

export default ReduxCategories