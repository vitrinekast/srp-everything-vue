<template lang="html">
  <li class='card'>
    <div class="card__top">
      <a class="card__like" @click='like'>

        <i class="material-icons h4" v-if='item.likes>0'>favorite</i>
        <i class="material-icons h4" v-else>favorite_border</i>
        <h4>{{item.likes}}</h4>
      </a>
      <a :href='item.url' target='_blank' class="card__title">
        <h4>|{{item.student}} </h4>
        <i class="material-icons">arrow_forward</i>
      </a>
    </div>

    <div class="article">
      <p>{{item.description}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      required: true
    }
  },
  data () {
    return {
      likeActive: false
    }
  },
  methods: {
    like () {
      console.log('like', this.item.likes)
      this.item.likes++
    }
  }
}
</script>

<style lang="css" scoped>
</style>
