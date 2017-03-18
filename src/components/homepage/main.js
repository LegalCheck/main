import React from 'react'
import Legal from './legal'
import HomepageButtons from './buttons'

const HomepageMain = ({dispatch}) => (
  <div className="home">
    <h3 className="homeTitle">CAN THE LAW HELP ME?</h3>
    <div className="homeDescription">This Legal Checkup identifies potential legal issues and can be used to find out what a lawyer could help you with.</div>
    <HomepageButtons dispatch={dispatch} />
    <Legal />
  </div>
)

export default HomepageMain
