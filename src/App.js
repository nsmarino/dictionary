import React, { useState, useEffect } from 'react'

import Search from './components/Search'
import EntryForm from './components/EntryForm'

const message=
`
const index = 1; 
const amountToDelete = 1;
const replacement = 'john';

const arr = ['hi', 'tom', 'how', 'are', 'you']

arr.splice(index, amountToDelete, replacement)

// RESULT
['hi', 'john', 'how', 'are', 'you']`

function App() {

const [snippets, setSnippets] = useState([])
const [newTitle, setNewTitle] = useState('')
const [newSnippet, setNewSnippet] = useState('')
// const [newTag, setNewTags] = useState('')

const handleSubmit = (event) => {
  event.preventDefault()
  console.log('submitted')
}

const handleTitleChange = event => {
  console.log(event.target.value)
  setNewTitle(event.target.value)
}
const handleSnippetChange = event => {setNewSnippet(event.target.value)}

  return (
    <div className="App">
      <header><h1>snippet dictionary</h1></header>
       <EntryForm 
         handleSubmit={handleSubmit}
         handleTitleChange={handleTitleChange}
         handleSnippetChange={handleSnippetChange}
         newTitle={newTitle}
         newSnippet={newSnippet}
       />
       <Search />

      <div className="results">
         <ul>
           <li>list</li>
           <li>of</li>
           <li>snippets</li>
         </ul>
      </div>

      <div className="snippet">
         <h2>replace element in array using splice</h2>
         <code>
           {message}
         </code>
         
        <div className="snippetButtonsContainer">
         <button>copy</button>
         <button>edit</button>
         <button>delete</button>
         </div>
      </div>

    </div>
  );
}

export default App;
