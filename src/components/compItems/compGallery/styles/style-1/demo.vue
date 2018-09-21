<template>
  <div class="gallery-style1">
    <div class="t-container">
      <tTitle :cname="tname.cname" :ename="tname.ename"></tTitle>
      <b-row>
        <b-col>
          <div class="t-card">
            <div class="t-front">
              <img src="./img/563.jpg" alt="">
              <div class="t-front-font-area">
                <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
              </div>
            </div>
            <div class="t-back">
              <div class="t-b-font-area">
                <p>我是一段中文，并不包含任何意义，仅仅作为制作模板时测试使用。</p>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
                <div class="t-b-btn">
                  <button class="t-button">Click Here</button>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-front">
              <img src="./img/560.jpg" alt="">
              <div class="t-front-font-area">
                <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
              </div>
            </div>
            <div class="t-back">
              <div>
                <p>我是一段中文，并不包含任何意义，仅仅作为制作模板时测试使用。</p>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
                <div class="t-b-btn">
                  <button class="t-button">Click Here</button>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col>
          <div class="t-card">
            <div class="t-front">
              <img src="./img/562.jpg" alt="">
              <div class="t-front-font-area">
                <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
              </div>
            </div>
            <div class="t-back">
              <div>
                <p>我是一段中文，并不包含任何意义，仅仅作为制作模板时测试使用。</p>
                <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
                <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
                <div class="t-b-btn">
                  <button class="t-button">Click Here</button>
                </div>
              </div>
            </div>
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
        cname: '中文标题',
        ename: 'english title'
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
  $wrapper-size-width = 300px
  $wrapper-size-height = 400px
  //翻转动画时间
  $animate-time = all ease-in-out .7s
  /*前面文字区域*/
  $t-f-font-area-height = 100%
  $t-t-font-area-bg = rgba(0, 0, 0, .2)
  $t-f-font-size = 30px
  $t-f-font-color = #fff
  .gallery-style1
    /*width: 1200px*/
    margin: 0 auto
    padding: 40px
    background: #ecf0f9
    .t-container
      width: 1200px
      margin: 0 auto
      .t-card
        width: $wrapper-size-width
        height: $wrapper-size-height
        overflow: hidden
        margin: 0 auto
        position: relative
        cursor: default
        &:hover
          .t-front
            transform: rotateY(-180deg)
          .t-back
            transform: rotateY(0deg)
        .t-front
          backface-visibility: hidden
          positioin: absolute
          left: 0
          top: 0
          width: 100%
          height: 100%
          transition: $animate-time
          .t-front-font-area
            position: absolute
            left: 0
            bottom: 0
            width: 100%
            height:  $t-f-font-area-height
            padding: 10px
            background: $t-t-font-area-bg
            display: flex
            p
              align-self: center
              text-align: center
              font-size: $t-f-font-size
              color: $t-f-font-color
        .t-back
          backface-visibility: hidden
          transform: rotateY(-180deg)
          position: absolute
          padding: 20px 30px
          top: 0
          left: 0
          width: 100%
          height: 100%
          background: #fff
          text-slign: center
          transition: $animate-time
          p
            text-indent: 2em
          .t-b-btn
            position: absolute
            left: 0
            bottom: 30px
            width: 100%
            text-align: center
            .t-button
              width: 120px
              height: 40px
              border: none
              border-radius: 5px
              box-shadow: 0 0 8px 1px #ccc
              background: deepskyblue
              color: #fff
              &:hover
               border: 1px solid #ccc
               cursor: pointer
  /*格式校正*/
</style>
