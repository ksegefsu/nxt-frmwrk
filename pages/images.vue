<template>
  <div class="">
    <div v-for="item in imgs">
      <div class="space"></div>
      <div class="progressive">
        <img class="preview" v-progressive="item.src" :data-srcset="item.srcset" :src="item.preview" />
      </div>
    </div>
  </div>


</template>

<script>
export default {
  data () {
    return {
      imgs: [
        {
          src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',
          preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'
        },
        {
          src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',
          preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="css">
</style>
