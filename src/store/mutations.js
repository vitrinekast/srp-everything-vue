import Vue from 'vue'

export default {
  setItem (state, {itemId, item, resource}) {
    item['.key'] = itemId

    Vue.set(state[resource], itemId, item)
  }

}
