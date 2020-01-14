import Vue from 'vue'
import firebase from 'firebase'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

let app = ''

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAw5tErO0z-lVcKicdQuUF5fdmEmBjss_c',
  authDomain: 'mystore-e56fc.firebaseapp.com',
  databaseURL: 'https://mystore-e56fc.firebaseio.com',
  projectId: 'mystore-e56fc',
  storageBucket: 'mystore-e56fc.appspot.com',
  messagingSenderId: '826997441341',
  appId: '1:826997441341:web:a77f17dd9f80a81aaafb54',
  measurementId: 'G-L3SQ1SZH13'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
