import Vue from 'vue'

export default {
  setItem (state, { id, item, resource }) {
    Vue.set(state[resource].items, id, item)
  }

}
