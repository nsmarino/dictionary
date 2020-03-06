import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'

const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      case 'ZERO':
        return 0
      default: // if none of the above matches, code comes here
      return state
    }
  }


const Demo = props => {

    const store = createStore(counterReducer)

    return (
 <div>
      <div>
        {store.getState()}
      </div>
      <button 
        onClick={e => store.dispatch({ type: 'INCREMENT' })}
      >
        plus
      </button>
      <button
        onClick={e => store.dispatch({ type: 'DECREMENT' })}
      >
        minus
      </button>
      <button 
        onClick={e => store.dispatch({ type: 'ZERO' })}
      >
        zero
      </button>
    </div>
    )
}


// store was created
// we can update store by dispatching actions to it
// store.dispatch({type: 'INCREMENT'})
// get state of store with store.getState()
// the store will call certain recall functions whenever state is changed. you can
// set these recall functions with subscribe(function)

const renderApp = () => {
    ReactDOM.render(<Demo />, document.getElementById('root'))
  }
  
  renderApp()
  store.subscribe(renderApp)
