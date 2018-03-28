import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterType } from '../reducers/postReducer'

class Today extends Component {


  render() {
    return (
      <div>
        Today
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.channels.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getChannel: () => {
      dispatch(filterType('event'))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today)