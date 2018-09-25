<template>
  <div class="loading-style1">
    <div class="t-container">
      <a href="" class="loading-wrapper">
        <div class="loading-left"></div>
        <div class="loading-right"></div>
        <p>{{somefont}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'i am Gaallery',
      somefont: 'Load more'
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  /*自定义样式*/
  /*边框样式*/
  $border-style = 1px solid #ccc
  //翻转动画时间
  $animate-time = all ease-in-out .5s
  /*前面文字区域*/
  .loading-style1
    .loading-wrapper
      display: block
      position: relative
      margin: 0 auto
      width: 150px
      height: 50px
      text-align: center
      line-height: 50px
      text-transform: capitalize
      color: #aaa
      .loading-left
        position: absolute
        left: 0
        top: 0
        width: 25%
        height: 50%
        border-top: $border-style
        border-left: $border-style
        transition: $animate-time
      .loading-right
        position: absolute
        right: 0
        bottom: 0
        width: 25%
        height: 50%
        border-bottom: $border-style
        border-right: $border-style
        transition: $animate-time
      &:hover
        .loading-left
          width: 100%
          height: 100%
        .loading-right
          width: 100%
          height: 100%
  /*格式校正*/
</style>
