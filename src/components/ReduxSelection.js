import React from 'react'
import { deleteItem } from '../reducers/itemReducer'
import { toggleEditorView } from '../reducers/viewReducer'


const ReduxSelection = ({store}) => {

  const selection = store.getState().selection

  const handleCopy = () => {
    var textField = document.createElement('textarea')
    textField.innerText = selection.content
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
    console.log('copied!')
  }


  const switchToEditor = () => {
    store.dispatch(toggleEditorView())
  }

  const handleDelete = () => {
    store.dispatch(deleteItem(selection.id))
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
          <button onClick={switchToEditor}>edit</button>
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