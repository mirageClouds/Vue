import VueRouter from "vue-router";

export const router = new VueRouter({
	routes: [
		{
			path: "/login",
			component: login,
			name: 'login',
			meta: []
		}
	]
})
