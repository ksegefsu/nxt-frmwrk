<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2>Test</h2>
          <figure>
            <img src="http://ink.sapo.pt/assets/img/examples/tiny/field.jpg" alt="">
            <figcaption>Some random text here.</figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'

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
    TwitterHeadCard, OpenGraph
  }
}
</script>

<style lang="css">
</style>
