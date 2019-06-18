<template lang="html">
  <div class="container layout--detail">
    <aside class="">

    </aside>
    <main class="">
      <h1 class='page__title'>{{course.name}}</h1>
      <article class="page__content" v-html='course.article'>

      </article>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    course: {
      required: false
    }
  }
}
</script>

<style lang="css" scoped>
</style>
