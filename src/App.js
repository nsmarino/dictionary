import React, { useState, useEffect } from 'react'

import Search from './components/Search'
import EntryForm from './components/EntryForm'
import SnippetContainer from './components/SnippetContainer'
import List from './components/List'

const sampleArray = [
  {
    title: 'replace element',
    content:
    `
    const index = 1; 
    const amountToDelete = 1;
    const replacement = 'john';
  
    const arr = ['hi', 'tom', 'how', 'are', 'you']
  
    arr.splice(index, amountToDelete, replacement)
  
    // RESULT
    ['hi', 'john', 'how', 'are', 'you']
    `,
    id: 1,
  },
  {
    title: 'install library',
    content:
    `
    this is how to install a library
    do you get it?
    `,
    id: 2,
  },
  {
    title: 'import from subfolder',
    content:
    `
    will you import from subfolder
    or let it slip?
    `,
    id: 3,
  },
]

// what next:
// FRIDAY:

// categories
// in ALL tab: view A-Z, view BY CATEGORY
// edit snippets
// save to local storage

// eventually: move to server, user administration, download snippets as JSON


function App() {

const [snippets, setSnippets] = useState(sampleArray)
const [newTitle, setNewTitle] = useState('')
const [newSnippet, setNewSnippet] = useState('')
const [currentSnippet, setCurrentSnippet] = useState('')
// const [newTag, setNewTags] = useState('')

// FORM
const handleSubmit = (event) => {
  event.preventDefault()
  const id = snippets.length + 1
  const submission = {
    title: newTitle,
    content: newSnippet,
    id: id
  }
  const newArr = [...snippets, submission]
  setSnippets(newArr)
  setNewTitle('')
  setNewSnippet('')
}
const handleTitleChange = event => {
  setNewTitle(event.target.value)
}
const handleSnippetChange = event => {setNewSnippet(event.target.value)}


// SEARCH
const submitSearch = (event) => {
  event.preventDefault()
  const search = document.getElementById('search')
  if (search.value === '') return
  const regex = new RegExp(search.value, 'gi')
  const results = snippets.filter(snippet => snippet.title.match(regex))
  const container = document.getElementById('resultList')
  clearSearchResults()
  if (results.length === 0) {
    console.log('no results')
    const noResults = document.createElement('li')
    noResults.innerText='no results'
    container.appendChild(noResults)
    search.value=''
  }
  results.forEach(result => {
    const item = document.createElement('li')
    item.innerText = result.title
    container.appendChild(item)
  })
}

const clearSearchResults = () => {
  const container = document.getElementById('resultList')
  while (container.firstChild) {
    container.firstChild.remove()
  }
}

const clearSearch = () => {
  clearSearchResults()
  const search = document.getElementById('search')
  search.value=''
}



// RESULT LIST
const selectSnippet = (event) => {
  if (event.target.tagName !== 'LI' || event.target.innerText === 'no results') return;
  const selection = event.target.innerText
  const snippetToDisplay = snippets.find(x => x.title === selection)
  setCurrentSnippet(snippetToDisplay)
}

// DISPLAYED SNIPPET
const displaySnippet = (currentSnippet) => {
  if(currentSnippet === '') return
  return <SnippetContainer snippetObject={currentSnippet} handleCopy={copyToClipboard} handleEdit={handleEdit} handleDelete={handleDelete} />
}
const copyToClipboard = () => {
  var textField = document.createElement('textarea')
  textField.innerText = currentSnippet.content
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  console.log('copied!')
}
const handleEdit = () => {
  console.log('editing!')
}
const handleDelete = () => {
  const filteredSnippets = snippets.filter(snip => snip !== currentSnippet)
  setSnippets(filteredSnippets)
  setCurrentSnippet('')
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

      <Search
        handleSubmit={submitSearch}
        clearSearch={clearSearch}
        handleClick={selectSnippet}
      />

      <List 
        results={snippets}
        handleClick={selectSnippet}
      />

      {displaySnippet(currentSnippet)}

  </div>
  );
}

export default App;
