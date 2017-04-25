<template>
  <section class="viewport content">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li v-for="post in posts">
              <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      return { posts: res.data.slice(0, 5) }
    })
  }
}
</script>

<style lang="scss">
</style>
