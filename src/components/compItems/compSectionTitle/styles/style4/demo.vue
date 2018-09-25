<template>
  <div class="title-style4">
    <div class="t-title">
      <div class="t-title-line"></div>
      <div class="t-n">
        <h3 class="t-cn">{{cname}}</h3>
        <p class="t-en">{{ename}}</p>
      </div>
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
    cname: {
      type: '',
      default: '标题名字'
    },
    ename: {
      type: '',
      default: 'lorem ipsum dolor sit amet'
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  /*可修改部分*/
  /*模块背景色*/
  $t-model-bg = #fff
.title-style4
  clear: both
  width: 100%
  .t-title
    text-align: center
    margin-bottom: 20px
    .t-title-line
      position: relative
      top: 37px
      border-bottom: 1px solid #ddd
    .t-n
      position: relative
      height: 75px
      display: inline-block
      padding: 0 10%
      background: $t-model-bg
      .t-cn
        font-size: 36px
        font-weight: 700
      .t-en
        font-size: 14px
        text-transform: capitalize
/*格式纠正*/
</style>
