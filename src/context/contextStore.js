import Context from './context'
import createReducer from './createReducer'
import PropTypes from 'prop-types'
import React, { useReducer } from 'react'

const ContextStore = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  )
}

ContextStore.propTypes = {
  children: PropTypes.any,
}

const initialState = {
  locals: 'fo',
}

const reducer = createReducer(initialState, {
  reset: () => initialState,
  setLocals: (state, action) => ({
    ...state,
    locals: action.locals,
  })
})

export default ContextStore