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
		}
	]
})
