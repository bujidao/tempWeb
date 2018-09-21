<template>
  <div class="gallery-style2">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <div class="t-list-pic-wrapper"><img src="./images/a.jpg"></div>
          <h2 class="t-list-title"><a href="#">RESPONSIVE LAYOUT</a></h2>
          <p class="t-list-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
        </b-col>
        <b-col>
          <div class="t-list-pic-wrapper"><img src="./images/b.jpg"></div>
          <h2 class="t-list-title"><a href="#">RESPONSIVE LAYOUT</a></h2>
          <p class="t-list-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
        </b-col>
        <b-col>
          <div class="t-list-pic-wrapper"><img src="./images/c.jpg"></div>
          <h2 class="t-list-title"><a href="#">RESPONSIVE LAYOUT</a></h2>
          <p class="t-list-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
        </b-col>
        <b-col>
          <div class="t-list-pic-wrapper"><img src="./images/d.jpg"></div>
          <h2 class="t-list-title"><a href="#">RESPONSIVE LAYOUT</a></h2>
          <p class="t-list-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import tTitle from '@/components/compItems/compSectionTitle/styles/style1/demo'

export default {
  data () {
    return {
      msg: 'i am Gaallery',
      tname: {
        cname: '图片缩放',
        ename: 'image zoom'
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
  /*$wrapper-size-width = 300px
  $wrapper-size-height = 400px
  //翻转动画时间
  $animate-time = all ease-in-out .7s
  /*前面文字区域*/
  /*$t-f-font-area-height = 100%
  $t-t-font-area-bg = linear-gradient(135deg, #1a9be6, #1a57e6)
  $t-f-font-size = 2.618rem
  $t-f-font-weight = 600
  $t-f-font-color = #fff*/
  .gallery-style2
    background: #fff
    padding: 40px
    .t-container
      width: 1200px
      margin: 0 auto
      .col
        width: 20%
        .t-list-pic-wrapper
          width: 100%
          height: 200px
          overflow: hidden
          img
            max-height: 100%
            max-width: 100%
  /*格式校正*/
</style>
