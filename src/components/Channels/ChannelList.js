import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

import Filter from '../Filter'

class ChannelList extends Component {

  render() {

  }
}

const channelsToShow = (filter, channels) => {
  return channels.filter(channel =>
    channel.name.toLowerCase().replace(/\s/g, '').includes(filter.toLowerCase().replace(/\s/g, '')))
}

const mapStateToProps = (state) => {
  return {
    visibleChannels: channelsToShow(state.filter, state.channels)
  }
}

export default connect(
  mapStateToProps
)(ChannelList)




