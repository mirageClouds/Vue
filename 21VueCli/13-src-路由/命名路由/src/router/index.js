//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import home from "@/pages/home.vue"
import about from "@/pages/about.vue";
import news from "@/pages/news.vue";
import message from "@/pages/message.vue";
import detail from "@/pages/detail.vue";
// 创建一个路由器并暴露
export default new VueRouter({
	routes: [
		// 多级路由
		{
			path: "/home",
			component: home,
			children: [
				{
					path: "news",
					component: news
				},
				{
					path: "message",
					component: message,
					children: [
						{
							name: 'detail',
							path: 'detail',
							component: detail
						}
					]
				}
			]
		},
		// 一级路由
		{
			path: "/about",
			component: about
		}
	]
})
