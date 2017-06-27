// src/auth/index.js

import {router} from '../index'

// URL and endpoint constants
const API_URL = 'http://104.131.11.240/api/v1/accounts/'
const LOGIN_URL = API_URL + 'login'
const SIGNUP_URL = API_URL + 'register'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds, (data) => {
        localStorage.setItem('id', data.user._id)
        localStorage.setItem('apitoken', data.user.apitoken)
        localStorage.setItem('name', data.user.name)
        localStorage.setItem('token', data.token)

        this.user.authenticated = true

        // Redirect to a specified route
        if(redirect) {
          router.push(redirect)        
        }
        Vue.http.headers.common['Authorization'] = this.getAuthHeader()

    }).error((err) => {
      context.error = err
    })
  },

  // Send a request to the signup URL and save the returned JWT
  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds, (data) => {
        localStorage.setItem('id', data.user._id)
        localStorage.setItem('apitoken', data.user.apitoken)

        if(redirect) {
          router.push(redirect)        
        }

    }).error((err) => {
      context.error = err
    })
  },

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('id_token')
      localStorage.removeItem('access_token')
      this.user.authenticated = false
      delete Vue.http.headers.common['Authorization']
  },

  checkAuth() {
    var jwt = localStorage.getItem('token')
      if(jwt) {
        this.user.authenticated = true
      }
      else {
        this.user.authenticated = false      
      }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
  return 'Bearer ' + window.localStorage.getItem('token')}
}
