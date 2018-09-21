<template>
  <div class="section-title">
    <div class="t-title">
      <div class="t-cn">{{cname}}</div>
      <div class="t-en">{{ename}}</div>
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
.section-title
  clear: both
  .t-title
    text-align: center
    padding: 10px 0
    .t-cn
      font-size: 30px
    .t-en
      font-size: 20px
      text-transform: capitalize
/*格式纠正*/
</style>
