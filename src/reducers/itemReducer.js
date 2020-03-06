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
      const id = action.data.id 
        const itemToChange = state.find(i => i.id === id)
        const changedItem = {
            ...itemToChange,
            content: action.data.newContent
        }
        return state.map(item =>
            item.id !== id ? item : changedItem
            )
    case 'DELETE':
      return state
    case 'NEW':
      const newState = state.concat(action.data)
      console.log(newState.sort(alphaSort))
      return newState
    default: 
      return state
  }
}
  
const editItem = (id, content) => {
  return {
    type: 'VOTE',
    data: {
      id,
      content
    }
  }
}

const newItem = (item) => {
  return {
    type: 'NEW',
    data: item
  }
}

export { editItem, newItem }
export default reducer