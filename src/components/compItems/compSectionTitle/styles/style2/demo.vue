<template>
  <div class="title-style2">
    <div class="t-title">
      <h3 class="t-n t-title-main">{{tname}}</h3>
      <p class="t-n t-title-sub">{{tsubname}}</p>
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
      default: '标题样式二'
    },
    tsubname: {
      type: '',
      default: 'lorem ipsum dolor sit amet'
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.title-style2
  clear: both
  width: 100%
  .t-title
    text-align: left
    margin-bottom: 20px
    padding: 0 50px
    border-bottom: 1px solid #ddd
    .t-n
      display: inline-block
    .t-title-main
      font-size: 32px
      font-weight: 700
    .t-title-sub
      font-size: 14px
      text-transform: capitalize
/*格式纠正*/
</style>
