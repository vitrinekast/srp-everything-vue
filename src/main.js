import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js'
import store from '@/store/index.js'
import ApiService from '@/services/api'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

Vue.config.productionTip = false

ApiService.init('http://cms.cmd-everything.local/')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
