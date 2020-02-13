import React from 'react'

const SnippetContainer = ({snippetObject}) => (
    <div className="snippet">
      <h2>{snippetObject.title}</h2>
      <code>
        {snippetObject.content}
      </code>
      
      <div className="snippetButtonsContainer">
        <button>copy</button>
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  )

export default SnippetContainer