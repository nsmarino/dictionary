const initialState = ['library', 'css', 'array']

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_CAT':
          return action.data
      case 'NEW_CAT':
          return state.concat(action.data)
      default: 
        return state
    }
  }
  
  const setCategories = (cats) => {
    return {
      type: 'SET_CAT',
      data: cats
    }
  }

  const addCategory = newCat => {
    return {
      type: 'NEW_CAT',
      data: newCat
    }
  }
  
  export { setCategories, addCategory }
  export default reducer