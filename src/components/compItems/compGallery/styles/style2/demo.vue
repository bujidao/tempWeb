<template>
  <div class="gallery-style2">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/a.jpg"></div>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Lorem ipsum dolor sit amet consectetur adipisi.</a></h2>
              <p class="t-card-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit，Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/b.jpg"></div>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Lorem ipsum dolor sit amet consectetur adipisi.</a></h2>
              <p class="t-card-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit，Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/c.jpg"></div>
            <div class="t-card-font-wrapper">
              <h2 class="t-card-title"><a href="#">Lorem ipsum dolor sit amet consectetur adipisi.</a></h2>
              <p class="t-card-description">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit，Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit</p>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/d.jpg"></div>
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
import tTitle from '@/components/compItems/compSectionTitle/styles/style3/demo'

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
  $col-length = 2
  /*动画持续时间*/
  $t-card-pic-time = .5s
  /*图片区域大小*/
  $t-card-pic-height = 168px
  .gallery-style2
    padding: 40px
    .t-container
      width: 1200px
      margin: 0 auto
      .row
        margin-bottom: 20px
      .t-card
        .t-card-pic-wrapper
          width: 100%
          height: $t-card-pic-height
          overflow: hidden
          img
            min-height: 100%
            max-width: 100%
            transition: all $t-card-pic-time ease 0s
          &:hover
            img
              transform: scale(1.2)
        .t-card-font-wrapper
          height: 140px
          overflow: hidden
          border: 1px solid #eee
          padding: 10px 15px
          .t-card-title
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 2
            overflow: hidden
            font-size: 18px
          .t-card-description
            display: -webkit-box
            -webkit-box-orient: vertical
            -webkit-line-clamp: 3
            overflow: hidden
            font-size: 16px
  /*格式校正*/
</style>
