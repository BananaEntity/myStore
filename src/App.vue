<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <Navigation />
        <!-- <div id="nav"> -->
            <!-- <router-link to="/home">Home</router-link> |
            <router-link to="/login">Login</router-link> -->
        <!-- </div> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/login">Aaaaat</router-link>
    </div> -->
        <router-view/>
    </div>
</template>
<script>
// import firebase from 'firebase'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Blank from '@/components/Blank.vue'
import Navigation from '@/views/Navigation.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    // Blank
    Navigation
  },
  data () {
    return { }
  },
  methods: { }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: right;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
