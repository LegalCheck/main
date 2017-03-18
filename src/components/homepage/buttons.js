import React from 'react'

const HomepageButtons = ({dispatch}) => (
  <div>
    <button onClick={() => dispatch({type: 'START_QUIZ'})}>Start!</button>
    <button>Print questions</button>
  </div>
)

export default HomepageButtons
