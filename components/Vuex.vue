<template>
  <div class="result">
    <span>{{counter}}</span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      // counter: 2
    }
  },
  computed: mapState([
    'counter'
  ])
  // {
  //   counter () {
  //     return this.$store.state.counter
  //   }
  // }
}
</script>

<style lang="scss">
.result {
  display: inline-block;
  border: 10px solid purple;
  color: purple;
}
span {
  width: auto;
  font-size: 5em;
  color: inherit;
}
</style>
