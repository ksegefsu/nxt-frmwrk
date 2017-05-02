<template>
  <section class="viewport content">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">

          <div class="block">
            <button @click="increment">CLICK: {{ $store.state.counter }}</button>
            <vuex></vuex>
          </div>

          <div class="block">

          </div>

          <div class="block">

          </div>


        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { mapState } from 'vuex'
import Vuex from '~components/Vuex.vue'

export default {
  data () {
    return {
    }
  },
  // fetch ({ store }) {
  //   store.commit('increment')
  // },
  methods: {
    increment () {
      this.$store.state.counter++
    }
  },
  computed: {
  },
  components: {
    Vuex
  }
}
</script>

<style lang="scss">
p {
  overflow-wrap: break-word;
}
.block {
  border: 1px solid black;
  border-radius: 4px;
  margin-top: 1em;
  padding: 1em;
}



</style>
