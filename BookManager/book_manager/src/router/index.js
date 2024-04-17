import VueRouter from "vue-router";

// 引入组件
import login from "@/pages/login.vue";
import registered from "@/pages/registered .vue";
import index from '@/pages/index.vue'

//路由组件
const router = new VueRouter({
	routes: [
		{
			path: "/login",
			component: login,
			name: 'login',
			meta: {
				title: '登录'
			}
		},
		{
			path: "/registered",
			component: registered,
			name: 'register',
			meta: {
				title: '注册'
			}
		},
		{
			path: '/index',
			component: index,
			name: 'index',
			meta: {
				title: '主页'
			}
		}
	]
})

// 路由守卫
router.afterEach((to) => {
	document.title = to.meta.title || 'book_manager';
})

export default router;
