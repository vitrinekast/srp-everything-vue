import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

// Implement the store when firebase is implemented
export default new Vuex.Store({
  state: {
    courses: {},
  },
  getters,
  actions,
  mutations
})
