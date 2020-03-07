import React from 'react'
import { toggleAddCategoryView } from '../reducers/viewReducer'

const ReduxCategorySelect = ({store, selection}) => {

// selection is passed as actual selection in the editor
// and is simply passed as 'false' from the create-new form

  const addCatFormVis = store.getState().view.addCategory

  const showAddCategory = (event) => {
    event.preventDefault()
    store.dispatch(toggleAddCategoryView())
  }
//   const selection = store.getState().selection
  const categories = store.getState().categories

  const categoryMap = () => categories.map(cat => 
    cat === selection.category ?
      <option key={cat} selected>{cat}</option>
      : 
      <option key={cat}>{cat}</option>
  )
  return (
    <p>category 
      {addCatFormVis ?
        <select name="category" id="category">
          {categoryMap()}
        </select>
        :
        <input name="newCat" />
      }
      <button onClick={showAddCategory}>{addCatFormVis ? 'new' : 'cancel'}</button>
    </p>
    )
}

export default ReduxCategorySelect
