<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>

          <div class="fullpage">
            <h1 v-parallax="0.3">Text<br>Here</h1>
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

<style lang="scss" scoped>
header {
  background: red;
}
.fullpage {
  background-image: url('http://static1.squarespace.com/static/5615286ee4b06807f40eb73c/56167d05e4b0f8900860bc93/56292de6e4b0cf893b9a75de/1446823115177/?format=750w');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: -10px;
    font-weight: bold;
    font-size: 8em;
    color: white;
    mix-blend-mode: difference;
  }
}

</style>
