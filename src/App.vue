<template>
  <div id="app">
    <m-header></m-header>
    <v-nav></v-nav>
    <router-view></router-view>
    <player />
  </div>
</template>

<script>
import MHeader from '@/components/header'
import VNav from '@/components/nav'
import Player from '@/components/player'

export default {
  components: {
    MHeader,
    VNav,
    Player
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
