// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./styles/reset-ui.scss"
import resource from './resource'

import base from './base'
import { bus } from './bus'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$static = 'http://localhost:8080/static/'
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  created() {


  }
})
