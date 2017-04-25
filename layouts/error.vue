<template>
  <section class="viewport content">
    <div class="container center-xs">
      <img src="https://media.giphy.com/media/9izRS7GBXCoA8/giphy.gif" alt="nuxt-framework" />
      <h1 class="title">
        {{ error.statusCode }}
      </h1>
      <h2 class="info">
        {{ error.message }}
      </h2>
      <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
        Homepage
      </nuxt-link>
    </div>
  </section>
</template>
<script>
export default {
  props: ['error']
}
</script>

<style scoped>
.title
{
  margin-top: 15px;
  font-size: 5em;
}
.info
{
  font-weight: 300;
  color: #9aabb1;
  margin: 0;
}
.button
{
  margin-top: 50px;
}

img {
  margin-top: 2em; 
  width: auto;
}
</style>
