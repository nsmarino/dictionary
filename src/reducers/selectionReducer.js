const initialState = {
    title: 'vons',
    content: 'food lion',
    category: 'aldi',
    id: 12345
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET':
        const selection = action.data
        return selection
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