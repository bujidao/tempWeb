<template>
  <div class="header">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <img src="./logo.png" alt="">
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-nav-item @click="goBootsrtap">
            Bootstrap
          </b-nav-item>
          <b-nav-item>
            <router-link :to="{name: 'ElementUI'}">
              ElementUI
            </router-link>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
          <b-nav-item-dropdown text="Lang" right type="light">
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      msg: 'i aaaaaaam header'
    }
  },
  methods: {
    goBootsrtap () {
      this.$router.push({name: 'Bootsrtap'})
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    .navbar
      height: 80px
      .navbar-brand
        img
          height: 40px
    .navbar-dark
      a
        color: rgba(255, 255, 255, 0.7)
  /*格式纠正*/
</style>
