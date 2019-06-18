<template lang="html">
  <li @click='onClick' class='timetable__card card card--colored' ref='card' :type='course.type'>
    <div ref='bg' class="card__bg"></div>
    <div class="card__inner">
      <h4 class='card__tag' v-if='course.type == "Nerd"'>//0</h4>
      <h3 class='card__title'>{{course.name}}</h3>
      <div class="card__deco">

      </div>
    </div>
  </li>
</template>

<script>
import anime from 'animejs'

export default {
  props: {
    course: {
      type: Object,
      required: true
    }
  },
  filters: {
    truncate (text) {
      return text.length > 100 ? text.substring(0, 100) + '...' : text
    }
  },
  methods: {
    onClick (dis) {
      const course = this.course
      const card = this.$refs.card
      const home = document.querySelector('.page-home')
      const bezier = 'cubicBezier(.2, .05, .05, 1)'
      const bounds = this.$refs.bg.getBoundingClientRect()

      this.$refs.bg.style.position = 'fixed'
      card.style.zIndex = '2'

      home.classList.remove('loaded')
      this.$refs.card.setAttribute('active', true)
      const baseDuration = 500

      anime.timeline({
        easing: bezier,
        complete: () => {
          this.$router.push({ name: 'Detail', params: { id: course._id } })
        }
      })
        .add({
          targets: this.$refs.bg,
          height: [ bounds.height, 50 ],
          width: [ bounds.width, 1300 ],
          top: [ bounds.y, window.innerWidth < 800 ? 0 : 100 ],
          duration: baseDuration,
          left: [ bounds.x, document.querySelector('.container').getBoundingClientRect().x ]
        })
        .add({
          targets: this.$refs.bg,
          height: 500,
          duration: baseDuration / 2,
          complete: () => {

          }
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
