import React from 'react'
import { deleteItem } from '../reducers/itemReducer'
import { formView, editForm } from '../reducers/formReducer'

import { useSelector, useDispatch } from 'react-redux'


const ReduxSelection = () => {
  
  const dispatch = useDispatch()
  const selection = useSelector(state => state.selection)

  const handleCopy = () => {
    var textField = document.createElement('textarea')
    textField.innerText = selection.content
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    console.log('copied!')
  }


  const switchToForm = () => {
    dispatch(editForm(selection))
    dispatch(formView())
  }

  const handleDelete = () => {
    dispatch(deleteItem(selection.id))
  }

  return (
  <div>
  {  selection ?
    <div>
    <h2>{selection.title}</h2>
        <code className="codeSnippet">
          {selection.content}
        </code>
        <p>{selection.category}</p>
        
        <div className="snippetButtonsContainer">
          <button className="copy" onClick={handleCopy}>copy</button>
          <button onClick={switchToForm}>edit</button>
          <button onClick={handleDelete}>delete</button> 
        </div>
    </div>
    :
    <div>
      <h3>click an item to view it</h3>
    </div>
  }
  </div>
      )
}

export default ReduxSelection