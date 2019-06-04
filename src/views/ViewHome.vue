<template lang="html">
  <div>
    <CourseNavigation :courses="courses" />
  </div>
</template>

<script>
import CourseNavigation from '@/components/CourseNavigation'
import { mapActions } from 'vuex'

export default {
	props: [ 'course', 'id' ],
	components: {
		'CourseNavigation': CourseNavigation
	},
	methods: {
		...mapActions( [ 'fetchAllCourses', 'fetchAllWorksByCourse' ] )
	},

	computed: {
		courses() {

			if( this.$route.params.courseId ) {
				return this.$store.getters.courseById( this.$route.params.courseId )
			} else {
				return Object.values( this.$store.state.courses )
			}

		}
	},
	created() {
		this.fetchAllCourses()
			.then( (courses) => {
        if( this.$route.params.courseId ) {
           this.fetchAllWorksByCourse(this.$route.params.courseId).then(() => {
             this.$emit( 'loaded', true );
           })
        } else {
          this.$emit( 'loaded', true );
        }
			} )
	}
}
</script>
