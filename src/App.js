import React, { useState, useEffect } from 'react'

import Search from './components/Search'
import EntryForm from './components/EntryForm'
import SnippetContainer from './components/SnippetContainer'

const snippetObject = {
  title: 'replace element',
  content:
  `
  const index = 1; 
  const amountToDelete = 1;
  const replacement = 'john';

  const arr = ['hi', 'tom', 'how', 'are', 'you']

  arr.splice(index, amountToDelete, replacement)

  // RESULT
  ['hi', 'john', 'how', 'are', 'you']`
}

// what next:
// list displays snippet titles,
// click on snippet title to display full snippet,
// use form to create new snippet

// implement search
// categories


function App() {

const [snippets, setSnippets] = useState([])
const [newTitle, setNewTitle] = useState('')
const [newSnippet, setNewSnippet] = useState('')
const [currentSnippet, setCurrentSnippet] = useState(snippetObject)
// const [newTag, setNewTags] = useState('')


// FORM CONTROLS
const handleSubmit = (event) => {
  event.preventDefault()
  console.log('submitted')
}
const handleTitleChange = event => {
  console.log(event.target.value)
  setNewTitle(event.target.value)
}
const handleSnippetChange = event => {setNewSnippet(event.target.value)}

// fill snippet container with selected snippet
const displaySnippet = (currentSnippet) => {
  if(currentSnippet === '') return
  return <SnippetContainer snippetObject={currentSnippet} />
}



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

      {displaySnippet(currentSnippet)}
    </div>
  );
}

export default App;
