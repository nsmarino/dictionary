import React from 'react'

const ReduxCategories = ({store, handleClick}) => {

    const listCats = () => {
        const categories = store.getState().categories
        const items = store.getState().items
        const populatedCategories = categories.map(cat => {
            const matchingItems = items.filter(item => item.category === cat)
            const catObj = {
              category: cat,
              items: matchingItems
            }
            return catObj
          })
        console.log(populatedCategories)
        return populatedCategories.map(c => <div className='catView' key={c.category}>
          <h2>{c.category}</h2>
          <ul onClick={handleClick}>
            {c.items.map(item => <li key={item.id}>{item.title}</li>)}
          </ul>
          </div>)
      } 

return (
      <div className="catContainer">
          {listCats()}
      </div>
    )
}

export default ReduxCategories