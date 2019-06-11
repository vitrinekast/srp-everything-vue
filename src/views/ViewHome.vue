<template lang="html">
  <div class="page page-home" ref='wrapper'>
      <header class='header--lg'>
        <div class="container" v-if='header'>
          <h2 class='header__title'>
            <span ref='word' v-for='(word, index) in splitTitle' :key='index'>{{word}} </span>
          </h2>
          <p class='header__subtitle' ref='word'>{{header.Description}}</p>
        </div>
      </header>
    <CourseList :courses='courses' v-if='courses'/>

  </div>

</template>

<script>
import { mapActions } from 'vuex'
import ApiService from '@/services/api'
import CourseList from '@/components/CourseList'

export default {
  components: {
    CourseList
  },
  computed: {
    courses () {
      return Object.values(this.$store.state.courses.items)
    },
    splitTitle () {
      return this.header.Title ? this.header.Title.split(' ') : []
    }
  },
  data () {
    return {
      header: {}
    }
  },
  methods: {
    ...mapActions('courses', [ 'fetchCourses' ])
  },
  created () {
    ApiService.getSingleton('Home').then((response) => {
      this.header = response.data
    })
    this.fetchCourses()
      .then((data) => {
        this.$refs.wrapper.classList.add('loaded')
      })
    console.log('oi')
  }
}
</script>
