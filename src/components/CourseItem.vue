<template lang="html">
  <div class='wrapper course' :class="{ 'courseActive' : isDetail}">

    <router-link class='nav_vertical__link' :to="isCenter ? { name: 'Course', params: {courseId: course.id} } : {}" >
      <h2 class='article__title'>{{courseName(course)}}</h2>
    </router-link>
    <transition name='course-desc-appear' duration='1500'>
      <CourseArticle :course='course' v-if='isDetail' > </CourseArticle>
    </transition>

  </div>
</template>

<script>
import CourseArticle from '@/components/CourseArticle.vue'

export default {
  components: {
    CourseArticle
  },
  props: {
    course: {
      type: Object,
      required: true
    },
    isCenter: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    isDetail () {
      return this.$route.params.courseId === this.course.id
    }
  },
  methods: {
    // Display a different kind of title dependant on the subject
    courseName (course) {
      const possibilities = {
        lesson: `> ${course.title}`,
        project: `# ${course.title}`,
        nerd: `{${course.title}}`
      }
      return possibilities[ course.type ]
    }
  }
}
</script>

<style lang="scss" scoped>

.wrapper {
  transform: translateX(0);
  transition: all .5s cubic-bezier(.2, 0, 0, 1);
  &.courseActive {
      transform: translateX(calc((100%/3)*1));

      .article__title {
        color: black;
      }
  }
}

</style>
