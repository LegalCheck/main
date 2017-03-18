import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import { Grid, PageHeader } from 'react-bootstrap'

import Home from './components'
import CheckUp from './components/CheckUp'
import configureStore from './redux/configureStore'

const history = createHistory()
const store = configureStore()
const main = document.getElementById('root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Grid>
        <PageHeader>Legal CheckUp <small>Can the law help me?</small></PageHeader>
        <Route exact path="/" component={Home}/>
        <Route path="/forms/:formId" component={CheckUp}/>
      </Grid>
    </ConnectedRouter>
  </Provider>,
  main
)
