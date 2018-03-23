import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { channelsReducer, channelReducer, channelsInitialization } from './reducers/channelReducer'
import filterReducer from './reducers/filterReducer'
import { userReducer, userInitialization } from './reducers/userReducer'


export const initApp = () => {
  return async (dispatch) => {
    dispatch(channelsInitialization())
    const loggedUserJSON = window.localStorage.getItem('loggedUser')
    if (loggedUserJSON) {

      const user = JSON.parse(loggedUserJSON)
      dispatch(userInitialization(user))
    }
  }
}


const reducer = combineReducers({
  channels: channelsReducer,
  channel: channelReducer,
  filter: filterReducer,
  user: userReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store