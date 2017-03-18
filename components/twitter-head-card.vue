<template>
  <span v-if="false"></span>
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
export default {
  data: () => ({
  }),
  head: {
    meta: [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Контакты для связи' },
      { name: 'twitter:description', content: 'nuxt-framework описание' },
      { name: 'twitter:image', content: 'http://example.com/img/foo.img' }
    ]
  }
}
</script>

<style lang="css">
</style>
