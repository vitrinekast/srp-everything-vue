<template lang="html">
  <div class="view--course">
    <div class="container grid--1-2">
      <div class="col">

      </div>
      <div class="col article">
        <h2>{{courseName(course)}}</h2>
        <article class="" v-html="course.description" :load="onLoadedArticle">

        </article>
      </div>
    </div>
    
    <section class='container article--section'>
      <h3>_INSPIRATION</h3>
        <Slider :items="works"  />
    </section>
    

    <!-- <section class='container article--section'>
      <h3>_INSPIRATION</h3>
      <ul class='slider'>
        <li v-for='work in works' :key='work.id' class='slider__col'>
          <div class="slider__item">
            {{work.description}}
          </div>
        </li>
      </ul>
    </section> -->
  </div>
</template>

<script>
import sourceData from '@/mockData.json'
import Slider from '@/components/Slider'

export default {
  components: {
    Slider
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data () {
    return {
      // get the active course from the dummyData. TODO: replace with Firebase
      course: sourceData.courses[ this.id ],
      // Get the related works based on ID. TODO: Replace with Firebase
      works: Object.values(sourceData.work).filter(item => item.courses.includes(this.id))
    }
  },

  methods: {
    // TODO: already used, create a helper for this
    courseName (course) {
      const possibilities = {
        lesson: `> ${course.title}`,
        project: `# ${course.title}`,
        nerd: `{${course.title}}`
      }
      return possibilities[ course.type ] // "Item 1
    },
    onLoadedArticle(el) {
      console.log(this, el, this.$el)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
