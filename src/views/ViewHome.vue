<template lang="html">
  <div>

    <CourseNavigation :courses="courses" />
  </div>
</template>

<script>
import CourseNavigation from '@/components/CourseNavigation'
// TODO: implement Firebase
import sourceData from '@/mockData.json'

export default {
  components: {
    CourseNavigation
  },
  // TODO: Make props more specific using Vue standards
  props: [ 'course', 'id' ],
  mounted () {
    console.log(this.$route)
  },

  computed: {
    courses () {
      return this.$route.params.courseId ? Object.values(sourceData.courses).filter(course => course.id === this.$route.params.courseId) : Object.values(sourceData.courses)
    }
  }
}
</script>
