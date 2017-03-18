import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { ControlLabel, FormGroup  } from 'react-bootstrap'
import { map } from 'lodash'

import Question from '../Question'
import { actions } from '../../redux/modules/form'

const Category = ({ category, handleClick }) => {
  const controls = map(
    category.questions,
    (question, key) => (
      <Question
        key={key}
        categoryId={category.id}
        question={question}
        handleClick={handleClick}
      />
    )
  )

  return (
    <FormGroup key={category.id}>
      <ControlLabel><h2>{ category.name }</h2></ControlLabel>
      {controls}
    </FormGroup>
  )
}

Category.propTypes = {
  formId: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired
}

const mapStateToProps = (state, props) => {
  return {}
}

const mapDispatchToProps = (dispatch, { formId }) => {
  return {
    handleClick (categoryId, questionId, answer) {
      dispatch(actions.updateAnswer(formId, categoryId, questionId, answer))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category)
