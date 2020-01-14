<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Blank msg="This is a customed Home page"/>
    <button @click="doLogOut">Sign Out</button>
    <div v-if="isLogin">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div> -->
  </div>
</template>

<script>
// import firebase from 'firebase'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Blank from '@/components/Blank.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld
    // Blank
  },
  data () {
    return {
      isLogin: this.checkLogin()
    }
  },
  methods: {
    // doLogOut: function () {
    //   firebase.auth().signOut().then(() => {
    //     this.$router.replace('login')
    //   })
    // },
    // checkLogin: function () {
    //   if (firebase.auth().currentUser != null) {
    //     return true
    //   }
    //   return false
    // }
  }
}
</script>
