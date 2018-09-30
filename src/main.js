// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import BaiduMap from 'vue-baidu-map'

// 引入jQuery
// npm install jquery --s
import 'jquery'

// 引入vue-bootstrap
// npm install bootstrap-vue --s
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-vue/dist/bootstrap-vue.js'

// 引入awesome图标并全局注册
// npm install vue-awesome --s
import Icon from 'vue-awesome/components/Icon'
import 'vue-awesome/icons'

// 引入粒子特效
// npm install vue-particles --save-dev
import VueParticles from 'vue-particles'

Vue.use(BootstrapVue)
Vue.component('v-icon', Icon)
Vue.use(VueParticles)
// Vue.use(BaiduMap, {
//   ak: ''
// })

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
