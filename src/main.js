// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
 
Vue.config.productionTip = false
 
import 'font-awesome/css/font-awesome.min.css'
 
import ElementUI from 'element-ui'
import './assets/theme/element-#2A5F95/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios);
Vue.use(ElementUI)
 


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


