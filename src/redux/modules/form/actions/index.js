import {
  FETCH_FORM,
  FETCH_FORM_FULFILLED,
  FETCH_FORM_FAILED,
  UPDATE_ANSWER,
  UPDATE_ANSWER_FULFILLED,
  UPDATE_ANSWER_FAILED
} from '../constants'

export const fetchForm = function (formId) {
  return {
    type: FETCH_FORM,
    payload: {
      formId,
      isFetching: true,
      formFetched: false
    }
  }
}

export const fetchFormFulfilled = function (categories) {
  return {
    type: FETCH_FORM_FULFILLED,
    payload: {
      isFetching: false,
      categories,
      formFetched: true
    }
  }
}

export const fetchFormFailed = function (error) {
  return {
    type: FETCH_FORM_FAILED,
    payload: {
      isFetching: false,
      formFetched: false,
      error
    }
  }
}

export const updateAnswer = function (payload) {
  return {
    type: UPDATE_ANSWER,
    payload
  }
}

export const updateAnswerFulfilled = function (answers) {
  return {
    type: UPDATE_ANSWER_FULFILLED,
    payload: {
      isFetching: false,
      answers,
      formFetched: true
    }
  }
}

export const updateAnswerFailed = function (error) {
  return {
    type: UPDATE_ANSWER_FAILED,
    payload: {
      isFetching: false,
      formFetched: false,
      error
    }
  }
}
