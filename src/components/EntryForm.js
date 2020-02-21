import React from 'react'

const EntryForm = (props) => (
    <div id="newForm" className="flexChild">
    <h2>new</h2>
    <form onSubmit={props.handleSubmit}>
      <div>title <input value={props.newTitle} onChange={props.handleTitleChange}/></div>
      <div>snippet <textarea value={props.newSnippet} onChange={props.handleSnippetChange}/></div>
      <p>category 
        <select 
          name="category" 
          id="category" 
          value={props.newCategory}
          onChange={props.handleCategoryChange}
        >
        <option></option>
        <option>library</option>
        <option>array</option>
        <option>css</option>
      </select>
      </p>
      <button type="submit">save</button>
      <button onClick={props.showForm}>cancel</button>
    </form>
    </div>
  )

export default EntryForm