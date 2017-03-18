import { combineEpics, createEpicMiddleware } from 'redux-observable'

import { fetchFormEpic, updateAnswersEpic } from './form/epics'

const epicMiddleware = createEpicMiddleware(
  combineEpics(
    fetchFormEpic,
    updateAnswersEpic
  )
)

export default epicMiddleware
