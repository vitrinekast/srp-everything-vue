<template lang="html">
  <div class="">
    <h2>Dit is home</h2>
    <div class="">
      <li v-for='inf in info'>{{inf.Name}}</li>
      
    </div>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    courses () {
      return Object.values(this.$store.state.courses.items)
    }
  },
  methods: {
    ...mapActions('courses', ['fetchAllCourses'])
  },
  created() {
    this.fetchAllCourses()
      .then((data) => {
        console.log(data)
      })
  }
}
</script>
