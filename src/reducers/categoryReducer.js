const reducer = (state = null, action) => {
    switch (action.type) {
      case 'SET_CAT':
          return action.data
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
  
  export { setCategories }
  export default reducer