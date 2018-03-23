import axios from 'axios'
const url = 'http://localhost:3001/login'

const login = async (credentials) => {
  console.log(credentials)
  const response = await axios.get(url)
  return response.data[0]
}

export default { login }