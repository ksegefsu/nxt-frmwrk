import Vue from 'vue'
import Vodal from 'vodal'

Vue.component(Vodal.name, Vodal)

export default {
  name: 'app',
  data () {
    return {
      show: false
    }
  }
}
