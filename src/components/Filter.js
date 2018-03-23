import React, { Component } from 'react'
import { connect } from 'react-redux'
import { filterText } from '../reducers/filterReducer'

class Filter extends Component {
  handleChange = (event) => {
    let text = event.target.value
    this.props.filterText(text)
  }
  render() {
    const style = {
      marginBottom: 10
    }

    return (
      <div style={style}>
        Filter <input onChange={this.handleChange}/>
      </div>
    )
  }
}

const mapDispatchToProps = {
  filterText
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)