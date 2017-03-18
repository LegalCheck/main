import React from 'react'
import { Col, Grid, PageHeader } from 'react-bootstrap' // See https://react-bootstrap.github.io/components.html
import Header from './header'
import Footer from './footer'

const App = ({state}) => (
  <div>
    <Header />
    <Grid>
      <Col md={4}>
        <p>Col left</p>
      </Col>
      <Col md={4}>
        <p>{state.questions.money[0].text}</p>
      </Col>
      <Col md={4}>
        <p>Col right</p>
      </Col>
    </Grid>
    <Footer />
  </div>
)

export default App
