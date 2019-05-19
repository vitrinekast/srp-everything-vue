<template>
  <div id="app">
    <nav>
      <router-link to="/">Overview</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/submit">Submit your stuff</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "/scss/_app";
</style>
