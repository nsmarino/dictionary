import React, { useState, useEffect } from 'react'

import Search from './components/Search'
import EntryForm from './components/EntryForm'
import SnippetContainer from './components/SnippetContainer'
import List from './components/List'
import DummyContainer from './components/DummyContainer'

// what next:

// fine tune editor - how it submits
// refactoring -- migrate to redux?
// improve search UX
// then: move to server, user administration, download snippets as JSON


function App() {

const [snippets, setSnippets] = useState([])
const [newTitle, setNewTitle] = useState('')
const [newSnippet, setNewSnippet] = useState('')
const [currentSnippet, setCurrentSnippet] = useState('')
const [newCategory, setNewCategory] = useState('')
const [categories, setCategories] = useState([])
const [formVisibility, setFormVisibility] = useState(false)

const [editorVis, setEditorVis] = useState(true)

const [currentSnippetTitle, setCurrentSnippetTitle] = useState('')
const [currentSnippetContent, setCurrentSnippetContent] = useState('')
const [currentSnippetCategory, setCurrentSnippetCategory] = useState('')

useEffect(() => {
  const saved = window.localStorage.getItem('savedSnippets')
  if (saved) {
    const initialSnippets = JSON.parse(saved)
    setSnippets(initialSnippets)
  }
},[]);

// helper functions
const compare = (a, b) => {
  const snippetA = a.title.toLowerCase();
  const snippetB = b.title.toLowerCase();

  let comparison = 0;
  if (snippetA > snippetB) {
    comparison = 1;
  } else if (snippetA < snippetB) {
    comparison = -1;
  }
  return comparison;
}
const saveToLocalStorage = snippetList => {
  window.localStorage.setItem(
    'savedSnippets', JSON.stringify(snippetList)
  )   
}


// FORM
const handleSubmit = (event) => {
  event.preventDefault()
  if (newTitle === '' || newSnippet === '' || newCategory === ''  ) return

  const generateId = () => {
    return Number((Math.random() * 1000000).toFixed(0))
  }
  const submission = {
    title: newTitle,
    content: newSnippet,
    category: newCategory,
    id: generateId()
  }
  const updatedList = [...snippets, submission]
  updatedList.sort(compare)

  saveToLocalStorage(updatedList)

  setSnippets(updatedList)
  setNewTitle('')
  setNewSnippet('')
  setNewCategory('')
  setCurrentSnippet(submission)
  showForm()
  categorySort(updatedList)
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
  return <SnippetContainer 
           snippetObject={currentSnippet} 
           handleCopy={copyToClipboard} 
           handleDelete={handleDelete} 
           handleEdit={handleEdit}
           editTitle={handleCurrentSnippetTitleChange}
           editContent={handleCurrentSnippetContentChange}
           editCategory={handleCurrentSnippetCategoryChange}
           toggleEditor={toggleEditor}
           editorVis={editorVis}
         />
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

const handleDelete = () => {
  const filteredSnippets = snippets.filter(snip => snip !== currentSnippet)
  setSnippets(filteredSnippets)
  categorySort(filteredSnippets)
  saveToLocalStorage(filteredSnippets)
  // window.localStorage.setItem(
  //   'savedSnippets', JSON.stringify(filteredSnippets)
  // )  
  setCurrentSnippet('')
}

const handleEdit = (event) => {
  event.preventDefault()
  const editedSnippetObject = {
    title: currentSnippetTitle,
    content: currentSnippetContent,
    category: currentSnippetCategory,
    id: currentSnippet.id
  }
  const updatedSnippets = snippets.map(s => s.id !== currentSnippet.id ? s : editedSnippetObject).sort(compare)
  setCurrentSnippet(editedSnippetObject)
  setSnippets(updatedSnippets)
  categorySort(updatedSnippets)
  saveToLocalStorage(updatedSnippets)
  toggleEditor()
}
const toggleEditor = () => setEditorVis(!editorVis)
const handleCurrentSnippetTitleChange = event => {setCurrentSnippetTitle(event.target.value)}
const handleCurrentSnippetContentChange = event => {setCurrentSnippetContent(event.target.value)}
const handleCurrentSnippetCategoryChange = event => {setCurrentSnippetCategory(event.target.value)}

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
}

const categorySort = (snippetCollection) => {
  const allCategories = snippetCollection.map(s => s.category)
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  const uniqueCats = allCategories.filter(onlyUnique).sort()

  const uniqueCatObjects = uniqueCats.map(cat => {
    const matchingSnippets = snippetCollection.filter(s => s.category === cat)
    const catObj = {
      category: cat,
      snippets: matchingSnippets
    }
    return catObj
  })
  setCategories(uniqueCatObjects)
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
        snippets={snippets}
        handleClick={selectSnippet}
        showForm={showForm}
        categorySort={categorySort}
        categories={categories}
      />

      {displaySnippet(currentSnippet)}
      </main>

  </div>
  );
}

export default App;
