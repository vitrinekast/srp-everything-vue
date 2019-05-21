<template lang="html">
  <div class="flex--center">
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
  data () {
    return {
      // Return all the courses. TODO: Implement firebase
      courses: Object.values(sourceData.courses)
    }
  }
}
</script>