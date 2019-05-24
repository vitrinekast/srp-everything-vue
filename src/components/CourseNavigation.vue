<template lang="html">
  <div class="nav_vertical">
    <ul class="nav_vertical__list">
      <li v-for='(course, index) in courses' class='nav_vertical__item'  :style="{ '--staggerIndex': index }" :key="index"  :class="[index === (wheelIndex - 1) ? 'nav_vertical__item--active' : '', '']">
        <router-link :to="{ name: 'Course', params: {id: course.id} }">
         <h2>{{courseName(course)}}</h2>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { valBetween } from '@/helpers'

export default {
  props: {
    courses: {
      required: true,
      type: Array
    }
  },
  data () {
    return {
      wheelIndex: 1,
      maxIndex: this.courses.length,
      minIndex: 1,
      direction: 0,
      counter1: 0,
      counter2: 0,
      marker: true,
      height: 0
    }
  },
  mounted () {
    // detect wheel event in order to move to the next/previous courseItem
    window.addEventListener('wheel', (e) => {
      let delta = e.deltaY || e.detail || e.wheelDelta

      // do nothing untill the treshold
      if (Math.abs(delta) > 100) {
        this.counter1 += 1
        this.direction = delta > 0 ? 1 : -1
        if (this.marker) this.wheelStart()
      }

      return false
    })
  },
  methods: {
    wheelAct () {
      // Depend if the wheelEnd should be called
      this.counter2 = this.counter1
      setTimeout(() => this.counter2 === this.counter1 ? this.wheelEnd() : this.wheelAct(), 50)
    },
    wheelEnd () {
      // Reset all the needed wheelevent variables on end
      this.marker = true
      this.counter1 = 0
      this.counter2 = 0
    },
    // Only called on the first wheel event
    wheelStart () {
      this.marker = false
      console.log(this.height, document.querySelector('.nav_vertical__item').clientHeight)
      // Increase/decrease the active wheelIndex to the available item
      this.wheelIndex = valBetween(this.wheelIndex += this.direction, this.minIndex, this.maxIndex)
      // CSS Variables (🔥) to center the active item in the courseNavigation
      document.documentElement.style.setProperty('--nav-list--transformY', this.wheelIndex * -1 * (document.querySelectorAll('.nav_vertical__item')[this.wheelIndex].clientHeight/2) + 'px')
      this.wheelAct()
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
