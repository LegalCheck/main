import React from 'react'

const ProgressBar = ({state, dispatch}) => {
    var category = state.questions[state.quizPosition].category
    var progress = state.quizPosition/state.questions.length * 100

    return (
        <div className="progress-bar">
          <div className="line"></div>
          <div className="speechTrack">
            <div className="js-speechContainer speechContainer" id={progress}>
              <div className="js-direction speechDirection" id={progress}></div>
                <div className='speechBubble'>{category}
                </div>
            </div>
          </div>
        </div>
    )

}

export default ProgressBar
