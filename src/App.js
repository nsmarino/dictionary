import React from 'react'

import ReduxList from './components/ReduxList'
import ReduxSelection from './components/ReduxSelection'
import ReduxSearch from './components/ReduxSearch'

import ReduxForm from './components/ReduxForm'

import { useSelector } from 'react-redux'

// what next:
// 1. add edit and delete (COMPLETED 3/7/2020)
// 2. can add new categories (COMPLETED 3/7/2020)
// 3. make search work in category view (COMPLETED 3/7/2020)
// 4. refactor various view reducers into just one reducer (COMPLETED 3/7/2020)
// 5. redux hooks and combine forms (COMPLETED 3/18/2020)
// 5a. finetune in form component: btn text and category value
// 6. css party
// 6. persist on server
// 7. add user auth
// 8. can download dictionary as JSON

const App = () => {

const state = useSelector(state => state)
console.log(state)

const formView = useSelector(state => state.form.visible)

  return (
  <div className="App">

    <ReduxSearch />

    <ReduxList /> 

    <ReduxSelection /> 

    { formView ? <ReduxForm /> : null }
    
  </div>
  );
}

export default App;
