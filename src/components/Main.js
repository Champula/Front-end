import React, { Component } from 'react'

import { connect } from 'react-redux'

//---- Home imports -----//
import Login from './Login'
import Today from './Today'

const Home = () => (
  <div>
    <Login />
    <hr/>
    <Today />
  </div>
)

class Main extends Component {

  render() {
    return (
      <div>
        <Home />
      </div>
    )
  }
}

export default connect(
  null
)(Main)