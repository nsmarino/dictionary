import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, combineReducers } from 'redux'
import App from './App';

import itemReducer from './reducers/itemReducer'
import filterReducer from './reducers/filterReducer'
import selectionReducer from './reducers/selectionReducer'
import categoryReducer from './reducers/categoryReducer'

import viewReducer from './reducers/viewReducer'

const reducer = combineReducers({
    items: itemReducer,
    filter: filterReducer,
    selection: selectionReducer,
    categories: categoryReducer,
    view: viewReducer,
  })

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(
      <App store={store} />,
      document.getElementById('root')
    )
  }
  
  // in a react-redux app you must always call an initial render,
  // then subscribe the store to it.
  console.log(store.getState())
  render()
  store.subscribe(render)
  store.subscribe(() => console.log(store.getState()))