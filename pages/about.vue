<template>
  <section class="viewport content">
    <div class="container">
      <nuxt-link to="/">Main Page</nuxt-link>
      <my-pricing/>
    </div>

  </section>
</template>
<script>
import MyPricing from '~components/Pricing.vue'

export default {
  head () {
    return {
      title: `About Page`
    }
  },
  components: {
    MyPricing
  }
}
</script>

<style scoped>

</style>
