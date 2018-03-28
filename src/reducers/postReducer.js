import channelService from '../services/channels'

export const postReducer = (store = [], action) => {
  switch(action.type) {
  case 'INIT':
    return action.data

  case 'GETPOST':
    return action.data

  case 'CREATEPOST':
    return [...store, action.data]

  case 'FILTERTYPE':
    return store.filter(post =>
      post.type === action.data)

  default:
    return store
  }
}


export const channelsInitialization = () => {
  return async (dispatch) => {
    const channels = await channelService.getAll()
    dispatch({
      type: 'INIT',
      data: channels
    })
  }
}

export const fecthPost = (id) => {
  return async (dispatch) => {
    const post = await channelService.getPostById(id)
    dispatch({
      type: 'GETPOST',
      data: post
    })
  }
}

export const postCreation = ( data ) => {
  return async (dispatch) => {
    //const newUser = await channelService.createNewPost(user)
    dispatch({
      type: 'CREATEPOST',
      data
    })
  }
}

export const filterType  = ( type ) => {
  return async (dispatch) => {
    //const newUser = await channelService.createNewPost(user)
    dispatch({
      type: 'FILTERTYPE',
      data : type
    })
  }
}