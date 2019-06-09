import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from '@/router/index.js'
import store from '@/store/index.js'
import ApiService from '@/services/api'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsW0hK2CKe1WL-XvOc3dAfO7O_uLwBD5k",
    authDomain: "cmd-srp.firebaseapp.com",
    databaseURL: "https://cmd-srp.firebaseio.com",
    projectId: "cmd-srp",
    storageBucket: "cmd-srp.appspot.com",
    messagingSenderId: "899330497629",
    appId: "1:899330497629:web:a735b2c449c25801"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// console.log(process)
ApiService.init(process.env.VUE_APP_ROOT_API)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
