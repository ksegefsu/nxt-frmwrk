<template>
  <section class="viewport content">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">

          <div class="block">
            <h3>@ | v-on</h3>
            <input type="text" @input="changeTitle">
            <p>{{dataBind}}</p>
          </div>

          <div class="block">
            <h3>: | v-bind</h3>
            <a :href="linkAdd">Google</a>
          </div>

          <div class="block">
            <h3>@ | v-on</h3>
            <button @click="increase(2)" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">PLUS</button>
            <button @click="counter--" type="button" class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">MINUS</button>
            <p>{{counter}}</p>
            <p>{{counter > 10 ? 'Больше 10' : 'Меньше 10'}}</p>
          </div>

          <div class="block">
            <h3>Key Modifiers</h3>
            <input @keyup.enter.space="alertMe" type="text" placeholder="Press Enter/Space">
          </div>

          <div class="block">
            <h3>2-way Data Binding | v-model</h3>
            <input v-model="name" type="text">
            <p>{{name}}</p>
          </div>

          <div class="block">
            <h3>Dynamic Styling by CSS</h3>
            <input type="text" v-model="color" placeholder="Type colors">
            <div
              @click="addRed = !addRed"
              :class="{'red': addRed}"
              class="ds"></div>
            <div
              :class="[color, {'red': addRed}]"
              class="ds"></div>
            <div
              :class="multiClasses"
              class="ds"></div>
          </div>

          <div class="block">
            <h3>Dynamic Styling in JS</h3>
            <input type="text" v-model="setWidth" placeholder="Type width">
            <div
              :style="{'background-color':color}"
              class="ds"></div>
            <div
              :style="{'background-color':'blue'}"
              class="ds"></div>
            <div
              :style="[computedStyling, {height: setWidth + 'px'}]"
              class="ds"></div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      dataBind: 'HELLO',
      linkAdd: 'https://google.com',
      counter: 0,
      name: 'Serj',
      addRed: false,
      color: 'yellow',
      setWidth: 100
    }
  },
  methods: {
    changeTitle: function (event) {
      this.dataBind = event.target.value
    },
    text: function () {
      return 'WTF'
    },
    increase: function (value) {
      this.counter += value
    },
    alertMe: function () {
      alert('HEEEEEEEE')
    }
  },
  computed: {
    multiClasses: function () {
      return {
        'red': this.addRed,
        'blue': !this.addRed
      }
    },
    computedStyling: function () {
      return {
        width: this.setWidth + 'px'
      }
    }
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
.ds {
  width: 100px;
  height: 100px;
  background-color: gray;
  display: inline-block;
  margin: 10px;
}
.red {
  background-color: red;
}
.blue {
  background-color: blue;
}
.yellow {
  background-color: yellow;
}
</style>
