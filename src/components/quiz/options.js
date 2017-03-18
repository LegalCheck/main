import React from 'react'
import Progress from '../../utilities/progress'

const Options = ({state, dispatch}) => {
    var progress = state.quizPosition/state.questions.length * 100
    let answerValue = "skip"
    return (
        <div>
        <div>
        <input type="button" name="answer" value="Yes" onClick={() => {
                answerValue = "Yes"
                dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
                if (state.quizPosition === state.questions.length - 1) {
                    dispatch({type: 'FINISH_QUIZ'})
                } else {
                    dispatch({type: 'NAVIGATE', payload: 1})
                }
            }}/>
        <input type="button" name="answer" value="Unsure" onClick={() => {
                answerValue = "Unsure"
                dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
                if (state.quizPosition === state.questions.length - 1) {
                    dispatch({type: 'FINISH_QUIZ'})
                } else {
                    dispatch({type: 'NAVIGATE', payload: 1})
                }
            }}/>
        <input type="button" name="answer" value="No" onClick={() => {
                answerValue = "No"
                dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
                if (state.quizPosition === state.questions.length - 1) {
                    dispatch({type: 'FINISH_QUIZ'})
                } else {
                    dispatch({type: 'NAVIGATE', payload: 1})
                }
            }}/>
        </div>
        <div>
        <input type="button" name="navigate" value="Back" onClick={() => {
              Progress(progress)
              if (state.quizPosition === 0) return
              else {
                  dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
                  dispatch({type: 'NAVIGATE', payload: -1})
              }
          }
        }/>
        <input type="button" name="navigate" value="Next" onClick={() => {
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


export default Options
