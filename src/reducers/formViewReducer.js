const reducer = (state = true, action) => {
    switch (action.type) {
      case 'TOGGLE_FORM':
          const toggledState = !state
          return toggledState
      default: 
        return state
    }
  }
  
  const toggleFormView = () => {
    return {
      type: 'TOGGLE_FORM'
    }
  }
  
  export { toggleFormView }
  export default reducer