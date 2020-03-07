import React from 'react'
import { editItem } from '../reducers/itemReducer'
import { toggleEditorView, toggleAddCategoryView } from '../reducers/viewReducer'
import { addCategory } from '../reducers/categoryReducer'
import ReduxCategorySelect from './ReduxCategorySelect'

const ReduxEditor = ({store}) => {

  const addCatFormVis = store.getState().view.addCategory

  const selection = store.getState().selection

  const handleSubmit = (event) => {
    event.preventDefault()
    
    const categoryValue = addCatFormVis ? 
      event.target.category.value 
      : 
      event.target.newCat.value

    const editedItem = {
        title: event.target.title.value,
        content: event.target.content.value,
        category: categoryValue,
        id: selection.id
    }
    if (editedItem.title === '' || editedItem.content === '' || categoryValue === '') return
    
    if (event.target.newCat.value) store.dispatch(addCategory(categoryValue))
    store.dispatch(editItem(selection.id, editedItem))
    store.dispatch(toggleEditorView())
    store.dispatch(toggleAddCategoryView())
  }

    return (
    <div>
    <form onSubmit={handleSubmit}>
      <div> <input name='title' defaultValue={selection.title} /> </div>
      <div> <textarea name='content' defaultValue={selection.content} /> </div>
      <ReduxCategorySelect store={store} selection={store.getState().selection}/>
      <br></br>
      <button type="submit">update</button>
    </form>
    <button onClick={()=>store.dispatch(toggleEditorView())}>cancel</button>
    </div>
    )
  }

export default ReduxEditor