import axios from 'axios'
const token = '184ce34cf8ce109411317b3b60c8af'

const ApiService = {

  init (baseURL) {
    // axios.defaults.baseURL = baseURL
  },

  get (resource) {
    return axios.get(resource)
  },

  getCollection (name, id) {
    return axios.get(`/static/${name.toLowerCase()}.json`)
    // return axios.get(`/api/collections/get/${name}?token=${token}${id ? '&filter[_id]=' + id : ''}`)
  },

  getSingleton (name) {
    return axios.get(`/static/${name.toLowerCase()}.json`)
    // return axios.get(`/api/singletons/get/${name}?token=${token}`)
  },
  post (resource, data) {
    return axios.post(resource, data)
  },

  put (resource, data) {
    return axios.put(resource, data)
  },

  delete (resource) {
    return axios.delete(resource)
  },
  customRequest (data) {
    return axios(data)
  }
}

export default ApiService
