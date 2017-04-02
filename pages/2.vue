<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2>Test</h2>
        </div>
      </div>
    </div>

    <div class="">
      <!-- <gmap-map
        :center="{lat:50, lng:30}"
        :zoom="7"
        map-type-id="terrain"
        style="display: block; width: auto; height: 300px"
      ></gmap-map> -->
      <google-map></google-map>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <input type="text" name="" value="">
        </div>
      </div>
    </div>
    <!-- <form>
      <input type="text" name="" value="">
    </form> -->


  </section>
</template>

<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'
import GoogleMap from '~components/google-map.vue'

// import Vue from 'vue'
//
// if (process.browser) {
//   const VueGoogleMaps = require('vue2-google-maps')
//   Vue.use(VueGoogleMaps, {
//     load: {
//       key: 'AIzaSyB3QqohnQsS6SLbLLDxzLAvH0XaEbIwY20'
//     }
//   })
// }

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
    TwitterHeadCard, OpenGraph, GoogleMap
  }
}
</script>

<style lang="scss"scoped>

h2 {
  color: red;
}
</style>
