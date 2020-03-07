const getId = () => (100000 * Math.random()).toFixed(0)

const initialState = [
  {
    title: 'lord',
    content: 'this is lit',
    category: 'array',
    id: getId()
  },
  {
    title: 'gravy',
    content: 'union pool',
    category: 'array',
    id: getId()
  },
]
  
const alphaSort = (a, b) => {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_CONTENT':
      const idEdit = action.data.id 
        const itemToChange = state.find(i => i.id === idEdit)
        const changedItem = {
            title: action.data.newItem.title,
            content: action.data.newItem.content,
            category: action.data.newItem.category,
            id: itemToChange.id
        }
      return state.map(item =>
            item.id !== idEdit ? item : changedItem
            )
    case 'DELETE':
      const idDelete = action.data
      const itemToDelete = state.find(i => i.id === idDelete)
      return state.filter(item => item !== itemToDelete)
    case 'NEW':
      const newState = state.concat(action.data)
      return newState.sort(alphaSort)
    default: 
      return state
  }
}
  
const editItem = (id, newItem) => {
  return {
    type: 'EDIT_CONTENT',
    data: {
      id,
      newItem
    }
  }
}

const newItem = (item) => {
  return {
    type: 'NEW',
    data: item
  }
}

const deleteItem = (id) => {
  return {
    type: 'DELETE',
    data: id
  }
}

export { editItem, newItem, deleteItem }
export default reducer