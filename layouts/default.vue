<template>
  <div class="flexstick">
    <div class="warning"></div>
    <my-header/>
    <nuxt/>
    <my-footer/>
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
  components: {
    MyHeader, MyFooter
  }
}
</script>

<style lang="scss">
.content {
  margin-top: 44px;
}
@media screen and (min-width: 64em) {
  .container {
    font-size: 18px;
  }
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
