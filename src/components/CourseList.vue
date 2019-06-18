<template lang="html">
  <div class="container">
    <div class="layout--timetable">
      <main>
        <h4 class='timetable__title'>
          >> Sprint 1: Prototype for Interaction
        </h4>
        <ul class='timetable' ref='list'>
          <CourseListItem ref='courseItem' v-for='(course, index) in courses.slice(0, 3)' :course='course' :key='course["_id"]' :style="{'--delay-index': `${index + 5}`}" :index='index' :id='course["_id"]' @navigate='onNavigate'  />
        </ul>
        <h4 class='timetable__title'>
          >> Sprint 2: Solve, Debug & Optimize

        </h4>
        <ul class='timetable' ref='list'>
          <CourseListItem ref='courseItem' v-for='(course, index) in courses.slice(3, 6)' :course='course' :key='course["_id"]' :style="{'--delay-index': `${index + 5}`}" :index='index' :id='course["_id"]' @navigate='onNavigate'  />
        </ul>
        <h4 class='timetable__title'>
          >> Sprint 3: Design for Real-Time
        </h4>
        <ul class='timetable' ref='list'>
          <CourseListItem ref='courseItem' v-for='(course, index) in courses.slice(6, 9)' :course='course' :key='course["_id"]' :style="{'--delay-index': `${index + 5}`}" :index='index' :id='course["_id"]' @navigate='onNavigate'  />
        </ul>
      </main>
      <aside class="">
        <h4 class='timetable__title'>Nerd!</h4>
        <CourseListItem :course='nerdCourse' ref='courseItem' @navigate='onNavigate' />
      </aside>
    </div>
  </div>
</template>

<script>
import CourseListItem from '@/components/CourseListItem'

export default {
  props: {
    courses: {
      type: Array,
      required: true
    }
  },
  components: {
    CourseListItem
  },

  methods: {
    onNavigate (e) {
      this.$refs.list.setAttribute('active-type', e.course.type[0])
    }
  },
  data () {
    return {
      nerdCourse: {
        name: 'Weekly nerd',
        _id: '0',
        type: ['Nerd'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
