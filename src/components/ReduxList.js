import React from 'react'
import ReduxCategories from './ReduxCategories'
import { setSelection } from '../reducers/selectionReducer'
import { setCategories } from '../reducers/categoryReducer'
import { toggleCatView } from '../reducers/categoryViewReducer'
import { toggleFormView } from '../reducers/formViewReducer'

const ReduxList = ({store}) => {
  
    // used to toggle between alphabetical and category views
  const categoryView = store.getState().categoryView

    // populates ul with items from store
  const items = store.getState().items

  // input into search bar will filter titles
  const filteredItems = items.filter(i => i.content.toLowerCase().includes(store.getState().filter) || i.title.toLowerCase().includes(store.getState().filter) )

  const showItems = () => filteredItems.map(i => <li key={i.id}>{i.title}</li>)
  
    // called by handleClick
  const selectItem = (target) => store.dispatch(setSelection(target))

    // selects item (bubbling)
  const handleClick = (event) => {
    if (event.target.tagName !== 'LI' || event.target.innerText === 'no results') return;
    const selectedItemTitle = event.target.innerText
    const matchingItem = items.find(x => x.title === selectedItemTitle)
    selectItem(matchingItem)
  }

    // called by showCategories
  const categorySort = (collection) => {
    const allCategories = collection.map(s => s.category)

    function onlyUnique(value, index, self) { 
      return self.indexOf(value) === index;
    }
    const uniqueCats = allCategories.filter(onlyUnique).sort()
  
    // const uniqueCatObjects = uniqueCats.map(cat => {
    //   const matchingItems = collection.filter(i => i.category === cat)
    //   const catObj = {
    //     category: cat,
    //     items: matchingItems
    //   }
    //   return catObj
    // })

    return uniqueCats
  }

    // toggles category view
  const showCategories = () => {
      const cats = categorySort(items)
      store.dispatch(setCategories(cats))
      store.dispatch(toggleCatView())
    }

  return (
    <div>
      <h2>dictionary</h2> 
      <button onClick={showCategories}>for category</button>

    { categoryView ? 
         <ul onClick={handleClick}>
           {showItems()}
         </ul>
        :
         <ReduxCategories store={store} handleClick={handleClick} />
       }
       <button onClick={()=>store.dispatch(toggleFormView())}>new</button>
      </div>
  )     
}

export default ReduxList