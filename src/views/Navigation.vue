<template>
  <div class="hello">
    <!-- <div>
      <button v-if="isLogin" @click="doLogOut">Log Out</button>
      <button v-else @click="doLogIn">Log In</button>
    </div> -->

    <router-link to="/home">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="loginStatus" @click.native="doLogOut">Sign Out</router-link>
    <router-link v-else to="/login">Log In</router-link>

  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navigation',
  data () {
    return {
      loginStatus: this.isLogin()
    }
  },
  methods: {
    // Log out
    doLogOut: function () {
      firebase.auth().signOut().then(() => {
        this.$loginStatus = true
        // this.$router.replace('login')
      })
    },
    // @return true: Logged in / false: Not log in
    isLogin: function () {
      alert(this.$loginStatus)
      return this.$loginStatus
    //   if (firebase.auth().currentUser != null) {
    //     // alert(this.globalReadOnlyProperty)
    //     return true
    //   }
    //   return false
    // }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
