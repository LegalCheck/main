import React from 'react'
import { Col, Grid, PageHeader } from 'react-bootstrap' // See https://react-bootstrap.github.io/components.html
import Header from './header'
import Footer from './footer'
import HomepageMain from './homepage/main'
import QuizPage from './quiz/main'
import SummaryPage from './resultsPage/main'


const App = ({state, dispatch}) => {
  if (!state.startedQuiz) {
    return (
      <div>
        <Header />
        <HomepageMain state={state} dispatch={dispatch} />
        <Footer />
      </div>
    )
} else if (state.finishedQuiz) {
    return (
      <div>
        <Header />
        <SummaryPage state={state} dispatch={dispatch}/>
        <Footer />
      </div>
    )
  } else {
    return (
      <div>
        <Header />
        <QuizPage state={state} dispatch={dispatch}/>
        <Footer />
      </div>
    )
  }
}

export default App
