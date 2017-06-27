<!-- src/components/Login.vue -->

<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Log In</h2>
    <p>Log in to your Speckle Server account.</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="alert alert-danger" v-if="message">
      <p>{{ message }}</p>
    </div>
    <div class="form-group">
      <input
         type="text"
         class="form-control"
         placeholder="Enter your email address"
         v-model="credentials.email"
         >
    </div>
      <div class="form-group">
        <input
           type="password"
           class="form-control"
           placeholder="Enter your password"
           v-model="credentials.password"
           >
      </div>

        <button class="btn btn-primary" @click="submit()">Login</button>
  </div>
</template>

<script>
import auth from '../auth'
export default {
  data() {
    return {
      // We need to initialize the component with any
      // properties that will be used in it
      credentials: {
        email: '',
        password: ''
      },
      error: '',
      message: ''
    }
  },
  methods: {
    submit() {
      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password
      }
      // We need to pass the component's this context
      // to properly make use of http in the auth service
      auth.login(this, credentials, 'account')
    }
  }

}
</script>

