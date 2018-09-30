<template>
  <div class="gallery-style5">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/svg/mutuo.svg"></div>
            <div class="t-card-discription">木手托</div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/svg/mouse_pad.svg"></div>
            <div class="t-card-discription">鼠标垫</div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/svg/zhijia.svg"></div>
            <div class="t-card-discription">手机支架</div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/svg/earphone.svg"></div>
            <div class="t-card-discription">耳机支架</div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-card-pic-wrapper"><img src="./images/svg/pen.svg"></div>
            <div class="t-card-discription">笔筒</div>
          </div>
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
        cname: '边框',
        ename: '>>more',
        tcolor: 'red'
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
  .gallery-style5
    padding: 40px
    background: #292D37
    .t-container
      width: 1200px
      margin: 0 auto
      .t-title
        color: #fff
      .row
        margin-bottom: 20px
        .t-card
          text-align: center
          width: 200px
          height: 300px
          .t-card-pic-wrapper
            img
              width: 84px
              height: 84px
          .t-card-discription
            test-align: center
            color: #fff
  /*格式校正*/
</style>
