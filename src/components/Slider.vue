<template lang="html">
  
    <div class="">
      <ul class='slider'>
        <li v-for='item in items' :key='item.id' :index='index' class='slider__col'>
          <div class="media--bg" :style="{ '--slide-bg': buildImage(item.image) }"></div>
          <div class="slider__item">
            {{item.description}}
          </div>
          
        </li>
      </ul>
      <div class="">
        <li v-for='(item, index) in items' :key='item.id' :index='index' class='slider__description'>
          {{item.description}}
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
  mounted() {
    this.slides = this.$el.querySelectorAll('.slider__col');
    
    // create an onScroll event for the vertical slider to decide the current active slide and slide description
    this.$el.addEventListener('scroll', this.onScroll)
    this.onScroll()
  },
  methods: {
    onScroll(e) {
      
      this.slides.forEach((elem) => {
        // Get the X distance
        let x = elem.getBoundingClientRect().x
        const descriptionEl = this.$el.querySelectorAll(`.slider__description[index="${elem.getAttribute('index')}"]`)
        
        // Set 'in-view' when X is within the treshold
        if(x < 400 && x > 150) {
          addOrRemoveClassWhenContains({ remove: false, className: 'in-view', elem })
          addOrRemoveClassWhenContains({ remove: false, className: 'in-view', descriptionEl })
        } else {
          addOrRemoveClassWhenContains({ remove: true, className: 'in-view', elem })
          addOrRemoveClassWhenContains({ remove: true, className: 'in-view', descriptionEl })
        }
      })
    },
    buildImage(url) {
      // Return the image as a background URL to use as CSS Variable
      return `url('${url}')`
    }
  }
}

</script>

<style lang="css" scoped>
</style>
