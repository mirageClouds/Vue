import VueRouter from "vue-router";

// 引入组件
import login from "@/pages/login.vue";
import registered from "@/pages/registered .vue";
import index from '@/pages/index.vue'
import bookInfo from "@/pages/book-info.vue";
import bookType from "@/pages/book-type.vue";
import borrowInfo from "@/pages/borrow-info.vue";
import updatePassword from "@/pages/update-password.vue";
import userManage from "@/pages/user-manage.vue";

//路由组件
const router = new VueRouter({
	routes: [
		{
			path: "/",
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
			},
			children: [
				{
					path: 'bookInfo',
					component: bookInfo,
					name: 'bookInfo',
					meta: {
						title: '图书信息管理'
					}
				},
				{
					path: 'bookType',
					component: bookType,
					name: 'bookType',
					meta: {
						title: '图书类别管理'
					}
				},
				{
					path: 'borrowInfo',
					component: borrowInfo,
					name: 'borrowInfo',
					meta: {
						title: '借阅信息管理'
					}
				},
				{
					path: 'userManage',
					component: userManage,
					name: 'userManage',
					meta: {
						title: '用户管理'
					}
				},
				{
					path: 'updatePassword',
					component: updatePassword,
					name: 'updatePassword',
					meta: {
						title: '修改密码'
					}
				}
			]
		}
	]
})

// 路由守卫
router.afterEach((to) => {
	document.title = to.meta.title || 'book_manager';
})

export default router;
