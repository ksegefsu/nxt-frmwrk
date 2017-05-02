<template>
  <div class="">
    <div class="">
      <div v-for="image in images">
        <progressive-img
        :src="image"
        :placeholder="image"
        @onLoad="onLoadImage"
        @onLoadPlaceholder="onLoadPlaceholderImage" />
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://unsplash.it/1920/1080?image=10',
        'https://unsplash.it/1920/1080?image=11',
        'https://unsplash.it/1920/1080?image=12',
        'https://unsplash.it/1920/1080?image=13',
        'https://unsplash.it/1920/1080?image=14',
        'https://unsplash.it/1920/1080?image=15',
        'https://unsplash.it/1920/1080?image=16'
      ]
    }
  },
  methods: {
    onLoadImage () {
      // main image is loaded
    },
    onLoadPlaceholderImage () {
      // placeholder image is loaded
    }
  }

}
</script>

<style lang="scss">
</style>
