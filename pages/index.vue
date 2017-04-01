<template lang="html">
  <section class="viewport content">
    <twitter-head-card></twitter-head-card>
    <open-graph></open-graph>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="">One Morning, When Gregor Samsa Woke</h1>
          <p>From troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
          <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &ldquo;What&rsquo;s happened to me?&rdquo; he thought. It wasn&rsquo;t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
        </div>
        <div class="col-xs-12 col-sm-6">
          <h2 class="">По русски, One Morning, When Gregor Samsa Woke</h2>
          <p>From troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
          <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &ldquo;What&rsquo;s happened to me?&rdquo; he thought. It wasn&rsquo;t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
        </div>
        <div class="col-xs-12 col-sm-6">
          <h3 class="">One Morning, When Gregor Samsa Woke</h3>
          <p>From troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
          <p>His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. &ldquo;What&rsquo;s happened to me?&rdquo; he thought. It wasn&rsquo;t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.</p>
        </div>
        <div class="col-xs-12">
          <h4 class="">One Morning, When Gregor Samsa Woke</h4>
          <p>From troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment.</p>
        </div>
      </div>
      <div class="row center-sm">
        <div class="col-xs-12 col-sm-6">
          <h1 class="">One Morning, When</h1>
          <h2 class="">One Morning, When</h2>
          <h3 class="">One Morning, When</h3>
          <h4 class="">One Morning, When</h4>
          <nuxt-link to="/about" class="button">About</nuxt-link>
          <div href="" class="button button-primary">
            BLAH
          </div>
          <button type="button" name="button" class="button button-primary">Check</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TwitterHeadCard from '~components/twitter-head-card.vue'
import OpenGraph from '~components/open-graph.vue'

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
  components: {
    TwitterHeadCard, OpenGraph
  }
}
</script>

<style lang="css">
</style>
