<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <div class="container">
      <h2>Test</h2>
      <gmap-map
        :center="{lat:50, lng:30}"
        :zoom="7"
        map-type-id="terrain"
        style="width: auto; height: 300px"
      ></gmap-map>
    </div>
  </section>
</template>

<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'

import Vue from 'vue'

if (process.browser) {
  const VueGoogleMaps = require('vue2-google-maps')
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyB3QqohnQsS6SLbLLDxzLAvH0XaEbIwY20'
    }
  })
}

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
