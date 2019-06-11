<template>
<div id="app">

  <transition name="app" duration='500000' >
    <router-view></router-view>
  </transition>

</div>
</template>
<script>
export default {
  data () {
    return {
      transitionName: 'slide-left'
    }
  }
}
</script>
<style lang="scss">
// import all the styles at once, have  a discussion about using css modules later
@import "/scss/_app";
</style>
