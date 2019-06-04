<template lang="html">
  <div class="nav_vertical">

    <Background :index='closestIndex'/>

    <transition appear name='course-list-appear' duration='2000'>
      <ul class="nav_vertical__list container">
        <transition-group name="course-list" duration='2000'>
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
    </transition>

  </div>
</template>

<script>
import CourseItem from '@/components/CourseItem'
import Background from '@/components/Background'

const getPosition = (element) => {
  var xPosition = 0
  var yPosition = 0

  while (element) {
    xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft)
    yPosition += (element.offsetTop - element.scrollTop + element.clientTop)
    element = element.offsetParent
  }

  return { x: xPosition, y: yPosition }
}

export default {
  components: {
    CourseItem,
    Background
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
  created () {

    this.$parent.$on('loaded', () => {
      
      this.$refs[ 'list-item' ].forEach((listItem) => {
        let rect = listItem.getBoundingClientRect()
        this.points.push(getPosition(listItem).y + (rect.height / 4))
      })
      window.addEventListener('scroll', this.onScroll)
    });
  },
  methods: {
    onScroll (e) {
      if (this.$route.name !== 'Home') return false

      this.middle = window.scrollY + (window.innerHeight / 2)
      this.closestIndex = this.points.indexOf(this.points.reduce((prev, curr) => {
        return (Math.abs(curr - this.middle) < Math.abs(prev - this.middle) ? curr : prev)
      }))
    }
  }
}
</script>
