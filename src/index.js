// src/index.js

import Vue from 'vue'
import App from './components/App.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
import auth from './auth'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.use(VueRouter)

export var router = new VueRouter()

// Check the users auth status when the app starts
auth.checkAuth()

// Optional
Vue.http.headers.common['Authorization'] = auth.getAuthHeader();
  
// Set up routing and match routes to components
router.map({
  '/account/': {
    component: Account
  },
  '/login': {
    component: Login
  },
  '/signup': {
    component: Signup
  }
})

// Redirect to the home route if any routes are unmatched
router.redirect({
  '*': '/home'
})

// Start the app on the #app div
router.start(App, '#app')
