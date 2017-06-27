<!-- src/components/Account.vue -->

<template>
  <div class="col-sm-4 col-sm-offset-4">
    <h2>Welcome, {{ name }} </h2>
  <button class="btn btn-primary" v-on:click="getStreams()">Load Streams</button>
  
  <ul id="repeat-object" class="demo">
    <li v-for="stream in streams">
      {{ stream.streamId }}
    </li>
  </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: localStorage.name,
      id: localStorage.id,
      apitoken: localStorage.apitoken,
      streams: ""
    }
  },

  methods: {
    getStreams() {
      this.$http
      .get('http://104.131.11.240/api/v1/streams', (data) => {
        this.streams = data.data;
      },
      {headers: {
      "speckle-token": this.apitoken}}
      )
      .error((err) => console.log(err))
    }
  },
}
</script>
