import Vue from 'vue'
import App from './App.vue'

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由组件
import VueRouter from 'vue-router'
// 引入路由器
import router from "./router";
// 引入混入
import {mixin} from './mixin';
// 引入axios
import axios from 'axios';
// 使用混入
Vue.mixin(mixin)

// 使用组件
Vue.use(ElementUI);
Vue.use(VueRouter)

// 全局注册axios
Vue.prototype.$axios = axios;


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	router
}).$mount('#app')
