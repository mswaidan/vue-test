<!-- src/components/Signup.vue -->

<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Sign Up</h2>
    <p>Sign up for a new Speckle Server account.</p>
    <div class="alert alert-danger" v-if="error">
      <ul id="repeat-object" class="demo">
        <li v-for="value in error">
          {{ value }}
        </li>
      </ul>
    </div>
    <div class="form-group">
      <input
         type="text"
         class="form-control"
         placeholder="Email address"
         v-model="credentials.email"
         >
    </div>
      <div class="form-group">
        <input
           type="password"
           class="form-control"
           placeholder="Password"
           v-model="credentials.password"
           >
      </div>
        <div class="form-group">
          <input
             type="text"
             class="form-control"
             placeholder="First Name"
             v-model="credentials.firstname"
             >
          <input
             type="text"
             class="form-control"
             placeholder="Last Name"
             v-model="credentials.lastname"
             >
        </div>
          <div class="form-group">
            <input
               type="text"
               class="form-control"
               placeholder="Company"
               v-model="credentials.company"
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
      error: ''
    }
  },
  methods: {
    submit() {
      var credentials = {
        email: this.credentials.email,
        password: this.credentials.password,
        name: this.credentials.firstname,
        surname: this.credentials.lastname,
        company: this.credentials.company
      }
      // We need to pass the component's this context
      // to properly make use of http in the auth service
      auth.signup(this, credentials, 'login')
    }
  }

}
</script>

