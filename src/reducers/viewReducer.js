const initialState = {
    form: true,
    editor: true,
    categories: true,
    addCategory: true,
}

// object destructuring needed?
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'TOGGLE_FORM':
        return {...state, form: !state.form}
      case 'TOGGLE_EDITOR':
        return {...state, editor: !state.editor}
      case 'TOGGLE_CATEGORIES':
        return {...state, categories: !state.categories}
      case 'TOGGLE_ADD_CATEGORY':
        return {...state, addCategory: !state.addCategory}
      default: 
      return state
    }
  }
  
  const toggleFormView = () => {
    return {
      type: 'TOGGLE_FORM'
    }
  }

  const toggleEditorView = () => {
    return {
      type: 'TOGGLE_EDITOR'
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
  
  export { toggleFormView, toggleEditorView, toggleCategoriesView, toggleAddCategoryView }
  export default reducer