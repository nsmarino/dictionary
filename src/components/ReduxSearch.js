import React from 'react'
import { searchItems } from '../reducers/filterReducer'

const ReduxSearch = ({store}) => {

    const handleChange = (event) => {
        const input = event.target.value
        store.dispatch(searchItems(input))
    }
    const style = {
      marginBottom: 10
    }
  
    return (
      <div style={style}>
        search <input onChange={handleChange} />
      </div>
    )
  }

export default ReduxSearch