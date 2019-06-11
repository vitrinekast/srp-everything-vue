<template lang="html">
  <li @click='onClick' class='timetable__card card' ref='card' :type='course.type'>
    <div ref='bg' class="card__bg"></div>
    <div class="card__inner">
      <h4 class='card__tag' v-if='course.type == "Nerd"'>//0</h4>
      <h3 class='card__title'>{{course.name}}</h3>
      <div class="card__description" v-if='course.description'>
        {{ course.description | truncate }}
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
      const bounds = this.$refs.bg.getBoundingClientRect()
      this.$emit('navigate', { course })

      this.$refs.bg.style.position = 'fixed'
      card.style.zIndex = '2'
      card.setAttribute('active', true)
      let self = this
      self.$router.push({ name: 'Detail', params: { id: course._id } })
      anime({
        targets: this.$refs.bg,
        width: [`${bounds.width}px`, `${window.innerWidth}px`],
        height: [`${bounds.height}px`, `${window.innerHeight}px`],
        top: [`${bounds.y}px`, `0px`],
        left: [`${bounds.x}px`, `0px`],
        easing: 'cubic-bezier(.2, 0, 0, 1)',
        duration: 800,
        complete () {
          // card.removeAttribute('active')

          // setTimeout(() => { this.animatables[0].target.style = '' }, 500)
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
