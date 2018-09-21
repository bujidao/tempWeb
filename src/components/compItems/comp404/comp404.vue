<template>
  <div class="header">
    <!--{{msg}}-->
    <Style1></Style1>
  </div>
</template>

<script>
  import Style1 from './styles/style1/demo'
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
