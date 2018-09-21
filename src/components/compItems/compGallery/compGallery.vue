<template>
  <div class="header">
    <Style1></Style1>
    <Style2></Style2>
  </div>
</template>

<script>
import Style1 from '@/components/compItems/compGallery/styles/style1/demo.vue'
import Style2 from '@/components/compItems/compGallery/styles/style2/demo.vue'

export default {
  data () {
    return {
      msg: 'i am Gallery'
    }
  },
  components: {
    Style1,
    Style2
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
