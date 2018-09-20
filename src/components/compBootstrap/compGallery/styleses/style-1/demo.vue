<template>
  <div class="gallery-style1">
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
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              <button class="t-button">Click Here</button>
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
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              <button class="t-button">Click Here</button>
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
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              <button class="t-button">Click Here</button>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'i am Gaallery'
    }
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
    padding: 40px
    background: #ecf0f9
    .t-card
      width: $wrapper-size-width
      height: $wrapper-size-height
      overflow: hidden
      margin: 0 auto
      position: relative
      cursor: pointer
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
        padding: 20px
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: #fff
        text-slign: center
        transition: $animate-time
        .t-button
          margin: 0 auto
  /*格式校正*/
</style>
