<template>
  <div class="compGallery">
    <div class="t-comp-wrapper">
      <Style1></Style1>
    </div>
    <div class="t-comp-wrapper">
      <Style12></Style12>
    </div>
    <div class="t-comp-wrapper">
      <Style2></Style2>
    </div>
    <div class="t-comp-wrapper">
      <Style3></Style3>
    </div>
  </div>
</template>

<script>
import Style1 from '@/components/compItems/compGallery/styles/style1/demo.vue'
import Style12 from '@/components/compItems/compGallery/styles/style1-2/demo.vue'
import Style2 from '@/components/compItems/compGallery/styles/style2/demo.vue'
import Style3 from '@/components/compItems/compGallery/styles/style3/demo.vue'

export default {
  data () {
    return {
      msg: 'i am Gallery'
    }
  },
  components: {
    Style1,
    Style12,
    Style2,
    Style3
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .compGallery
    .t-comp-wrapper:nth-child(2n+1)
      background: #ecf0f9
/*格式纠正*/
</style>
