import React from 'react'

import { editItem, newItem } from '../reducers/itemReducer'
import { setSelection } from '../reducers/selectionReducer'
import { toggleAddCategoryView } from '../reducers/viewReducer'
import { addCategory } from '../reducers/categoryReducer'
import ReduxCategorySelect from './ReduxCategorySelect'

import { resetForm } from '../reducers/formReducer'

import { useSelector, useDispatch } from 'react-redux'

const ReduxForm = () => {

  const dispatch = useDispatch()

  const generateId = () => {
    return Number((Math.random() * 1000000).toFixed(0))
  }

  const addCatFormVis = useSelector(state => state.view.addCategory)

  const formContents = useSelector(state => state.form.selection) || { title: '', content: '' }
  const selection = useSelector(state => state.selection)
  
  const handleSubmit = (event) => {
    event.preventDefault()
    
    // this should be fixed at some point
    const categoryValue = addCatFormVis ? 
      event.target.category.value 
      : 
      event.target.newCat.value

    const submission = {
        title: event.target.title.value,
        content: event.target.content.value,
        category: categoryValue,
        id: formContents.id || generateId()
    }
    if (submission.title === '' || submission.content === '' || categoryValue === '') return

    if (event.target.newCat) {
        dispatch(addCategory(categoryValue))
        dispatch(toggleAddCategoryView())
    }

    dispatch(setSelection(submission))

    formContents === selection ?
      dispatch(editItem(selection.id, submission))  
      :
      dispatch(newItem(submission))

    dispatch(resetForm())  
  }

    return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>title<input name='title' defaultValue={formContents.title} /> </div>
      <div> <textarea name='content' defaultValue={formContents.content} /> </div>
      <ReduxCategorySelect selection={formContents}/>
      <br></br>
      <button type="submit">{formContents === selection ? 'update' : 'create'}</button>
    </form>
    <button onClick={()=> dispatch(resetForm())}>cancel</button>
    </div>
    )
  }

export default ReduxForm