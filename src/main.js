
import Vue from 'vue'
import {router} from './router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import store from './store'


Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')

