<template>
  <div class="compGallery">
    <vue-particles color="#7b7d7d" :particleOpacity="0.7" :particlesNumber="80" shapeType="triangle" :particleSize="4" linesColor="#203c77" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="100" :moveSpeed="2" :hoverEffect="true" hoverMode="grab" :clickEffect="true" clickMode="push" class="particles"></vue-particles>
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
    <div class="t-comp-wrapper">
      <Style4></Style4>
    </div>
    <div class="t-comp-wrapper">
      <Style5></Style5>
    </div>
  </div>
</template>

<script>
import Style1 from '@/components/compItems/compGallery/styles/style1/demo.vue'
import Style12 from '@/components/compItems/compGallery/styles/style1-2/demo.vue'
import Style2 from '@/components/compItems/compGallery/styles/style2/demo.vue'
import Style3 from '@/components/compItems/compGallery/styles/style3/demo.vue'
import Style4 from '@/components/compItems/compGallery/styles/style4/demo.vue'
import Style5 from '@/components/compItems/compGallery/styles/style5/demo.vue'

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
    Style3,
    Style4,
    Style5
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .compGallery
    .particles
      position: fixed
      left: 0
      top: 0
      width: 100%
      height: 100%
    .t-comp-wrapper
      position: relative
    .t-comp-wrapper:nth-child(2n+1)
      background: #ecf0f9
/*格式纠正*/
</style>
