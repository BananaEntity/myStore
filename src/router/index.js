import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Error from '../components/Error.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/home',
    component: Error
  },
  {
    path: '*',
    name: '/error',
    component: Error
  },
  {
    path: '/home',
    name: 'home',
    component: Home
    // meta: {
    //   requiresAuth: true
    // }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  }
]

const router = new VueRouter({
  routes
})

Vue.prototype.$loginStatus = ''// checkLogin()

// function checkLogin () {
//   if (firebase.auth().currentUser != null) {
//     return true
//   }
//   return false
// }
// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('home')
//   else next()
// })

export default router
