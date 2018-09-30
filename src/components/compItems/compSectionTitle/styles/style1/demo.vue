<template>
  <div class="title-style1">
    <div class="t-title">
      <h3 class="t-title-main">{{tname}}</h3>
      <p class="t-title-sub">{{tsubname}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'i am demo'
    }
  },
  props: {
    tname: {
      type: '',
      default: '标题样式一'
    },
    tsubname: {
      type: '',
      default: 'lorem ipsum dolor sit amet'
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
$tcolor = #fff
.title-style1
  clear: both
  width: 100%
  .t-title
    text-align: center
    padding-bottom: 20px
    .t-title-main
      font-size: 32px
      font-weight: 700
      color: $tcolor
    .t-title-sub
      font-size: 14px
      text-transform: capitalize
      color: $tcolor
/*格式纠正*/
</style>
