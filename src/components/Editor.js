import React from 'react'

const Editor = ({snippet, updateSnippet, editTitle, editContent, editCategory}) => {

  console.log(snippet)

  return (
  <div>
    <h2>editor</h2>

    <form onSubmit={updateSnippet}>
    <div>title <input defaultValue={snippet.title} onChange={editTitle} /></div>
    <div>snippet <textarea defaultValue={snippet.content} onChange={editContent} /></div>

    <p>category 
        <select 
          name="category" 
          id="category" 
          defaultValue={''}
          onChange={editCategory}
        >
        <option></option>
        <option>library</option>
        <option>array</option>
        <option>css</option>
      </select>
    </p>
    <button type="submit">save</button>
    </form>
  </div>
    )
}

export default Editor