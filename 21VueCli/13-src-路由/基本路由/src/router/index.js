//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import home from "@/pages/home.vue"
import about from "@/pages/about.vue";
// 创建一个路由器并暴露
export default new VueRouter({
	routes: [
		{
			path: "/home",
			component: home,
		},
		{
			path: "/about",
			component: about
		}
	]
})
