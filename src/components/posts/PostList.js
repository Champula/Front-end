import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class PostList extends Component {

  render() {
    return (
      <div>
        {this.props.visiblePosts.map(post =>
          <li key={post.id} >
            <Link to={{
              pathname: `/channels/${this.props.channel.name.replace(/\s/g,'')}/${post.id}`,
              params: this.props.channel.id
            }}>{post.name} </Link>
          </li>
        )}
      </div>
    )
  }
}

const postsToShowByName = (filter, posts) => {
  return posts.filter(post =>
    post.name.toLowerCase().replace(/\s/g, '').includes(filter.toLowerCase().replace(/\s/g, '')))
}

const mapStateToProps = (state) => {
  return {
    visiblePosts: postsToShowByName(state.filter, state.channel.posts),
    channel: state.channel
  }
}

export default connect(
  mapStateToProps
)(PostList)