import React from 'react'

const SnippetContainer = ({snippetObject, handleCopy, handleEdit, handleDelete}) => (
    <div className="snippet">
      <h2>{snippetObject.title}</h2>
      <code className="codeSnippet">
        {snippetObject.content}
      </code>
      
      <div className="snippetButtonsContainer">
        <button className="copy" onClick={handleCopy}>copy</button>
        <button onClick={handleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </div>
    </div>
  )

export default SnippetContainer