import React from 'react'

import ReduxList from './components/ReduxList'
import ReduxSelection from './components/ReduxSelection'
import ReduxSearch from './components/ReduxSearch'
import ReduxNewForm from './components/ReduxNewForm'
import ReduxEditor from './components/ReduxEditor'

// what next:
// 1. add edit and delete (COMPLETED 3/7/2020)
// 2. can add new categories (COMPLETED 3/7/2020)
// 3. make search work in category view (COMPLETED 3/7/2020)
// 4. refactor various view reducers into just one reducer (COMPLETED 3/7/2020)
// 5. css party
// 6. apply D.R.Y. to form/editor overlap
// 6. persist on server
// 7. add user auth
// 8. can download dictionary as JSON

const App = ({store}) => {

const formView = store.getState().view.form
const editorView = store.getState().view.editor

  return (
  <div className="App">

    <ReduxSearch store={store}/>

    {formView ? 
    <ReduxList store={store} />
    : 
    <ReduxNewForm store={store} />
    }

    {editorView ?
    <ReduxSelection store={store} /> 
    :
    <ReduxEditor store={store} />
    }
    
  </div>
  );
}

export default App;
