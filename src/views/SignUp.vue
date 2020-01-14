<template>
    <div class="signUp">
        <h3>Let's create new account</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button @click="doSignUp">Sign up</button>
        <p>Already had an account? <router-link to="/login">Sign in</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    doSignUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
        function (user) {
          alert('Created !')
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
    .signUp {
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
