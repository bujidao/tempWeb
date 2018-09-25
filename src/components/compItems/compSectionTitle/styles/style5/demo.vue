<template>
  <div class="title-style4">
    <div class="t-title">
      <div class="t-n">
        <h3 class="t-cn">{{cname}}</h3>
        <div class="t-more">
          <a href="">{{ename}}</a>
        </div>
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
  /*标题下划线颜色*/
  $t-title-bb1px = #eee
.title-style4
  clear: both
  width: 100%
  .t-title
    text-align: center
    margin-bottom: 20px
    .t-n
      overflow: hidden
      border-bottom: 1px solid $t-title-bb1px
      .t-cn
        display: inline-block
        float: left
        font-size: 13px
        font-weight: 700
      .t-more
        display: inline-block
        float: right
        font-size: 11px
        text-transform: capitalize
/*格式纠正*/
</style>
