import React from 'react'
import Options from './options'
import QuestionText from './question'
import ProgressBar from '../progressBar'

const QuizPage = ({state, dispatch}) => (
  <div>
    <ProgressBar state={state} dispatch={dispatch}/>
    <QuestionText state={state} dispatch={dispatch}/>
    <Options state={state} dispatch={dispatch}/>
  </div>
)

export default QuizPage
