import React from 'react'
import { Col, Grid, PageHeader } from 'react-bootstrap' // See https://react-bootstrap.github.io/components.html
import Header from './header'
import Footer from './footer'
import HomepageMain from './homepage/main'

const App = ({state, dispatch}) => {
  if (!state.startedQuiz) {
    return (
      <div>
        <Header />
        <HomepageMain dispatch={dispatch} />
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <h1>It works!</h1>
        <Footer />
      </div>
    )
  }
}

export default App