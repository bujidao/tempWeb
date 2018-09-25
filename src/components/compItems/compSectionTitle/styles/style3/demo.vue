<template>
  <div class="title-style3">
    <div class="t-title">
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
.title-style3
  clear: both
  width: 100%
  .t-title
    text-align: center
    margin-bottom: 20px
    padding: 0 50px
    border-bottom: 1px solid #ddd
    .t-n
      display: inline-block
      padding: 0 10%
      border-bottom: 5px solid #ddd
      .t-cn
        font-size: 32px
        font-weight: 700
      .t-en
        font-size: 14px
        text-transform: capitalize
/*格式纠正*/
</style>
