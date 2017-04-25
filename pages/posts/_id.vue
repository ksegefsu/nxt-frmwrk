<template>
  <section class="viewport content">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1>{{ post.title }}</h1>
          <p>{{ post.body }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((res) => {
      return { post: res.data }
    })
  }
}
</script>

<style lang="scss">
</style>
