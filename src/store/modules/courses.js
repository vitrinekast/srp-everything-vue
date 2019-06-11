import ApiService from '@/services/api'

const RESOURCE = 'courses'

export default {
  namespaced: true,

  state: {
    items: {}
  },

  actions: {
    fetchCourses ({ state, commit }, id) {
      console.log('🔥', 'fetch all courses')

      return ApiService.getCollection('Courses', id)
        .then((response) => {
          response.data.entries.forEach((item) => {
            commit('setItem', { resource: RESOURCE, id: item._id, item: item }, { root: true })
          })
          return response.data.entries
        })
    }
  }
}
