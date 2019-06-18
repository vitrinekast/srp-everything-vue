<template lang="html">
  <div :class="['page-detail', 'view--' + course.type[0].replace(' ', '-')]" v-if='course' ref='wrapper'>
    <div class="header--md container card--colored" :type='course.type[0]' ref='header'>
      <div class="card__bg" ref='headerBg' ></div>
      <div class="btn_hamburger">
        <div class="btn_hamburger__ic" @click='close'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>

    <ArticleContent :course='course' v-if='course' />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import anime from 'animejs'
import ArticleContent from '@/components/ArticleContent'

export default {
  components: {
    ArticleContent
  },
  methods: {
    ...mapActions('courses', [ 'fetchCourses' ]),
    close () {
      console.log('close')
      var self = this
      const baseDuration = 300
      var tl = anime.timeline({

        easing: 'cubicBezier(.2, .05, .05, 1)',
        complete: function () {
          self.$router.push({ name: 'Home' })
        }
      })

      tl
        .add({
          targets: self.$refs.headerBg,
          height: ['100%', '20%'],
          duration: baseDuration * 1.2,
          complete: function (e) {
            self.$refs.wrapper.classList.remove('loaded')
            console.log('tussen')
          }

        })

        .add({
          offset: '-=400',
          targets: self.$refs.headerBg,
          translateY: window.innerHeight,
          duration: baseDuration
        })
    }
  },
  computed: {
    course () {
      return this.$store.state.courses.items[this.$route.params.id]
    }
  },

  created () {
    this.fetchCourses(this.$route.params.id)
      .then((data) => {
        window.setTimeout(() => {
          this.$refs.wrapper.classList.add('loaded')
        }, 500)
      })
  }
}
</script>

<style lang="css" scoped>

</style>
