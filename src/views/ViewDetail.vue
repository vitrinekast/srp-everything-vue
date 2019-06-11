<template lang="html">
  <div :class="['view--' + course.type[0].replace(' ', '-')]" v-if='course' >
    <div class="container layout--detail">
      <aside class="">

      </aside>
      <main class="">
        <h2>{{course.name}}</h2>
        <article class="" v-html='course.article'>

        </article>
      </main>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('courses', [ 'fetchCourses' ])
  },
  computed: {
    course () {
      return this.$store.state.courses.items[this.$route.params.id]
    }
  },
  created () {
    this.fetchCourses(this.$route.params.id)
      .then((data) => {
        console.log(data)
      })
  }
}
</script>

<style lang="css" scoped>

</style>
