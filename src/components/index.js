import React from 'react'
import Header from './header'
import Footer from './footer'
import HomepageMain from './homepage/main'
import QuizPage from './quiz/main'
import SummaryPage from './resultsPage/main'
import Popup from './Popup'


const App = ({state, dispatch}) => {
  console.log('state in the component', state)
  if (state.startedQuiz && state.finishedQuiz === false) {
      return (
          <div>
              <Header />
              <QuizPage state={state} dispatch={dispatch}/>
              <Popup state={state} dispatch={dispatch} />
              <Footer state={state} dispatch={dispatch} />
          </div>
      )
} else if (state.finishedQuiz) {
    return (
      <div>
        <Header />
        <SummaryPage state={state} dispatch={dispatch}/>
        <Popup state={state} dispatch={dispatch} />
        <Footer state={state} dispatch={dispatch} />
      </div>
    )
  } else {
      return (
          <div>
              <Header />
              <HomepageMain state={state} dispatch={dispatch} />
              <Popup state={state} dispatch={dispatch} />
              <Footer state={state} dispatch={dispatch} />
          </div>
      )
  }
}

export default App
