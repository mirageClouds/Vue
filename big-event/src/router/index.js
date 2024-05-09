import VueRouter from 'vue-router'
import store from "@/store";
import {Message} from 'element-ui';

const router = new VueRouter({
	routes: [
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login'),
		},
		{
			path: '/',
			component: () => import('@/views/login')
		},
		{
			path: '/index',
			name: 'index',
			component: () => import('@/views/home'),
			redirect: '/home',
			meta: {title: '首页'},
			children: [
				{
					path: '/home',
					name: 'home',
					component: () => import('@/views/home/home.vue'),
					meta: {
						Authentication: true
					}
				},
				{
					path: '/article/category',
					name: 'category',
					component: () => import('@/views/article/category.vue'),
					meta: {
						title: '文章分类',
						Authentication: true
					}
				},
				{
					path: '/article/manage',
					name: 'manage',
					component: () => import('@/views/article/manage.vue'),
					meta: {
						title: '文章管理',
						Authentication: true
					}
				},
				{
					path: '/user/info',
					name: 'userInfo',
					component: () => import('@/views/user/info.vue'),
					meta: {
						title: '基本资料',
						Authentication: true
					}
				},
				{
					path: '/user/avatar',
					name: 'userAvatar',
					component: () => import('@/views/user/avatar.vue'),
					meta: {
						title: '更换头像',
						Authentication: true
					}
				},
				{
					path: '/user/resetPassword',
					name: 'userResetPassword',
					component: () => import('@/views/user/resetPassword.vue'),
					meta: {
						title: '重置密码',
						Authentication: true
					}
				}
			]
		}
	]
})

router.beforeEach((to, from, next) => {
	if (to.meta.Authentication) {
		if (localStorage.getItem("token")) {
			let nav = to.matched
			store.commit("setNav", nav);
			next();
		} else {
			next('/')
			Message.error('登录已过期，请重新登录')
		}
	} else {
		next()
	}
})


export default router
