import initialState from '../initialState'
import clone from 'clone'


const reducer = (state = initialState, { type, payload = {} }) => {
  const newState = clone(state)
  switch (type) {
    case 'START_QUIZ':
      newState.startedQuiz = true
      return newState
      break;
    case 'ANSWER_QUESTION':
      newState.results.push({id: newState.quizPosition +1, answer: payload})
      return newState
      break;
    case 'NAVIGATE':
      newState.quizPosition += payload
      return newState
      break;
    case 'FINISH_QUIZ':
      newState.finishedQuiz = true
      return newState
      break;
    default:
      return newState
  }
}

export default reducer
