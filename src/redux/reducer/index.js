import initialState from '../initialState'
import clone from 'clone'


const reducer = (state = initialState, { type, payload = {} }) => {
  const newState = clone(state)
  switch (type) {
    case 'START_QUIZ':
      console.log('inside start quiz')
      newState.startedQuiz = true
      return newState
      break;
    default:
      return newState
  }
}

export default reducer
