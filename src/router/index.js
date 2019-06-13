// TODO: lazy loading routes https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/ViewHome.vue'
import Detail from '@/views/ViewDetail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'home',
      detail: false
    }
  },
  {
    path: '/course/:id',
    name: 'Detail',
    component: Detail,
    meta: {
      title: 'detail',
      detail: false
    },
    props: true

  }
  ]
})
