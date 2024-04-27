import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import elementUI from 'element-ui'
import store from './store'
import axios from 'axios'
import router from './router'

Vue.config.productionTip = false
Vue.use(elementUI)
Vue.use(VueRouter)
Vue.prototype.$axios = axios;

new Vue({
	render: h => h(App),
	store,
	router
}).$mount('#app')
