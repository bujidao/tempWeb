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
        <b-col>
          <div class="t-card">
            <div class="t-front">
              <img src="./img/559.jpg" alt="">
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
        cname: '图片滑入',
        ename: 'image slide'
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
  $wrapper-size-width = 277px
  $wrapper-size-height = 400px
  //滑入动画时间
  $animate-time = all ease-in-out .5s
  //  滑入方向
  $animate-direction = $a-left, 0
  $a-left = -100%
  $a-right = 100%
  $a-top = -100%
  $a-bottom = 100%
  /*前面文字区域*/
  $t-f-font-area-height = 100%
  $t-t-font-area-bg = linear-gradient(135deg, #1a9be6, #1a57e6)
  $t-f-font-size = 2.4rem
  $t-f-font-weight = 600
  $t-f-font-color = #fff
  /*滑入色块相关*/
  $t-f-back-bg = #fff
  $t-f-back-font-color = #000
  .gallery-style1
    padding: 40px
    /*background: #ecf0f9*/
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
          .t-back
            transform: translateX(0)
            opacity: 1
        .t-front
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
            display: flex
            z-index: 0
            &:after
              position: absolute
              display: block
              top: 0
              left: 0
              width: 100%
              height: 100%
              background: $t-t-font-area-bg
              opacity: .2
              z-index: -1
              content:''
            p
              align-self: center
              text-align: center
              font-size: $t-f-font-size
              font-weight: $t-f-font-weight
              color: $t-f-font-color
        .t-back
          transform: translate($animate-direction)
          opacity: 0
          position: absolute
          padding: 20px 30px
          top: 0
          left: 0
          width: 100%
          height: 100%
          background: $t-f-back-bg
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
