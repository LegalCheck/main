import React from 'react'
import Legal from './legal'
import HomepageButtons from './buttons'

const HomepageMain = ({state, dispatch}) => (
  <div className="home">
  	<img className="homeLogo" src="images/home-logo.svg"/>
    <h3 className="homeTitle">CAN THE LAW HELP ME?</h3>
    <div className="homeDescription">This Legal Checkup identifies potential legal issues and can be used to find out what a lawyer could help you with.</div>
    <HomepageButtons state={state} dispatch={dispatch} />
    <img className="homeCLLogo" src="images/cl-logo.png"/>
    <div className="homeDisclaimer">All of your answers will be confidential. Answering these questions does not make you a client of Community Law Wellington and Hutt Valley.</div>
  </div>
)

export default HomepageMain
