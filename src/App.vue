<template>

  <!-- TODO: figure out why ESlint is bugging about indentation here... -->
<div id="app">
<nav class='nav'>
<router-link to="/" class='nav__item'>Overview</router-link>
<router-link to="/about" class='nav__item'>About</router-link>
<router-link to="/submit" class='nav__item'>Submit your stuff</router-link>
</nav>

<router-view class='view' />
</div>
</template>

<style lang="scss">
// import all the styles at once, have  a discussion about using css modules later
@import "/scss/_app";

</style>
