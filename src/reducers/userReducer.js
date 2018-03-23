import userService from '../services/user'
//import loginService from '../services/login'

export const userReducer = (store = {}, action) => {
  switch(action.type) {
  case 'INITUSER':
    console.log('init', action.data)
    return action.data

  case 'LOGIN':
    console.log('login', action.data)
    return action.data

  case 'LOGOUT':
    console.log('logout', action.data)
    return action.data

  case 'CREATE':
    return [...store, action.data]

  default:
    return store
  }
}

export const userInitialization = (user) => {
  return async (dispatch) => {
    //const user = await userService.getUser(id)
    dispatch({
      type: 'INITUSER',
      data: user
    })
  }
}

export const userCreation = (user) => {
  return async (dispatch) => {
    const newUser = await userService.createNew(user)
    dispatch({
      type: 'CREATE',
      data: newUser
    })
  }
}

export const logIn = ( user ) => {
  return (dispatch) => {
    const loggeduser = user
    dispatch({
      type: 'LOGIN',
      data: loggeduser
    })
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      data: {}
    })
  }
}