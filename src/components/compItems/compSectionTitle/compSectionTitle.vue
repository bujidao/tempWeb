<template>
  <div class="compSectionTitle">
    <div class="t-container">
      <div class="t-comp-wrapper">
        <Style1></Style1>
      </div>
      <div class="t-comp-wrapper">
        <Style2></Style2>
      </div>
      <div class="t-comp-wrapper">
        <Style3></Style3>
      </div>
      <div class="t-comp-wrapper">
        <Style4></Style4>
      </div>
      <div class="t-comp-wrapper">
        <Style5></Style5>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
import Style1 from './styles/style1/demo.vue'
import Style2 from './styles/style2/demo.vue'
import Style3 from './styles/style3/demo.vue'
import Style4 from './styles/style4/demo.vue'
import Style5 from './styles/style5/demo.vue'

export default {
  data () {
    return {
      msg: 'i am demo'
    }
  },
  components: {
    Style1,
    Style2,
    Style3,
    Style4,
    Style5
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
  .compSectionTitle
    .t-comp-wrapper:nth-child(2n+1)
      background: #ecf0f9
/*格式纠正*/
</style>
