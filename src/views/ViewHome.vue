<template lang="html">
  <div class="">
    <ul class="" v-for='course in courses'>
      <li>
        <router-link :to="{ name: 'Course', params: {id: course.id} }">
          {{courseName(course)}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import sourceData from '@/mockData.json'

export default {
	data() {
		return {
			courses: sourceData.courses
		}
	},
	methods: {
		courseName( course ) {
			const possibilities = {
				lesson: `> ${course.title}`,
				project: `# ${course.title}`,
				nerd: `{${course.title}}`
			}
			return possibilities[ course.type ] // "Item 1
		}

	}
}
</script>

<style lang="css" scoped>
</style>
