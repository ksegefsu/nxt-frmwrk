import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  listenEvents: [ 'scroll' ],
  attempt: 1
})
