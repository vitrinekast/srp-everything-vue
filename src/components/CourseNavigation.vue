<template lang="html">
  <div class="nav_vertical">

    <ul class="nav_vertical__list">
      <li
        ref='list-item'
        v-for='(course, index) in courses'
        class='nav_vertical__item'
        :style="{ '--staggerIndex': index }"
        :key="index"
        :class="{ 'nav_vertical__item--active' : index == closestIndex}"
        >
        <router-link
        :to="{ name: 'Course', params: {id: course.id} }
        ">
         <h2>{{courseName(course)}}</h2>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
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
      middle: 0
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.onScroll)
  },
  mounted () {
    this.$refs[ 'list-item' ].forEach((listItem) => {
      let rect = listItem.getBoundingClientRect()
      this.points.push(rect.top + rect.heighte)
    })
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll (e) {
      this.middle = window.scrollY + (window.innerHeight / 2)

      this.closestIndex = this.points.indexOf(this.points.reduce((prev, curr) => {
        return (Math.abs(curr - this.middle) < Math.abs(prev - this.middle) ? curr : prev)
      }))
    },
    // Display a different kind of title dependant on the subject
    courseName (course) {
      const possibilities = {
        lesson: `> ${course.title}`,
        project: `# ${course.title}`,
        nerd: `{${course.title}}`
      }
      return possibilities[ course.type ]
    }

  }
}
</script>

<style lang="css" scoped>
</style>
