const initialState = {
    categories: true,
    addCategory: true,
}

// object destructuring needed?
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_CATEGORIES':
        return {...state, categories: !state.categories}
      case 'TOGGLE_ADD_CATEGORY':
        return {...state, addCategory: !state.addCategory}
      default: 
      return state
    }
  }
  
  const toggleCategoriesView = () => {
    return {
      type: 'TOGGLE_CATEGORIES'
    }
  }

  const toggleAddCategoryView = () => {
      return {
          type: 'TOGGLE_ADD_CATEGORY'
      }
  }
  
  export { toggleCategoriesView, toggleAddCategoryView }
  export default reducer