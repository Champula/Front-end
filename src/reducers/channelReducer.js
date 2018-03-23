import channelService from '../services/channels'

export const channelsReducer = (store = [], action) => {
  switch(action.type) {
  case 'INIT':
    return action.data

  default:
    return store
  }
}

export const channelReducer = (store = [], action) => {
  switch(action.type) {
  case 'GETCHANNEL':
    return action.data

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

export const fecthChannel = (name) => {
  return async (dispatch) => {
    const channel = await channelService.getById(name)
    dispatch({
      type: 'GETCHANNEL',
      data: channel
    })
  }
}
