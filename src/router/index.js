import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/ViewHome.vue'
import About from '@/views/ViewAbout.vue'
import Course from '@/views/ViewCourse.vue'
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
        title: 'home'
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
      path: '/course/:id',
      name: 'Course',
      component: Course,
      meta: {
        title: 'course'
      },
      props: true
    }
  ]
})
