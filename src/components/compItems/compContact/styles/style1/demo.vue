<template>
  <div class="contact-style1">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <span class="t-icon-wrapper glyphicon glyphicon-earphone"><i></i></span>
          <span class="t-info t-info-call">联系电话：010-12312345678</span>
        </b-col>
        <b-col>
          <span class="t-icon-wrapper"><i></i></span>
          <span class="t-info t-info-email">联系邮箱： example@example.com</span>
        </b-col>
        <b-col>
          <span class="t-icon-wrapper"><i></i></span>
          <span class="t-info t-info-address">联系地址： 北京市朝阳区</span>
        </b-col>
      </b-row>
      <b-row>
        <div id="allmap" ref="allmap"></div>
      </b-row>
    </div>
  </div>
</template>

<script>
import tTitle from '@/components/compItems/compSectionTitle/styles/style5/demo'
import BMap from 'BMap'

export default {
  data () {
    return {
      msg: 'i am Gallery',
      tname: {
        cname: '联系我们',
        ename: 'contact us'
      }
    }
  },
  methods: {
    initMap () {
      console.log("hehe")
      console.log(BMap)
      console.log("haha")
      var map = new BMap.Map(this.$refs.allmap)
      var point = new BMap.Point(116.312992, 39.997053)
      map.centerAndZoom(point, 16)
      window.map = map
      map.enableDragging()
      map.enableScrollWheelZoom()
      map.disableDoubleClickZoom()
      map.enableKeyboard()
      var ctrlNav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE})
      map.addControl(ctrlNav)
      var ctrlSca = new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT})
      map.addControl(ctrlSca)
    }
  },
  mounted () {
    this.initMap()
  },
  components: {
    tTitle
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  /*自定义样式*/
  $t-size = 40px
  #BMap
    height: 500px
  .contact-style1
    .t-container
      width: 1200px
      margin: 0 auto
      .t-icon-wrapper
        display: inline-block
        width: $t-size
        height: $t-size
        border-radius: 50%
        border: 1px solid #ccc
      .t-info
        display: inline-block
        height: $t-size
        line-height: $t-size
  /*格式校正*/
</style>
