import React from 'react'
import Options from './options'
import Summary from './summary'
import ProgressBar from '../progressBar'

const SummaryPage = ({state, dispatch}) => (
  <div>
    <ProgressBar state={state} dispatch={dispatch}/>
    <Summary state={state} dispatch={dispatch}/>
    <Options state={state} dispatch={dispatch}/>
  </div>
)

export default SummaryPage
