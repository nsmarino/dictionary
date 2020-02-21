import React, { useState, useEffect } from 'react'

import Search from './components/Search'
import EntryForm from './components/EntryForm'
import SnippetContainer from './components/SnippetContainer'
import List from './components/List'
import DummyContainer from './components/DummyContainer'

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
    category: 'array',
    id: 1,
  },
  {
    title: 'install library',
    content:
    `
    this is how to install a library
    do you get it?
    `,
    category: 'library',
    id: 2,
  },
  {
    title: 'box-shadow',
    content:
    `
    box-shadow
    b o x - s h a d o w
    `,
    category: 'css',
    id: 3,
  },
]

// what next:
// FRIDAY:

// in ALL tab: view A-Z, view BY CATEGORY
// edit snippets
// save to local storage

// eventually: move to server, user administration, download snippets as JSON


function App() {

const [snippets, setSnippets] = useState(sampleArray)
const [newTitle, setNewTitle] = useState('')
const [newSnippet, setNewSnippet] = useState('')
const [currentSnippet, setCurrentSnippet] = useState('')
const [newCategory, setNewCategory] = useState('')
const [formVisibility, setFormVisibility] = useState(false)

// KEEPING FOR NOW AS EXAMPLE OF USE-EFFECT HOOK
// useEffect(() => {
//   const tabDivs = Array.from(document.querySelectorAll('.tab'))
//   setTabs(tabDivs)
// },[]);

// FORM
const handleSubmit = (event) => {
  event.preventDefault()
  if (newTitle === '' || newSnippet === '' || newCategory === ''  ) return
  console.log(newCategory)
  console.log(snippets)
  const id = snippets.length + 1
  const submission = {
    title: newTitle,
    content: newSnippet,
    category: newCategory,
    id: id
  }
  const updatedList = [...snippets, submission]
  setSnippets(updatedList)
  setNewTitle('')
  setNewSnippet('')
  setNewCategory('')
  setCurrentSnippet(submission)
  showForm()
}
const handleTitleChange = event => {
  setNewTitle(event.target.value)
}
const handleSnippetChange = event => {setNewSnippet(event.target.value)}

const handleCategoryChange = event => {
  setNewCategory(event.target.value)
}

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
  if(currentSnippet === '') return <DummyContainer />
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

// nav
const showForm = () => {
  const all = document.getElementById('all')
  const newForm = document.getElementById('newForm')
  setFormVisibility(!formVisibility)
  if (formVisibility) {
    all.style.display = 'block'
    newForm.style.display = 'none'
  } else {
    all.style.display = 'none'
    newForm.style.display = 'block'
  }

  // formVisibility ? all.style.display = '' : all.style.display = 'none'
  // formVisibility ? newForm.style.display = 'none' : newForm.style.display = ''
}


const searchClickAway = (event) => {
  if (event.target.className !== 'searchContainer') clearSearch()
}

  return (
  <div className="App" onClick={searchClickAway}>

      <header>
      <Search
        handleSubmit={submitSearch}
        clearSearch={clearSearch}
        handleClick={selectSnippet}
      />
      </header>



      <main>
      <EntryForm 
         handleSubmit={handleSubmit}
         handleTitleChange={handleTitleChange}
         handleSnippetChange={handleSnippetChange}
         handleCategoryChange={handleCategoryChange}
         newTitle={newTitle}
         newSnippet={newSnippet}
         newCategory={newCategory}
         showForm={showForm}
      />
      <List 
        results={snippets}
        handleClick={selectSnippet}
        showForm={showForm}
      />

      {displaySnippet(currentSnippet)}
      </main>

  </div>
  );
}

export default App;
