<template>
    <div class="login">
        <h3>Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="doLogin">Sign In</button>
        <p>Don't have an account ? Let's <router-link to="/sign-up">create one</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    doLogin: function () {
      let router = this.$router
      // this.$router.replace('home')
      // those 2 lines are the same
      // this.$router.push('home')
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Connected !')
          this.$loginStatus = true
          // alert(firebase.auth().currentUser)
          router.replace('home')
        },
        function (err) {
          alert('Error: ' + err.message)
        }
      )
    }
  }
}
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
    .login {
        margin-top: 40px;
    }
    input {
        margin: 10px 0;
        width: 20%;
        padding: 15px;
    }
    button {
        margin-top: 20px;
        width: 10%;
        cursor: pointer;
    }
    p {
        margin-top: 40px;
        font-size: 13px;
    }
    p a {
        text-decoration: underline;
        cursor: pointer;
    }
</style>
