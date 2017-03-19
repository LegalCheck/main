import React from 'react'
import HomepageButtons from './buttons'

const HomepageMain = ({state, dispatch}) => (
  <div className="home">
  	<img className="homeLogo" src="images/home-logo.svg" alt="Homepage logo"/>
    <h3 className="homeTitle">CAN THE LAW HELP ME?</h3>
    <div className="homeDescription">This Legal Checkup identifies potential legal issues and can be used to find out what a lawyer could help you with.</div>
    <HomepageButtons state={state} dispatch={dispatch} />
    <img className="homeCLLogo" src="images/cl-logo.png" alt="Community Law logo"/>
    <div className="homeDisclaimer">All of your answers will be confidential. Answering these questions does not make you a client of Community Law Wellington and Hutt Valley.</div>
  </div>
)

export default HomepageMain
