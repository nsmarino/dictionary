import React from 'react'

const EntryForm = (props) => (
    <div className="entry">
    <h2>new</h2>
    <form onSubmit={props.handleSubmit}>
      <div>title <input value={props.newTitle} onChange={props.handleTitleChange}/></div>
      <div>snippet <textarea value={props.newSnippet} onChange={props.handleSnippetChange}/></div>
      <button type="submit">save</button>
    </form>
    </div>
  )

export default EntryForm