<template>
  <section class="viewport content">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">

          <my-line v-if="showLine"
          :data="data"
          :width="400"
          :height="200"
          :options="options"/>

      </div>
    </div>
  </div>
</section>
</template>

<script>
// import Vue from 'vue'
export default {
  data () {
    return {
      showLine: false
    }
  },
  mounted () {
    this.showLine = true // showLine will only be set to true on the client. This keeps the DOM-tree in sync.
  },
  asyncData () {
    const data = {
      labels: ['January', 'February'],
      datasets: [{
        label: 'GitHub Commits',
        backgroundColor: 'orange',
        data: [40, 20]
      }]
    } // some data
    const options = {} // some options
    return { data, options }
  }
}
</script>

<style lang="scss">

</style>
