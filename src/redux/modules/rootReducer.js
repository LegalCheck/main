import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import form from './form/reducer'

export default combineReducers({
  form,
  router: routerReducer
})
