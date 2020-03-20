import React from 'react'
import ReduxCategories from './ReduxCategories'
import { setSelection } from '../reducers/selectionReducer'
import { toggleCategoriesView } from '../reducers/viewReducer'

import { formView } from '../reducers/formReducer'

import { useSelector, useDispatch } from 'react-redux'

const ReduxList = () => {
  
  // to be used throughout when dispatching to store
  const dispatch = useDispatch()
  
  // used to toggle between alphabetical and category views
  const categoryView = useSelector(state => state.view.categories)
  // populates ul with items from store
  const items = useSelector(state => state.items)
  // input into search bar will filter titles

  const filter = useSelector(state => state.filter)

  const filteredItems = items.filter(i => i.content.toLowerCase().includes(filter) || i.title.toLowerCase().includes(filter) )


  const showItems = () => filteredItems.map(i => <li key={i.id}>{i.title}</li>)
  
    // called by handleClick
  const selectItem = (target) => dispatch(setSelection(target))

    // selects item (bubbling)
  const handleClick = (event) => {
    if (event.target.tagName !== 'LI' || event.target.innerText === 'no results') return;
    const selectedItemTitle = event.target.innerText
    const matchingItem = items.find(x => x.title === selectedItemTitle)
    selectItem(matchingItem)
  }

    // toggles category view
  const showCategories = () => dispatch(toggleCategoriesView())

  return (
    <div>
      <h2>dictionary</h2> 
      <button onClick={showCategories}>{categoryView ? 'view by category' : 'view all'}</button>

    { categoryView ? 
         <ul onClick={handleClick}>
           {showItems()}
         </ul>
        :
         <ReduxCategories handleClick={handleClick} />
       }
       <button onClick={()=> dispatch(formView())}>new</button>
      </div>
  )     
}

export default ReduxList

   // called by showCategories
  // const categorySort = (collection) => {
  //   const allCategories = collection.map(s => s.category)

  //   function onlyUnique(value, index, self) { 
  //     return self.indexOf(value) === index;
  //   }
  //   const uniqueCats = allCategories.filter(onlyUnique).sort()
  
  //   // const uniqueCatObjects = uniqueCats.map(cat => {
  //   //   const matchingItems = collection.filter(i => i.category === cat)
  //   //   const catObj = {
  //   //     category: cat,
  //   //     items: matchingItems
  //   //   }
  //   //   return catObj
  //   // })

  //   return uniqueCats
  // }