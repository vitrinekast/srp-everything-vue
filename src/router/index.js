// TODO: lazy loading routes https://router.vuejs.org/guide/advanced/lazy-loading.html#grouping-components-in-the-same-chunk
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/ViewHome.vue'
import About from '@/views/ViewAbout.vue'
import Submit from '@/views/ViewSubmit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'home',
        detail: false
      }
    },
    {
      path: '/submit',
      name: 'Submit',
      component: Submit
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/course/:courseId',
      name: 'Course',
      component: Home,
      meta: {
        title: 'course',
        detail: true
      },
      props: true
    }
  ]
})
