import React from 'react'

function Popup({state, dispatch}) {
  const customClass = state.showPopup ? 'popup' : 'hidden'
  return (
    <div className={customClass}>
    <div className='copyright-close' onClick={() => dispatch({type:'SHOW_HIDE_COPYRIGHT'})}>
      <img className="answerImage" src="images/no.svg" alt="No icon"/>
    </div>
    <p>
      All of your answers will be confidential. Answering these questions does not make you a client of Community Law Wellington and Hutt Valley. We are open everyday for free legal drop in sessions, see www.wclc.org.nz or call us on 499 2928 to find out times.
      This resource is adapted from the Australian “Legal Health Check” developed by QPILCH and NACLC
    </p>
    </div>
  )
}

module.exports = Popup
