<template lang="html">
  <div :class="['page--detail', 'view--' + course.type[0].replace(' ', '-')]" v-if='course' ref='wrapper'>
    <div class="header--md container card--colored" :type='course.type[0]' ref='header'>
      <div class="card__bg" ref='headerBg' ></div>
      <h2 @click='close'>sluit</h2>
    </div>
    <div class="container layout--detail">
      <aside class="">

      </aside>
      <main class="">
        <h1 class='page__title'>{{course.name}}</h1>
        <p class='page__subtitle'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,</p>
        <article class="page__content" v-html='course.article'>

        </article>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import anime from 'animejs'
export default {
  methods: {
    ...mapActions('courses', [ 'fetchCourses' ]),
    close () {
      console.log('close')
      var self = this
      var tl = anime.timeline({

        easing: 'cubicBezier(.2, .05, .05, 1)',
        complete: function () {
          console.log('he')
          self.$router.push({ name: 'Home' })
        }
      })

      tl
        .add({
          targets: self.$refs.headerBg,
          height: ['100%', '20%'],
          duration: 500,
          complete: function (e) {
            console.log('tussen')
          }

        })
        .add({
          targets: self.$refs.headerBg,
          offset: '-=200',
          complete: function (e) {
            self.$refs.wrapper.classList.remove('loaded')
          }

        })
        .add({
          targets: self.$refs.headerBg,
          translateY: window.innerHeight,
          duration: 800
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
