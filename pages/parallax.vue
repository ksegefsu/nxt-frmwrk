<template>
  <section class="container">
    <h1>
    this page just a skrollr simple test
    </h1>

    <div id="skrollr-body">
		spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>
		<div id="foo" data-0="background-color:rgb(0,0,255);" data-500="background-color:rgb(255,0,0);">WOOOT</div>
	</div>

    <router-link class="button" to="/">Home page</router-link>
  </section>

</template>

<script>
// const skrollr = (process.BROWSER_BUILD) ? require('skrollr') : { init () { console.log('empty skrollr') } }
// let s
import Vue from 'vue'

export default {
  mounted () {
    Vue.Skrollr.init()
  },
  beforeDestroy () {
    Vue.Skrollr.destroy()
  }
}
</script>

<style lang="scss">

</style>
