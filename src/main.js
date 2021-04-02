import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  el: '#app',
  render: h => h(require(App)),
}).$mount('#app')
