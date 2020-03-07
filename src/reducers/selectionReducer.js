const reducer = (state = null, action) => {
    switch (action.type) {
      case 'SET':
        const selection = action.data
        return selection
      case 'DELETE':
        return null
      case 'EDIT_CONTENT':
        return action.data.newItem
      default: 
        return state
    }
  }

  const setSelection = (item) => {
    return {
      type: 'SET',
      data: item
    }
  }

export { setSelection }
export default reducer