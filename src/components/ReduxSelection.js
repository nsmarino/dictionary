import React from 'react'

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


return (
  <div>
  <h2>{selection.title}</h2>
      <code className="codeSnippet">
        {selection.content}
      </code>
      <p>{selection.category}</p>
      
      <div className="snippetButtonsContainer">
        <button className="copy" onClick={handleCopy}>copy</button>
        {/* <button onClick={toggleEditor}>edit</button>
        <button onClick={handleDelete}>delete</button>  */}
      </div>
  </div>
    )
}

export default ReduxSelection