import {
  FETCH_FORM,
  FETCH_FORM_FULFILLED,
  FETCH_FORM_FAILED,
  UPDATE_ANSWER,
  UPDATE_ANSWER_FULFILLED,
  UPDATE_ANSWER_FAILED
} from '../constants'
import { updateAnswers } from '../domain'

const initialState = {
  formFetched: false,
  isFetching: false,
  error: false
}

const reducer = function (state = initialState, action = {}) {
  const {
    payload: {
      answer,
      answers,
      formId,
      item,
      questions,
      isFetching,
      formFetched,
      error
    } = {},
    type
  } = action

  switch (type) {
    case FETCH_FORM:
      return {
        ...state,
        isFetching,
        formFetched
      }
    case FETCH_FORM_FULFILLED:
      return {
        ...state,
        isFetching,
        formFetched,
        questions
      }
    case FETCH_FORM_FAILED:
      return {
        ...state,
        isFetching,
        formFetched,
        error
      }
    case UPDATE_ANSWER:
      return {
        ...state,
        answers: updateAnswers(state.answers, formId, item, answer)
      }
    case UPDATE_ANSWER_FULFILLED:
      return {
        ...state,
        answers
      }
    case UPDATE_ANSWER_FAILED:
      return {
        ...state,
        error
      }
    default:
      return state
  }
}

export default reducer
