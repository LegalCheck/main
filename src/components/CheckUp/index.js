import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { map } from 'lodash'
import { Link } from 'react-router-dom'

import Question from '../Question'
import { actions, selectors } from '../../redux/modules/form'

class CheckUp extends Component {
  componentWillMount () {
    const { isLoaded, loadForm } = this.props

    if (!isLoaded) {
      loadForm()
    }
  }

  render () {
    const { form, handleClick, isLoaded } = this.props

    console.log('form', form)

    const controls = map(
      form,
      (item, key) => (
        <Question key={key} item={item} handleClick={handleClick}/>
      )
    )

    return isLoaded
      ? (
        <div>
          <form>
            {controls}
          </form>
          <p>
            <Link to="/">Home</Link>
          </p>
        </div>
      )
      : <div>Loading</div>
  }
}

CheckUp.propTypes = {
  form: PropTypes.array,
  handleClick: PropTypes.func.isRequired,
  isLoaded: PropTypes.bool,
  loadForm: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    form: selectors.getForm(state) || [],
    isLoaded: selectors.isLoaded(state)
  }
}

const mapDispatchToProps = (dispatch, { match }) => {
  return {
    handleClick (item, answer) {
      dispatch(actions.updateAnswer(match.params.formId, item, answer))
    },
    loadForm () {
      dispatch(actions.fetchForm(match.params.formId))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckUp)
