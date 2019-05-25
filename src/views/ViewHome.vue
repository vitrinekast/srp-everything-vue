<template lang="html">
  <div>
    <div class="line">

    </div>
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
<style media="screen">
  .line {
    position: fixed;
    background: red;
    width: 100%;
    height:10px;
    content: '';
    top: 50%;
    left: 0;
    transform: translateY(-5px);
  }
</style>
