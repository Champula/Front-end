import React, { Component } from 'react'
import { connect } from 'react-redux'

class Today extends Component {


  render() {
    return (
      <div>
        Today
      </div>
    )
  }
}

const mapDispatchToProps = {

}

export default connect(
  null,
  mapDispatchToProps
)(Today)