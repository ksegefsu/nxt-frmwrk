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
      { property: 'og:url', content: 'http://example.com/contacts' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Контакты для связи' },
      { property: 'og:description', content: 'nuxt-framework описание' },
      { property: 'og:image', content: 'http://example.com/img/foo.img' },
      { property: 'og:image:width', content: '280' },
      { property: 'og:image:height', content: '150' },
      { property: 'og:site_name', content: 'nuxt-framework' }
    ]
  }
}
</script>

<style lang="css">
</style>
