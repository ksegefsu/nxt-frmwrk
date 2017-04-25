<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg2" viewBox="0 0 744.09 1052.36" height="297" width="210">
      <defs id="defs4"/>
      <metadata id="metadata7">
        <rdf:RDF>
          <cc:Work rdf:about="">
            <dc:format>
              image/svg+xml
            </dc:format>
            <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
          </cc:Work>
        </rdf:RDF>
      </metadata>
      <g id="layer1">
        <path id="path3344" d="m32.54 628.92 643.59 0-294.21-532.55z" style="fill:none;stroke-width:2.19;stroke:#000"/>
      </g>
    </svg>
    <div id="skrollr-body">
		spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>spacer<br>
		<div id="foo" data-0="background-color:rgb(0,0,255);" data-500="background-color:rgb(255,0,0);">WOOOT</div>
	  </div>
          <div class="fullpage">
            <h1>Text<br>Here</h1>
          </div>

  </section>
</template>

<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'
const skrollr = (process.BROWSER_BUILD) ? require('skrollr') : { init () { console.log('empty skrollr') } }
let s

export default {
  head () {
    return {
      title: 'Главная страница - Сайт',
      meta: [
        { hid: 'description', name: 'description', content: 'Custom description on page' }
      ],
      link: [
        { rel: 'canonical', href: 'http://example.com' }
      ]
    }
  },
  mounted () {
    s = skrollr.init()
  },
  beforeDestroy () {
    s.destroy()
  },
  components: {
    TwitterHeadCard, OpenGraph
  }
}
</script>

<style lang="scss" scoped>
header {
  background: red;
}
.fullpage {
  background-image: url('http://static1.squarespace.com/static/5615286ee4b06807f40eb73c/56167d05e4b0f8900860bc93/56292de6e4b0cf893b9a75de/1446823115177/?format=750w');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-transform: uppercase;
    text-align: center;
    letter-spacing: -10px;
    font-weight: bold;
    font-size: 8em;
    color: white;
    mix-blend-mode: difference;
  }
}

</style>
