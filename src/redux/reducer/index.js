import initialState from '../initialState'
import clone from 'clone'


const reducer = (state = initialState, { type, payload = {} }) => {
  const newState = clone(state)
  switch (type) {
    default:
      return newState
  }
}

export default reducer
