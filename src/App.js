import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//import logo from './logo.svg'
import './App.css'

const Menu = () => (
  <div>
    <Link to="/">Main</Link>&nbsp;
    <Link to="/channels">Channels</Link>&nbsp;
  </div>
)

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Welcome to Champula</h1>
          <Menu />
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default App
