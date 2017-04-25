<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">

          <!-- <h2>{{title}}</h2> -->

          <ul>
            <li v-for="jew in jews">{{jew.name}}</li>
          </ul>

          <ul>
            <li v-for="goym in goyms">{{goym.name}}</li>
          </ul>

          <forms></forms>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'
import Forms from '~components/Forms.vue'
import axios from 'axios'

export default {
  asyncData ({ params }) {
    return axios.get(`http://localhost:8080/api`)
    .then((res) => {
      return {
        jews: res.data.jews,
        goyms: res.data.goyms
      }
    })
  },
  scrollToTop: false,
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
    TwitterHeadCard, OpenGraph, Forms
  }
}
</script>

<style lang="css">
</style>
