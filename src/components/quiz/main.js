import React from 'react'
import Options from './options'
import QuestionText from './question'
import ProgressBar from '../progressBar'

const QuizPage = ({state, dispatch}) => (
  <div className="quiz">
    <ProgressBar state={state} dispatch={dispatch}/>
    <div className="quizQAContainer">
	    <QuestionText state={state} dispatch={dispatch}/>
	    <Options state={state} dispatch={dispatch}/>
    </div>
  </div>
)

export default QuizPage
