import Vue from 'vue'
import App from './App.vue'
import Prism from '@/assets/highlight/prism'
import '@/assets/highlight/prism.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),Prism
}).$mount('#app')
