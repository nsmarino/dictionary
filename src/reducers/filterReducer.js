// reducer for filter property of anecdote objects

const filterReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.data
        default:
            return state
    }
}

// action to be dispatched to filterReducer
const searchItems = (input) => {
    return {
        type: 'SET_FILTER',
        data: input
    }
}

// the reducer is always exported as the default
// and the actions are exported using curly bracket syntax
export { searchItems }

export default filterReducer