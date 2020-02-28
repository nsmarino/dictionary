import React from 'react'
import Editor from './Editor'


const SnippetContainer = ({snippetObject, handleCopy, handleEdit, handleDelete, editTitle, editContent, editCategory, toggleEditor, editorVis}) => {


  return (

    <div className="snippet flexChild">


{ editorVis ?
  <div>
  <h2>{snippetObject.title}</h2>
      <code className="codeSnippet">
        {snippetObject.content}
      </code>
      <p>{snippetObject.category}</p>
      
      <div className="snippetButtonsContainer">
        <button className="copy" onClick={handleCopy}>copy</button>
        <button onClick={toggleEditor}>edit</button>
        <button onClick={handleDelete}>delete</button> 
      </div>
  </div>
  :
  <div>
  <Editor 
    snippet={snippetObject} 
    updateSnippet={handleEdit}
    editTitle={editTitle}
    editContent={editContent}
    editCategory={editCategory}
  />
  <button onClick={toggleEditor}>click</button>
  </div>
}





    </div>
  )}

export default SnippetContainer