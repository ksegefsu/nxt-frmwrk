<template lang="html">
  <footer>
    <button @click="increment(1)">CLICK{{counter}}</button>
    Visit ♠️ our website for more documentation : <a href="https://nuxtjs.org" target="_blank">nuxtjs.org</a>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function (value) {
      this.counter += value
    }
  },
  computed: {
  }
}
</script>

<style lang="scss">
footer
{
  // margin-top: 1em;
  padding: 1em;
  text-align: center;
  border-top: 1px solid #ddd;
}
</style>
