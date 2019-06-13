<template lang="html">
  <li @click='onClick' class='timetable__card card card--colored' ref='card' :type='course.type'>
    <div ref='bg' class="card__bg"></div>
    <div class="card__inner">
      <h4 class='card__tag' v-if='course.type == "Nerd"'>//0</h4>
      <h3 class='card__title'>{{course.name}}</h3>
      <div class="card__description" v-if='course.description'>
        {{ course.description | truncate }}
      </div>
    </div>
  </li>
</template>

<script>
import anime from 'animejs'

export default {
	props: {
		course: {
			type: Object,
			required: true
		}
	},
	filters: {
		truncate( text ) {
			return text.length > 100 ? text.substring( 0, 100 ) + '...' : text
		}
	},
	methods: {
		onClick( dis ) {
			const course = this.course
			const card = this.$refs.card
			const bounds = this.$refs.bg.getBoundingClientRect()
			// this.$emit('navigate', { course })

			this.$refs.bg.style.position = 'fixed'
			card.style.zIndex = '2'
			console.log( bounds )
			var self = this;
			document.querySelector( '.page-home' ).classList.remove( 'loaded' );

			self.$refs.card.setAttribute( 'active', true )
			
			var tl = anime.timeline( {

				easing: 'cubicBezier(.2, .05, .05, 1)',
				complete: function () {
					console.log( 'he' )
					self.$router.push( { name: 'Detail', params: { id: course._id } } )
				},
			} );

			tl
				.add( {
					targets: self.$refs.bg,
					height: [ bounds.height, 50 ],
					width: [ bounds.width, 1200 ],
					top: [ bounds.y, 100 ],
					duration: 500,
					left: [ bounds.x, document.querySelector( '.container' ).getBoundingClientRect().x ]
				} )
				.add( {
					targets: self.$refs.bg,
					height: 500,
					duration: 300,
				} )



		}
	}
}
</script>

<style lang="css" scoped>
</style>
