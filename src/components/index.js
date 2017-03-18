import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import cuid from 'cuid'

class Home extends Component {
  componentWillMount () {
    this.id = cuid()
  }

  render () {
    return (
      <div>
        <p>
          Try our Legal CheckUp to see how the law can help you.
        </p>
        <p>
          <Link className="btn btn-success" to={`/forms/${this.id}`}>Begin</Link>
        </p>
      </div>
    )
  }
}


export default Home
