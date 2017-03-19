import React from 'react'

const HomepageButtons = ({dispatch}) => (
  <div className="buttonContainer">
    <button className="startButton" onClick={() => dispatch({type: 'START_QUIZ'})}>START!</button>
  </div>
)

export default HomepageButtons
