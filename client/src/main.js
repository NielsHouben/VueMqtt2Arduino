import Vue from 'vue'
import App from './App.vue'
import router from './router'

import mqtt from './api/mqtt'
Vue.prototype.$mqtt = mqtt

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
