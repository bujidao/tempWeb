<template>
  <div class="gallery-style2">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/home_teaser1.jpg"></div>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Lorem ipsum dolor sit amet consectetur adipisi.</a></h2>
              <p class="t-card-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit，Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/home_teaser2.jpg"></div>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Lorem ipsum dolor sit amet consectetur adipisi.</a></h2>
              <p class="t-card-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit，Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/home_teaser3.jpg"></div>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Lorem ipsum dolor sit amet consectetur adipisi.</a></h2>
              <p class="t-card-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit，Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/home_teaser4.jpg"></div>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Lorem ipsum dolor sit amet consectetur adipisi.</a></h2>
              <p class="t-card-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit，Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
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
        cname: '边框&蒙版',
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
  /*外部容器size*/
  $col-length = 2
  /*动画持续时间*/
  $t-card-animate = all .5s ease-in-out
  $t-card-pic-height = 166px
  .gallery-style2
    padding: 40px
    .t-container
      width: 1200px
      margin: 0 auto
      .row
        margin-bottom: 20px
      .t-card
        transition: $t-card-animate
        &:hover .t-card-font-wrapper
          border-bottom-color: deepskyblue
        &:hover .t-card-pic-wrapper
          border-bottom-color: deepskyblue
        .t-card-pic-wrapper
          position: relative
          width: 100%
          height: $t-card-pic-height
          overflow: hidden
          border-bottom: 4px solid #ddd
          transition: $t-card-animate
          &:before
            position: absolute
            display: block
            width: 50px
            height: 50px
            border-radius: 50%
            left: 50%
            top: 50%
            margin: -25px 0 0 -25px
            background: url("images/cross.png") center center
            content: ''
            transition: $t-card-animate
            z-index: 1
            opacity: 0
          &:after
            position: relative
            display: block
            top: -100%
            left: 0
            width: 100%
            height: 100%
            background: url("images/linegrid.png")
            content: ''
            transition: $t-card-animate
            opacity: 0
          img
            min-height: 100%
            max-width: 100%
          &:hover
            &:before
              opacity: 1
            &:after
              opacity: 1
        .t-card-font-wrapper
          overflow: hidden
          border: 1px solid #ddd
          padding: 10px 15px
          transition: $t-card-animate
          .t-card-title
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
            font-size: 18px
          .t-card-description
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
            font-size: 16px
  /*格式校正*/
</style>
