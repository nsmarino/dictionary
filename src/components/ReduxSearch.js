import React from 'react'
import { searchItems } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'


const ReduxSearch = () => {

  const dispatch = useDispatch()
  
  const handleChange = (event) => {
        const input = event.target.value
        dispatch(searchItems(input))
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