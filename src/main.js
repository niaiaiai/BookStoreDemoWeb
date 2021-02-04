import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import Antd from 'ant-design-vue';
import store from './stores'
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Antd)



new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
