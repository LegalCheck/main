import 'rxjs'
import { Observable } from 'rxjs/Observable'

import {
  FETCH_FORM,
  UPDATE_ANSWER
} from '../constants'
import {
  fetchFormFailed,
  fetchFormFulfilled,
  updateAnswerFailed,
  updateAnswerFulfilled
} from '../actions'

export const fetchFormEpic = function (action$) {
  return action$.ofType(FETCH_FORM)
    .mergeMap(({ payload }) =>
        Observable.ajax.put(
          `http://localhost:3001/forms/${payload.formId}`,
          {},
          { 'Content-Type': 'application/json' }
        )
          .map(a => fetchFormFulfilled(a.response))
          .catch(a => Observable.of(fetchFormFailed(a.error)))
    )
}

export const updateAnswersEpic = function (action$) {
  return action$.ofType(UPDATE_ANSWER)
    .mergeMap(({ payload }) =>
        Observable.ajax.patch(
          `http://localhost:3001/forms/${payload.formId}`,
          {
            response: {
              [payload.question]: payload.answer
            }
          },
          {
            'Content-Type': 'application/json'
          }
        )
          .map(response => updateAnswerFulfilled(response))
          .catch(error => Observable.of(updateAnswerFailed(error)))
    )
}
