<template>
  <div class="section-title">
    <div class="container">
      <Style1></Style1>
    </div>
  </div>
</template>

<script>
import Style1 from './styles/style1/demo.vue'

export default {
  data () {
    return {
      msg: 'i am demo'
    }
  },
  components: {
    Style1
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
