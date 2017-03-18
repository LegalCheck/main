import React, { PropTypes } from 'react'
import { Button, ButtonToolbar, ControlLabel, FormGroup  } from 'react-bootstrap'

const Question = ({ handleClick, item, answer = 's' }) => (
  <FormGroup key={item.id}>
    <ControlLabel>{ item.question }</ControlLabel>
    <ButtonToolbar>
      <Button bsStyle="primary" onClick={handleClick.bind(null, item, 'y')}>Yes</Button>
      <Button bsStyle="success" onClick={handleClick.bind(null, item, 'n')}>No</Button>
      <Button bsStyle="info" onClick={handleClick.bind(null, item, 'u')}>Don't know</Button>
      <Button bsStyle="default" onClick={handleClick.bind(null, item, 's')}>Skip</Button>
    </ButtonToolbar>
  </FormGroup>
)

Question.propTypes = {
  item: PropTypes.object.isRequired
}

export default Question
