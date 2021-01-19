import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Antd)
const router = new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
