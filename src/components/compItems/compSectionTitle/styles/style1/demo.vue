<template>
  <div class="title-style1">
    <div class="t-title">
      <h3 class="t-cn">{{cname}}</h3>
      <p class="t-en">{{ename}}</p>
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
.title-style1
  clear: both
  width: 100%
  .t-title
    text-align: center
    padding-bottom: 20px
    .t-cn
      font-size: 32px
      font-weight: 700
    .t-en
      font-size: 14px
      text-transform: capitalize
/*格式纠正*/
</style>
