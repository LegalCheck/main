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
      categories,
      categoryId,
      questionId,
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
        categories
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
        categories: updateAnswers(state.categories, categoryId, questionId, answer)
      }
    case UPDATE_ANSWER_FULFILLED:
      return state
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
