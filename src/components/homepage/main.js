import React from 'react'
import Legal from './legal'
import HomepageButtons from './buttons'

const HomepageMain = ({state, dispatch}) => (
  <div>
    <Legal />
    <HomepageButtons state={state} dispatch={dispatch} />
  </div>
)

export default HomepageMain
