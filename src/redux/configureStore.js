import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './modules/rootReducer'
import epicMiddleware from './modules/epicMiddleware'

const configureStore = function () {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(epicMiddleware))
  )

  return store
}

export default configureStore
