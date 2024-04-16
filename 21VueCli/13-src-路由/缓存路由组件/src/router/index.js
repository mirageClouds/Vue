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
							path: 'detail/:id/:title',
							component: detail,
							// props的第一种写法，值为对象，该对象中所有的key-value都会以props的形式传给detail组件
							// props: { title: 'Detail' }
							// props的第二种写法，值为布尔值，当布尔值为真，就会把该路由组件收到的所有params参数，以props的形式传给detail组件
							// props: true
							// props的第三种写法，值为函数，
							props($route) {
								return {
									id: $route.params.id,
									title: $route.params.title,
								}
							}
							// 结构赋值式写法，语义化不好不推荐
							/*props({params: {id, title}}) {
								return {
									id, title
								}
							}*/
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
//
