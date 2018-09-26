<template>
  <div class="contact-style1">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <span class="t-icon-wrapper glyphicon glyphicon-earphone"><v-icon name="phone"/></span>
          <span class="t-info t-info-call">联系电话：<strong>{{contact.phone}}</strong></span>
        </b-col>
        <b-col>
          <span class="t-icon-wrapper"><v-icon name="envelope"/></span>
          <span class="t-info t-info-email">联系邮箱： {{contact.email}}</span>
        </b-col>
        <b-col>
          <span class="t-icon-wrapper fa fa-camera-retro"><v-icon name="map"/></span>
          <span class="t-info t-info-address">联系地址： {{contact.address}}</span>
        </b-col>
      </b-row>
      <b-row>
        <div id="allmap" ref="allmap"></div>
      </b-row>
    </div>
  </div>
</template>

<script>
import tTitle from '@/components/compItems/compSectionTitle/styles/style3/demo'
import BMap from 'BMap'

export default {
  data () {
    return {
      msg: 'i am Gallery',
      tname: {
        cname: '联系我们',
        ename: 'contact us'
      },
      contact: {
        phone: '010-23452345',
        email: 'example@example.com',
        address: '北京市海淀区颐和园路5号'
      },
      allmap: {
        pointX: 116.312992,
        pointY: 39.997937
      }
    }
  },
  methods: {
    initMap () {
      var map = new BMap.Map(this.$refs.allmap)
      var point = new BMap.Point(116.312992, 39.997053)
      map.centerAndZoom(point, 16)
      map.enableDragging()
      map.enableScrollWheelZoom()
      map.disableDoubleClickZoom()
      map.enableKeyboard()
      map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_LEFT, type: BMAP_NAVIGATION_CONTROL_LARGE}))
      map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_BOTTOM_LEFT}))
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
  #allmap
    margin-top: 20px
    width: 100%
    height: 400px
  .contact-style1
    .t-container
      width: 1200px
      margin: 0 auto
      span
        float: left
      .t-icon-wrapper
        display: inline-block
        width: $t-size
        height: $t-size
        border-radius: 50%
        border: 1px solid #ccc
        margin-right: 20px
        text-align: center
        line-height: 33px
        color: #666
        &:after
          display: inline-block
          margin-left: 60px
          margin-top: -60px
          content: ''
          height: 60px
          border-right: 1px solid #ccc
      .t-info
        margin-left: 20px
        display: inline-block
        height: $t-size
        line-height: $t-size
        &.t-info-call
          strong
            display: inline
            font-size: 25px
            font-weight: 700
            color: red
  /*格式校正*/
</style>
