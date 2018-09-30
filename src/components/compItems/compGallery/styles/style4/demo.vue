<template>
  <div class="gallery-style4">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/home_teaser1.jpg"></div>
            <i class="t-card-border"></i>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">web design</a></h2>
              <p class="t-card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/home_teaser2.jpg"></div>
            <i class="t-card-border"></i>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Web Development</a></h2>
              <p class="t-card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/home_teaser3.jpg"></div>
            <i class="t-card-border"></i>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Investment Plan</a></h2>
              <p class="t-card-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import tTitle from '@/components/compItems/compSectionTitle/styles/style5/demo'

export default {
  data () {
    return {
      msg: 'i am Gaallery',
      tname: {
        cname: '边框',
        ename: '>>more'
      }
    }
  },
  components: {
    tTitle
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  /*自定义样式*/
  /*动画持续时间*/
  $t-card-animate = all .2s ease
  $t-card-pic-padding = 14px
  $t-card-pic-size = 66px
  .gallery-style4
    padding: 40px
    .t-container
      width: 1200px
      margin: 0 auto
      .row
        margin-bottom: 20px
      .t-card
        position: relative
        height: 270px
        border: 1px solid #ddd
        padding: 20px
        background: #f3f3f3
        transition: $t-card-animate
        font-size: 14px
        color: #9f9f9f
        &:hover .t-card-border
          top: 20px - 0.5*$t-card-pic-padding
          margin-left: -0.5*($t-card-pic-size+$t-card-pic-padding)
          width: $t-card-pic-size+$t-card-pic-padding
          height: $t-card-pic-size+$t-card-pic-padding
          border: 2px solid deepskyblue
        .t-card-pic-wrapper
          margin: 0 auto
          display: block
          width: $t-card-pic-size
          height: $t-card-pic-size
          border-radius: 50%
          background: deepskyblue
          overflow: hidden
          transition: $t-card-animate
          img
            min-height: 100%
            max-width: 100%
          &:hover
            &:before
              opacity: 1
            &:after
              opacity: 1
        .t-card-border
          position: absolute
          display: block
          top: 20px
          left: 50%
          margin-left: -0.5*$t-card-pic-size
          width: $t-card-pic-size
          height: $t-card-pic-size
          border-radius: 50%
          border: 2px solid transparent
          transition: $t-card-animate
        .t-card-font-wrapper
          overflow: hidden
          .t-card-title
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 1
            overflow: hidden
            margin: 20px 0
            text-align: center
            text-transform: capitalize
            font-size: 18px
          .t-card-description
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 4
            overflow: hidden
            text-align: center
            font-size: 16px
  /*格式校正*/
</style>
