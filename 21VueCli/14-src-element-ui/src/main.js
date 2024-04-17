/*
* 该文件是整个项目的入口文件
* */
//引入Vue
import Vue from 'vue'
// 引入App组件，它是所有组件的父组件
import App from "@/App.vue";
// 完整引入element-ui
// 引入element-ui
// import 'element-ui/lib/theme-chalk/index.css';
// 应用element-ui
// Vue.use(ElementUI);
// 按需引入element-ui
import {Button, Row} from 'element-ui'

Vue.component(Button.name, Button)
Vue.component(Row.name, Row)

// 关闭vue的开发者提示
Vue.config.productionTip = false

// 创建Vue的实例对象
new Vue({
	render: h => h(App),
}).$mount('#app')


