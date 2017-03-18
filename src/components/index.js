import React from 'react'
import { Col, Grid, PageHeader } from 'react-bootstrap' // See https://react-bootstrap.github.io/components.html
import Header from './header'
import Footer from './footer'
import HomepageMain from './homepage/main'

const App = ({state}) => (
  <div>
    <Header />
    <HomepageMain />
    <Footer />
  </div>
)

export default App
