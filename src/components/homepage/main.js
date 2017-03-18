import React from 'react'
import Legal from './legal'
import HomepageButtons from './buttons'

const HomepageMain = ({dispatch}) => (
  <div>
    <h3>Do you need a lawyer?</h3>
    <HomepageButtons dispatch={dispatch} />
    <Legal />
  </div>
)

export default HomepageMain
