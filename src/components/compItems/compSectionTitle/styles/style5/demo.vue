<template>
  <div class="title-style5">
    <div class="t-title">
      <div class="t-n">
        <h3 class="t-title-main">{{tname}}</h3>
        <div class="t-title-more">
          <a href="">{{tmore}}</a>
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
    tname: {
      type: '',
      default: '标题样式五'
    },
    tmore: {
      type: '',
      default: 'lorem ipsum dolor sit amet'
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  /*可修改部分*/
  /*标题下划线颜色*/
  $t-title-bb1px = #ddd
.title-style5
  clear: both
  width: 100%
  .t-title
    text-align: center
    margin-bottom: 20px
    .t-n
      overflow: hidden
      border-bottom: 1px solid $t-title-bb1px
      .t-title-main
        display: inline-block
        float: left
        font-size: 13px
        font-weight: 700
      .t-title-more
        display: inline-block
        float: right
        font-size: 11px
        text-transform: capitalize
/*格式纠正*/
</style>
