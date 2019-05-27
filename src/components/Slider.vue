<template lang="html">

    <div class="">
      <ul class='slider' ref='slider'>
        <li v-for='(item, index) in items' :key='item.id' :index='index' class='slider__col' ref='slide'>
          <div class="media--bg" :style="{ '--slide-bg': buildImage(item.image) }"></div>
          <div class="slider__item">
          </div>

        </li>
      </ul>
      <div class="slider__description">
        <li v-for='(item, index) in items' :key='item.id' :index='index' class='slider__description__item' ref='slide-desc'>
          <h4>{{item.student}}</h4>
          <p>{{item.description}}</p>
          <a href="#" :href='item.url'>Read more here</a>
        </li>
      </div>
    </div>

</template>

<script>

import { addOrRemoveClassWhenContains } from '@/helpers'

export default {
  props: {
    items: {
      required: true
    }
  },
  mounted () {
    // create an onScroll event for the vertical slider to decide the current active slide and slide description
    if(this.$refs['slider']) {
      this.$refs['slider'].addEventListener('scroll', this.onScroll)  
      this.onScroll()
    }
    
  },
  methods: {
    onScroll (e) {
      console.log('oi')
      this.$refs['slide'].forEach((elem, index) => {
        // Get the X distance
        let x = elem.getBoundingClientRect().x
        // const descriptionEl = this.$el.querySelectorAll(`.slider__description[index="${elem.getAttribute('index')}"]`)
        const descElem = this.$refs['slide-desc'][index];
        // Set 'in-view' when X is within the treshold
        console.log(index , x)
        if (x < 800 && x > 150) {
          addOrRemoveClassWhenContains({ remove: false, className: 'in-view', elem })
          addOrRemoveClassWhenContains({ remove: false, className: 'in-view', elem: descElem })
        } else {
          addOrRemoveClassWhenContains({ remove: true, className: 'in-view', elem })
          addOrRemoveClassWhenContains({ remove: true, className: 'in-view', elem: descElem })
        }
      })
    },
    buildImage (url) {
      // Return the image as a background URL to use as CSS Variable
      return `url('${url}')`
    }
  }
}

</script>

<style lang="css" scoped>
</style>
