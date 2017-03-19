import React from 'react'
import Progress from '../../utilities/progress'

const HomepageButtons = ({dispatch}) => (
  <div className="buttonContainer">
    <button className="startButton" onClick={() => dispatch({type: 'START_QUIZ'})}>START!</button>
  </div>
)

export default HomepageButtons
