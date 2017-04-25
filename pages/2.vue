<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2>Test Test Test Test Test Test Test Test Test Test</h2>
        </div>
      </div>
    </div>

    <div v-if="showMap" class="">
      <google-map></google-map>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <input type="text" name="" value="">
        </div>
      </div>
    </div>




<!--
     <img v-lazyload="'https://cdn-images-1.medium.com/max/1000/1*27_54ufzBoYXilrq_a6ChA.jpeg'"/>

     <img v-lazyload="'https://cdn-images-1.medium.com/max/1000/1*27_54ufzBoYXilrq_a6ChA.jpeg'"/>

     <img v-lazyload="'https://cdn-images-1.medium.com/max/1000/1*27_54ufzBoYXilrq_a6ChA.jpeg'"/>

     <img v-lazyload="'https://cdn-images-1.medium.com/max/1000/1*27_54ufzBoYXilrq_a6ChA.jpeg'"/>


     <figure class="ink-image bottom-space">
       <img v-lazyload="src"/>
       <figcaption class="over-bottom">
         This a caption over the top of the image.
       </figcaption>
     </figure> -->
    </div>

  </section>
</template>

<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'
import GoogleMap from '~components/google-map.vue'
// import Vue from 'vue'
// import Lazyload from 'vue-lazyload-img'
// Vue.use(Lazyload, {
//   fade: true,
//   speed: 20,
//   time: 300
// })
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
  data () {
    return {
      showMap: false
    }
  },
  mounted () {
    this.showMap = true
  },
  components: {
    TwitterHeadCard, OpenGraph, GoogleMap
  }
}
</script>

<style lang="scss"scoped>
@import "assets/scss/base/_colors";

h2 {
  color: $purple;
}

img {
  width: 100%;
  height: auto;
}
img[lazy=loaded] {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
