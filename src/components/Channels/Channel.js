
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { fecthChannel } from '../../reducers/channelReducer'
//import { Link } from 'react-router-dom'

import Filter from '../Filter'

class Channel extends Component {

  componentDidMount() {
    this.props.getChannel()
  }

  render() {
    let { channel } = this.props

    return (
      <div>
        <h2>{channel.name}</h2>
        <Filter />
        {/* {this.props.visiblePosts.map(channel =>
          <li key={channel.id} >
            {console.log(channel)}
            <div>
              {channel.name}
            </div>
          </li>
        )} */}
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
