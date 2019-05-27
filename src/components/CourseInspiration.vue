<template lang="html">
  <ul class='list_inspiration'>
    <li v-for='article in items' class='list_inspiration__item'>
      <img :src='article.image' alt="">
      <h4>{{article.title}}</h4>
      <h6>{{article.author}}</h6>
      <a :href="article.url">Check it out here</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
