import React from 'react'
import ReduxCategorySelect from './ReduxCategorySelect'
import { newItem } from '../reducers/itemReducer'
import { toggleFormView, toggleAddCategoryView } from '../reducers/viewReducer'
import { setSelection } from '../reducers/selectionReducer'
import { addCategory } from '../reducers/categoryReducer'

const ReduxNewForm = ({store}) => {

  const addCatFormVis = store.getState().view.addCategory

  const generateId = () => {
    return Number((Math.random() * 1000000).toFixed(0))
  }

  const handleSubmit = (event) => {
    event.preventDefault() 

    const categoryValue = addCatFormVis ? 
      event.target.category.value 
      : 
      event.target.newCat.value
    
    const item = {
        title: event.target.title.value,
        content: event.target.content.value,
        category: categoryValue,
        id: generateId()
    }
    if (item.title === '' || item.content === '' || categoryValue === '') return
    
    if (event.target.newCat.value) store.dispatch(addCategory(categoryValue))
    store.dispatch(setSelection(item))
    store.dispatch(newItem(item))
    store.dispatch(toggleFormView())
    store.dispatch(toggleAddCategoryView())
    
  }
    return (
    <div>
    <h2>new</h2>
    <form onSubmit={handleSubmit}>
      <div>title <input name='title' /></div>
      <div><textarea name='content'/></div>
      <ReduxCategorySelect store={store} selection={false} />
      <button type="submit">save</button>
    </form>
    <button onClick={()=>store.dispatch(toggleFormView())}>cancel</button>
    </div>
    )
  }

export default ReduxNewForm