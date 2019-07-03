
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入原型链的扩展
import './util/categray';

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
