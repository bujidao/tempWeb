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
  props: [
    {
      'cname': {
        type: '',
        default: '标题'
      },
      'ename': {
        type: '',
        default: 'title'
      }
    }
  ]
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
