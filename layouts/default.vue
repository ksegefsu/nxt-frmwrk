<template>
  <div class="">
    <my-header/>
    <div class="flexstick">
      <div class="warning"></div>

      <nuxt/>
      <my-footer/>
    </div>
  </div>

</template>

<script>
import MyHeader from '~components/Header.vue'
import MyFooter from '~components/Footer.vue'

import twemoji from 'twemoji'
var em = function () {
  if (process.BROWSER_BUILD) {
    window.onNuxtReady(() => {
      twemoji.parse(document.body)
    })
  }
}
em()

export default {
  head () {
    return {
      script: [
        // { src: 'https://code.getmdl.io/1.3.0/material.min.js' }
      ]
    }
  },
  components: {
    MyHeader, MyFooter
  }
}
</script>

<style lang="scss">
.content {
  margin-top: 44px;
}
@media only screen and (min-width: 48em) {
  .content {
    margin-top: 88px;
  }
}
@media only screen and (min-width: 64em) {
  .container {
    // font-size: 18px;
  }
  .content {
    margin-top: 44px;
    // padding-top: 22px;
  }
}
@media only screen and (min-width: 75em) {

}
.viewport {
  flex: 1;
  // max-width: 1000px;
  // margin: auto;
  // padding: 0 0.5rem;
  // display: flex;
}
.flexstick {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
<style>
img.emoji {
  margin: -3px 5px !important;
  display: inline !important;
  width: 20px;
  height: 20px;
}
</style>
