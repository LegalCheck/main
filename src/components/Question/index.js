import React, { PropTypes } from 'react'
import { Button, ButtonToolbar, ControlLabel, FormGroup  } from 'react-bootstrap'

const Question = ({ categoryId, handleClick, question, answer = 's' }) => (
  <FormGroup key={question.id}>
    <ControlLabel>{ question.text }</ControlLabel>
    <ButtonToolbar>
      <Button
        bsStyle="primary"
        onClick={handleClick.bind(null, categoryId, question.id, 'y')}
      >
        Yes
      </Button>
      <Button
        bsStyle="success"
        onClick={handleClick.bind(null, categoryId, question.id, 'n')}
      >
        No
      </Button>
      <Button
        bsStyle="info"
        onClick={handleClick.bind(null, categoryId, question.id, 'u')}
      >
        Don't know
      </Button>
      <Button
        bsStyle="default"
        onClick={handleClick.bind(null, categoryId, question.id, 's')}
      >
        Skip
      </Button>
    </ButtonToolbar>
  </FormGroup>
)

Question.propTypes = {
  answer: PropTypes.string,
  cateogryId: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired
}

export default Question
