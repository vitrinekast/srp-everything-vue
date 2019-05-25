<template lang="html">
  <div class="nav_vertical">
    <router-link
    :to="{ name: 'Home' }
    ">
    back
  </router-link>

    <ul class="nav_vertical__list">
      <transition-group name="course-list" duration='50000'>
                <li
          ref='list-item'
          v-for='(course, index) in courses'
          class='nav_vertical__item'
          :style="{ '--staggerIndex': index }"
          :key="course.id"
          :class="{ 'nav_vertical__item--active' : index === closestIndex}"
          >
          <CourseItem :course='course' :isCenter='index === closestIndex' />
        </li>
       </transition-group>
    </ul>
  </div>
</template>

<script>
import CourseItem from '@/components/CourseItem'

export default {
  components: {
    CourseItem
  },
  props: {
    courses: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      points: [],
      closestIndex: 0,
      middle: 0,
      isDetail: this.$route.params.courseId
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted () {
    this.$refs[ 'list-item' ].forEach((listItem) => {
      let rect = listItem.getBoundingClientRect()
      this.points.push(rect.top + rect.height)
    })
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      this.middle = window.scrollY + (window.innerHeight / 2)

      this.closestIndex = this.points.indexOf(this.points.reduce((prev, curr) => {
        return (Math.abs(curr - this.middle) < Math.abs(prev - this.middle) ? curr : prev)
      }))
    }
  }
}
</script>
