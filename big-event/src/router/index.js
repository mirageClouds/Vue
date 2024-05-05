import VueRouter from 'vue-router'

export default new VueRouter({
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
			children: [
				{
					path: '/home',
					name: 'home',
					component: () => import('@/views/home/home.vue')
				},
				{
					path: '/article/category',
					name: 'category',
					component: () => import('@/views/article/category.vue')
				},
				{
					path: '/article/manage',
					name: 'manage',
					component: () => import('@/views/article/manage.vue')
				},
				{
					path: '/user/info',
					name: 'userInfo',
					component: () => import('@/views/user/info.vue')
				},
				{
					path: '/user/avatar',
					name: 'userAvatar',
					component: () => import('@/views/user/avatar.vue')
				},
				{
					path: '/user/resetPassword',
					name: 'userResetPassword',
					component: () => import('@/views/user/resetPassword.vue')
				}
			]
		}
	]
})
