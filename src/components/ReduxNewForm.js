import React from 'react'
import { newItem } from '../reducers/itemReducer'
import { toggleFormView } from '../reducers/formViewReducer'

const ReduxNewForm = ({store}) => {

    const generateId = () => {
        return Number((Math.random() * 1000000).toFixed(0))
        }

  const handleSubmit = (event) => {
    event.preventDefault() 
    const item = {
        title: event.target.title.value,
        content: event.target.content.value,
        category: event.target.category.value,
        id: generateId()
    }
    store.dispatch(newItem(item))
    store.dispatch(toggleFormView())
  }

    return (
    <div>
    <h2>new</h2>
    <form onSubmit={handleSubmit}>
      <div>title <input name='title' /></div>
      <div><textarea name='content'/></div>
      <p>category 
        <select 
          name="category" 
          id="category" 
        >
        <option></option>
        <option>library</option>
        <option>array</option>
        <option>css</option>
      </select>
      </p>
      <button type="submit">save</button>
    </form>
    <button onClick={()=>store.dispatch(toggleFormView())}>cancel</button>
    </div>
    )
  }

export default ReduxNewForm