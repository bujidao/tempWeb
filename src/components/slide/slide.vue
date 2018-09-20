<template>
  <div class="header">
    <b-tabs tabs>
      <b-tab title="Header" @click="toHeader"></b-tab>
      <b-tab title="SowingMap" @click="toSowingMap"></b-tab>
      <b-tab title="Gallery" @click="toGallery"></b-tab>
      <b-tab title="Contact" active @click="toContact"></b-tab>
    </b-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'i am demo'
    }
  },
  mounted () {

  },
  methods: {
    toHeader () {
      this.$router.push({name: 'compHeader'})
    },
    toContact () {
      this.$router.push({name: 'compContact'})
    },
    toSowingMap () {
      this.$router.push({name: 'compSowingMap'})
    },
    toGallery () {
      this.$router.push({name: 'compGallery'})
    }
  }
}
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">

</style>
