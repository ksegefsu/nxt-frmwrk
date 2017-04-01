<template>
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <nuxt-link to="/">Main Page</nuxt-link>
          <my-pricing/>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'
import MyPricing from '~components/Pricing.vue'

export default {
  head () {
    return {
      title: 'Главная страница - Сайт',
      meta: [
        { hid: 'description', name: 'description', content: 'Custom description on page' }
      ],
      link: [
        { rel: 'canonical', href: 'http://example.com' }
      ]
    }
  },
  components: {
    TwitterHeadCard, OpenGraph, MyPricing
  }
}
</script>

<style scoped>

</style>
