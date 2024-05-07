import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

// 在VueRouter上配置路由跳转，在router中的index.js中加上以下代码，注意加在use之前
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
	return routerPush.call(this, location).catch(() => {
	})
};

Vue.use(VueRouter)


new Vue({
	render: h => h(App),
	store,
	router,
	beforeCreate() {
		Vue.prototype.$bus = this
	}
}).$mount('#app')
