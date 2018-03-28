
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fecthChannel } from '../../reducers/channelReducer'
//import { Link } from 'react-router-dom'

import Filter from '../Filter'
import PostList from '../posts/PostList'

class Channel extends Component {

  componentDidMount() {
    this.props.getChannel()
  }

  render() {
    let { channel } = this.props
    let { posts } = channel

    if ( !posts ) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <div>
        <h2>{channel.name}</h2>
        <Filter />
        <PostList />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    channel: state.channel
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.location.params || ownProps.match.params.id
  return {
    getChannel: () => {
      dispatch(fecthChannel(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channel)
