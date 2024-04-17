//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import home from "@/pages/home.vue"
import about from "@/pages/about.vue";
import news from "@/pages/news.vue";
import message from "@/pages/message.vue";
import detail from "@/pages/detail.vue";
// 创建一个路由器并暴露
const router = new VueRouter({
	routes: [
		// 多级路由
		{
			path: "/home",
			component: home,
			children: [
				{
					path: "news",
					component: news,
					meta: {
						title: "新闻",
					},
					// beforeEnter: (to, from, next) => {
					// 	// console.log(to, from, next)
					// 	if (to.meta.isAuth) {
					// 		if (localStorage.getItem("name") === 'mirage') {
					// 			next()
					// 		} else {
					// 			alert('名字错误，无权限访问')
					// 		}
					// 	} else {
					// 		next()
					// 	}
					// }
				},
				{
					path: "message",
					component: message,
					children: [
						{
							name: 'detail',
							path: 'detail/:id/:title',
							component: detail,
							props($route) {
								return {
									id: $route.params.id,
									title: $route.params.title,
								}
							},
							// 路由的元数据
							meta: {
								isAuth: true,
								title: '详情'
							}
						}
					],
					meta: {
						title: '信息'
					}
				}
			],
			meta: {
				title: '主页'
			}
		},
		// 一级路由
		{
			path: "/about",
			component: about,
			meta: {title: '关于', isAuth: true},
		}
	]
})
//全局前置路由守卫-初始化的时候调用，每次路由切换前调用
// router.beforeEach((to, from, next) => {
// 	if (to.meta.isAuth) {
// 		if (localStorage.getItem("name") === 'mirage') {
// 			next()
// 		} else {
// 			alert('名字错误，无权限访问')
// 		}
// 	} else {
// 		next()
// 	}
// })
//全局后置路由守卫-初始化的时候调用，每次路由切换后调用
// router.afterEach((to, from) => {
// 	// console.log('后', to, from)
// 	document.title = to.meta.title || 'vue_test'
// })
export default router;
