<template lang="html">
  <gmap-map
    :center="{lat:50, lng:30}"
    :zoom="7"
    map-type-id="terrain"
    style="width: auto; height: 300px"
  ></gmap-map>
</template>

<script>

// import Vue from 'vue'
// import * as VueGoogleMaps from 'vue2-google-maps'
//
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyB3QqohnQsS6SLbLLDxzLAvH0XaEbIwY20'
//   }
// })

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
}
</script>

<style lang="css">
</style>
