<template lang="html">
  <div class="">
    <article ref='article' class="article" v-html='course.description'>
      
    </article>
    <section class='article--section'>
      <h3>_STUDENT?WORK</h3>
        <Slider :items="works"  />
    </section>
    
    <section class='article--section'>
      <h3>_INSPIRATION</h3>
      <CourseInspiration :items='articles' /></CourseInspiration>    
    </section>
  </div>
</template>

<script>
import sourceData from '@/mockData'
import Slider from '@/components/Slider'
import CourseInspiration from '@/components/CourseInspiration'

export default {
  name: 'CourseArticle',
  components: {
    CourseInspiration,
    Slider
  },
  props: {
    course: {
      required: true 
    }
  },
  data() {
    return {
      works: Object.values(sourceData.work).filter(item => item.courses.includes(this.course.id)),
      articles: Object.values(sourceData.articles).filter(item => item.courses.includes(this.course.id))
    }
  },
  mounted () {
    if(this.$route.params.courseId) {
      if(this.$refs['article']) {
        Array.from(this.$refs['article'].children).forEach((elem, index) => {
          elem.style.setProperty('--staggerIndex', index);
        })
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
