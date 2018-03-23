import axios from 'axios'

const url = 'http://localhost:3001/channels'

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const getById = async ( id ) => {
  if ( !Number.parseInt(id) ) {
    const channels = await getAll()
    const channel = channels.find(channel => channel.name.replace(/\s/g,'') === id )
    id = channel.id
  }
  const response = await axios.get(`${url}/${id}`)
  return response.data
}

export default {
  getAll, getById
}