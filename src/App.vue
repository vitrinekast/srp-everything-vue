<template>
  <div id="app">
    <router-link to="/">Overview</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/submit">Submit your stuff</router-link>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "/scss/_app";
</style>
