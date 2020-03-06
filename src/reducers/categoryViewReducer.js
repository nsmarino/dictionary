const reducer = (state = true, action) => {
    switch (action.type) {
      case 'TOGGLE_CAT':
          const toggledState = !state
          return toggledState
      default: 
        return state
    }
  }
  
  const toggleCatView = () => {
    return {
      type: 'TOGGLE_CAT'
    }
  }
  
  export { toggleCatView }
  export default reducer