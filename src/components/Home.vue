<!-- src/components/Home.vue -->

<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>SpeckleAdmin</h1>
    <button class="btn btn-primary" v-on:click="postLogin()">Post to Login</button>
    <button class="btn btn-primary" v-on:click="getStream()">List Streams</button>
    <div class="stream-area" v-if="stream">
      <h2><blockquote>{{ stream }}</blockquote></h2>      
      <ul id="example-1">
        <li v-for="item in stream">
          {{ item.message }}
        </li>
      </ul>
      <ul id="repeat-object" class="demo">
        <li v-for="value in stream">
          {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stream: ''
    }
  },
  methods: {
    getStream() {
      this.$http
      .get('http://104.131.11.240/api/v1/streams', (data) => {
        this.stream = data;
      })
      .error((err) => console.log(err))
    },
    postLogin() {
      this.$http
      .post('http://104.131.11.240/api/v1/accounts/login', (data) => {
        this.stream = data;
      })
      .error((err) => console.log(err))
    }
  }
}
</script>
