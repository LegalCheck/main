import React from 'react'
import { Col, Grid, PageHeader } from 'react-bootstrap' // See https://react-bootstrap.github.io/components.html

const App = ({state}) => (
  <div>
    <Grid>
      <PageHeader>Legal CheckUp <small>Do I need a lawyer?</small></PageHeader>
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
  </div>
)

export default App
