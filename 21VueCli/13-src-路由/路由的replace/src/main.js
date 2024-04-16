/*
* 该文件是整个项目的入口文件
* */
//引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from "@/App.vue";
// 引入vue路由
import VueRouter from "vue-router";
// 引入路由器
import route from "./router";
// 关闭vue的开发者提示
Vue.config.productionTip = false
Vue.use(VueRouter);

// 创建Vue的实例对象
new Vue({
	render: h => h(App),
	router: route
}).$mount('#app')


