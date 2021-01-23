import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'

Vue.use(Vuex)

const handleStore = store => {
  if (localStorage.store) {
    store.replaceState(JSON.parse(localStorage.store)) // 初始化store
  }
  store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
  })
}

export default new Vuex.Store({
  modules: {
    app
  },
  plugins: [handleStore]
})