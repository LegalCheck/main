import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import App from './components'
import reducer from './redux/reducer'

const root = document.getElementById('root')
const store = createStore(reducer, devToolsEnhancer())

render(
  <Provider store={store}>
    <App state={store.getState()}/>
  </Provider>,
  root
)
