<template>
  <div class="compContact">
    <div class="t-comp-wrapper">
      <Style1></Style1>
    </div>
    <div class="t-comp-wrapper">
      <Style2></Style2>
    </div>
  </div>
</template>

<script>
import Style1 from './styles/style1/demo'
import Style2 from './styles/style2/demo'

export default {
  data () {
    return {
      msg: 'i am compContact'
    }
  },
  components: {
    Style1,
    Style2
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .compContact
    .t-comp-wrapper:nth-child(2n+1)
      background: #ecf0f9
  /*格式纠正*/
</style>
