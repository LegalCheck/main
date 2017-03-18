import React from 'react'

const Options = ({state, dispatch}) => {
    let answerValue = "skip"
    return (
        <div>
        <div>
        <input type="button" name="answer" value="Yes" onClick={() => answerValue = "Yes"}/>
        <input type="button" name="answer" value="Unsure" onClick={() => answerValue = "Unsure"}/>
        <input type="button" name="answer" value="No" onClick={() => answerValue = "No"}/>
        </div>
        <div>
        <input type="button" name="navigate" value="Back" onClick={() => {
              dispatch({type: 'ANSWER_QUESTION', payload: answerValue})
              dispatch({type: 'NAVIGATE', payload: -1})
          }
        }/>
        <input type="button" name="navigate" value="Next" onClick={() => {
              if (state.quizPosition === state.questions.length - 1) {
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
