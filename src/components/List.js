import React, { useState } from 'react'
import Categories from './Categories'

const List = ({snippets, handleClick, showForm, categorySort, categories}) => {
  const [categoryView, setCategoryView] = useState(true)

  const listSnippets = () => snippets.map(s => <li key={s.id}>{s.title}</li>) 
  
  const showCategoryView = () => {
    categorySort(snippets)
    setCategoryView(!categoryView)
  }
  return (
    <div id="all" className="flexChild">

      <h2>dictionary</h2> 
      
      <button onClick={showCategoryView}>{categoryView ? 'sort by category' : 'show all'}</button>

      { categoryView ? 
        <ul onClick={handleClick}>
          {listSnippets()}
        </ul>
        :
        <Categories cat={categories} handleClick={handleClick}/>
      }
        
        <button onClick={showForm}>new</button>
        
    </div>
  )
}

export default List