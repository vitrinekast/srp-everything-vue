<template>

  <!-- TODO: figure out why ESlint is bugging about indentation here... -->
<div id="app">
<router-view class='view' />
</div>
</template>

<style lang="scss">
// import all the styles at once, have  a discussion about using css modules later

@font-face {
  font-family: 'Material Icons';
  font-style: normal;
  font-weight: 400;
  src: url('./assets/MaterialIcons-Regular.eot'); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url('./assets/MaterialIcons-Regular.woff2') format('woff2'),
    url('./assets/MaterialIcons-Regular.woff') format('woff'),
    url('./assets/MaterialIcons-Regular.ttf') format('truetype');
}

@import "/scss/_app";

</style>
