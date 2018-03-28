
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import { fecthChannel } from '../../reducers/channelReducer'


class Post extends Component {

  componentDidMount() {
    this.props.getPost()
  }

  render() {
    let { channel, post  } = this.props
    console.log(post)
    if ( !post ) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <div>
        <h2>{post.name}</h2>

        <button><Link to={{
          pathname: `/channels/${channel.name.replace(/\s/g,'')}`,
          params: channel.id
        }} >Back to {channel.name}</Link></button>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    channel: state.channel,
    post: state.channel.posts ? state.channel.posts.find(post => post.id === ownProps.match.params.id ) : null
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.url.split('/')[2]
  return {
    getPost: () => {
      dispatch(fecthChannel(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
