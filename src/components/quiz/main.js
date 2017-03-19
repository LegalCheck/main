import React from 'react'
import Options from './options'
import QuestionText from './question'
import ProgressBar from '../progressBar'
import Progress from '../../utilities/progress'

const QuizPage = ({state, dispatch}) => {
  return (
    <div>
      <ProgressBar state={state} dispatch={dispatch}/>
      <QuestionText state={state} dispatch={dispatch}/>
      <Options state={state} dispatch={dispatch}/>
    </div>
  )
}

export default QuizPage
