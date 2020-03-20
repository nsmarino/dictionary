import React from 'react'
import { toggleAddCategoryView } from '../reducers/viewReducer'
import { useSelector, useDispatch } from 'react-redux'

const ReduxCategorySelect = ({ selection }) => {

  const dispatch = useDispatch()

  // selection is passed as actual selection in the editor
  // and is simply passed as 'false' from the create-new form
  const addCatFormVis = useSelector(state => state.view.addCategory)
  
  const showAddCategory = (event) => {
    event.preventDefault()
    dispatch(toggleAddCategoryView())
  }
//   const selection = store.getState().selection
  const categories = useSelector(state => state.categories)

  // const categoryMap = () => categories.map(cat => 
  //   cat === selection.category ?
  //     <option key={cat} selected>{cat}</option>
  //     : 
  //     <option key={cat}>{cat}</option>
  // )
  return (
    <p>category 
      {addCatFormVis ?
        <select name="category" id="category">
          {categories.map(cat => 
            cat === selection.category ?
              <option key={cat} selected>{cat}</option>
              : 
              <option key={cat}>{cat}</option>
          )}
        </select>
        :
        <input name="newCat" />
      }
      <button onClick={showAddCategory}>{addCatFormVis ? 'new' : 'cancel'}</button>
    </p>
    )
}

export default ReduxCategorySelect
