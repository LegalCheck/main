import React from 'react'

const Options = ({state, dispatch}) => (
  <div>
    <div>
      <input type="button" name="answer" value="Y"/>
      <input type="button" name="answer" value="N"/>
      <input type="button" name="answer" value="Unsure"/>
    </div>
    <div>
      <input type="button" name="navigate" value="Back" onClick={() => dispatch({type: 'NAVIGATE', payload: -1})}/>
      <input type="button" name="navigate" value="Next" onClick={() => dispatch({type: 'NAVIGATE', payload: 1})}/>
    </div>
  </div>
)

export default Options
