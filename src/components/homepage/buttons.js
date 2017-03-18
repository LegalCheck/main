import React from 'react'
import Progress from '../../utilities/progress'

const HomepageButtons = ({state, dispatch}) => {
  return (
    <div>
      <button className='startbtn' onClick={() =>
        {
        dispatch({type: 'START_QUIZ'})}}>Start!</button>
    </div>
  )
}

export default HomepageButtons
