<template>
  <div class="header">
    <section class="pc-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-center none-effect">
            <a href="#">
              <img src="img/banner001.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="img/banner002.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="img/banner003.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="img/banner004.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
          <div class="swiper-slide">
            <a href="#">
              <img src="img/banner005.jpg">
            </a>
            <div class="layer-mask"></div>
          </div>
        </div>
        <div class="button">
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as Swiper from './js/swiper.min'

export default {
  data () {
    return {
      msg: 'i am style1'
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .swiper-container
    margin-left: auto
    margin-right: auto
    position: relative
    overflow: hidden
    z-index: 1
    .swiper-wrapper
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: -webkit-box;
      display: -moz-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-transition-property: -webkit-transform;
      -moz-transition-property: -moz-transform;
      -o-transition-property: -o-transform;
      -ms-transition-property: -ms-transform;
      transition-property: transform;
      -webkit-box-sizing: content-box;
      -moz-box-sizing: content-box;
      box-sizing: content-box;
      .swiper-slide
        -webkit-flex-shrink: 0;
        -ms-flex: 0 0 auto;
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
/*格式纠正*/
</style>
