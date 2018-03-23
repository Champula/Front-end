import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../reducers/userReducer'
import loginService from '../services/login'

const LoginForm = (props) => (
  <div className='Login'>
    <h2>Log in to Champula</h2>
    <form onSubmit={props.login}>
      <div>
        Username
        <input
          type='text'
          value={props.username}
          name='username'
          onChange={props.handleChange}
        />
      </div>
      <div>
        Password
        <input
          type='password'
          value={props.password}
          name='password'
          onChange={props.handleChange}
        />
      </div>
      <button type='submit'>Login</button>
    </form>
  </div>
)
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user,
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })

      this.props.logIn(user)
      window.localStorage.setItem('loggedUser', JSON.stringify(user))

      this.setState({ username: '', password: '', user })
    } catch(exception) {
      console.log('Error') //TODO
    }
  }

  logout = (event) => {
    event.preventDefault()

    window.localStorage.removeItem('loggedUser')

    this.props.logOut()
    this.setState({ user: null })
  }




  render() {
    const loggedIn = () => (
      <div className='loggedIn'>
        <p>{this.state.user.username} is logged in</p>
        <button onClick={this.logout}>Log out</button>
      </div>
    )

    return (
      <div>
        {this.state.user === null ?
          <LoginForm
            username={this.state.username}
            password={this.state.password}
            handleChange={this.handleChange}
            login={this.login}/>
          : loggedIn()
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: Object.keys(state.user).length > 0 ? state.user : null
  }
}


export default connect(
  mapStateToProps,
  actions
)(Login)
