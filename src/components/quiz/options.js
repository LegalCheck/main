import React from 'react'
import Progress from '../../utilities/progress'

const Options = ({state, dispatch}) => {

  function getProgress(direction) {
    var position = state.quizPosition
    if (direction === 'forward') {
      return (position + 1) / state.questions.length * 100
    } else {
      return (position - 1) / state.questions.length * 100
    }
  }

    let answerValue = "skip"
    return (
        <div>
            <div>
                <input type="button" name="answer" value="Yes" onClick={() => {
                        answerValue = "Yes"
                        var progress = getProgress('forward')
                        Progress(progress)
                        navigate(state, dispatch, answerValue)
                    }}/>
                <input type="button" name="answer" value="Unsure" onClick={() => {
                        answerValue = "Unsure"
                        var progress = getProgress('forward')
                        Progress(progress)
                        navigate(state, dispatch, answerValue)
                    }}/>
                <input type="button" name="answer" value="No" onClick={() => {
                        answerValue = "No"
                        var progress = getProgress('forward')
                        Progress(progress)
                        navigate(state, dispatch, answerValue)
                    }}/>
            </div>

        <div className="quizBottomNav">
          <div className="quizDivider"></div>
                <input className="prevButton" type="button" name="navigate" value="Back" onClick={() => {
                    var progress = getProgress('back')
                      Progress(progress)
                      if (state.quizPosition === 0) return
                      else {
                          dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
                          dispatch({type: 'NAVIGATE', payload: -1})
                      }
                  }
                }/>
                <input className="nextButton" type="button" name="navigate" value="Next" onClick={() => {
                      var progress = getProgress('forward')
                      Progress(progress)
                      if (state.quizPosition === state.questions.length - 1) {
                          dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
                          dispatch({type: 'FINISH_QUIZ'})
                      } else {
                          dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
                          dispatch({type: 'NAVIGATE', payload: 1})
                      }
                  }
                }/>
            </div>
        </div>
    )
}

function navigate(state, dispatch, answerValue){
    dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
    if (state.quizPosition === state.questions.length - 1) {
        dispatch({type: 'FINISH_QUIZ'})
    } else {
        dispatch({type: 'NAVIGATE', payload: 1})
    }
}


export default Options
