// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import {http} from '@/common/http'

import '@/assets/css/index.css'
import '@/assets/css/iconfont/iconfont.css'
import '@/common/componentsInit'

Vue.use(elementUI);
Vue.config.productionTip = false
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
