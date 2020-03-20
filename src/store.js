// import redux functions
import { createStore, combineReducers } from 'redux'

// import any redux middleware

// import reducers and combine
import itemReducer from './reducers/itemReducer'
import filterReducer from './reducers/filterReducer'
import selectionReducer from './reducers/selectionReducer'
import categoryReducer from './reducers/categoryReducer'
import viewReducer from './reducers/viewReducer'
import formReducer from './reducers/formReducer'

const reducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
    selection: selectionReducer,
    categories: categoryReducer,
    view: viewReducer,
    form: formReducer,
  })

// create and export store
const store = createStore(reducer)

// export store!
export default store
