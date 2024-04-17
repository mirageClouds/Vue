import Vue from 'vue'
import App from './App.vue'

// 引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入路由组件
import VueRouter from 'vue-router'


// 使用组件
Vue.use(ElementUI);
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
	render: h => h(App),
	route
}).$mount('#app')
