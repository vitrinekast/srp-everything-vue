<template lang="html">
  <div class="">
    <h1>{{courseName(course)}}</h1>
    <article class="" v-html="course.description">
      
    </article>
    
    <section>
      <h2>_WHAT HAPP/ND?</h2>
      <ul>
        <li v-for='work in works'>
          {{work}}
        </li>
      </ul>
    </section>
  </div>
</template>
<p>
  In dit vak gaan we aan de slag met CSS. We gaan goed werkende responsive oplossingen bedenken én maken voor complexe interfaces. Dat is erg belangrijk, te veel ontwerpers kunnen dit niet zo goed. Het is ook belangrijk om een aantal basisprincipes achter CSS goed te begrijpen. Niet alleen op praktisch niveau, ook op experimenteel niveau. 
</p>
<blockquote cite="http://">
  Zonder goed begrip van de basisprincipes is CSS magisch en weird.
</blockquote>
<p>
  Met een goed begrip heb je CSS onder controle en kan je het laten doen wat jij wil. En dat is nodig om webpagina’s vorm te geven met attention to detail. Webpagina’s waar mensen blij van worden.
</p>
<script>

import sourceData from '@/mockData.json'
  
export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      course: sourceData.courses[this.id],
      works: Object.values(sourceData.work).filter(item => item.courses.includes(this.id))
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
