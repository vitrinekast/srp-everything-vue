import axios from 'axios'
const token = '184ce34cf8ce109411317b3b60c8af';

const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest(data) {
        return axios(data)
    }
}

export default ApiService


// 
// import axios from 'axios'
// const token = '184ce34cf8ce109411317b3b60c8af';
// 
// export default {
//   data () {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     axios
//       .get(`http://cms.cmd-everything.local/api/collections/get/Courses?token=${token}`)
//       .then((response) => {
//         this.info = response.data.entries;
//         console.log(response)
//       })
//   }
// }