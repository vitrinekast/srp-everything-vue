<template>
  
  <!-- TODO: figure out why ESlint is bugging about indentation here... -->
<div id="app">
<nav class='nav'>
<router-link to="/" class='nav__item'>Overview</router-link>
<router-link to="/about" class='nav__item'>About</router-link>
<router-link to="/submit" class='nav__item'>Submit your stuff</router-link>
</nav>

<transition  name="fade" mode="out-in" duration='5000'>
<router-view class='view' :class="'view--' + this.$route.name"/>
</transition>
</div>
</template>
<script type="text/javascript">

</script>
<style lang="scss">
// import all the styles at once, have  a discussion about using css modules later
@import "/scss/_app";

</style>
