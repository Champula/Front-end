import axios from 'axios'

const url = 'http://localhost:3001'

const getId = () => (100000 * Math.random()).toFixed(0)

const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const getUser = async (id) => {
  console.log(id)
  const response = await axios.get(`${url}/login`)
  return response.data[0]
}

const createNew = async ( content ) => {
  const response = await axios.post(url, { content, id: getId() , votes: 0 })
  return response.data
}

const addVote = async ( post ) => {
  const response = await axios.put(`${url}/${post.id}`, { ...post, votes: post.votes + 1 } )
  return response.data
}

export default {
  getAll, createNew, addVote, getUser
}