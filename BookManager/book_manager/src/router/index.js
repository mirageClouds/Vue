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
				title: '主页',
				showInbreadcrumb: true,
				isAuth: true
			},
			children: [
				{
					path: 'bookInfo',
					component: bookInfo,
					name: 'bookInfo',
					meta: {
						title: '图书信息管理',
						showInbreadcrumb: true,
						isAuth: true
					}
				},
				{
					path: 'bookType',
					component: bookType,
					name: 'bookType',
					meta: {
						title: '图书类别管理',
						showInbreadcrumb: true,
						isAuth: true
					}
				},
				{
					path: 'borrowInfo',
					component: borrowInfo,
					name: 'borrowInfo',
					meta: {
						title: '借阅信息管理',
						showInbreadcrumb: true,
						isAuth: true
					}
				},
				{
					path: 'userManage',
					component: userManage,
					name: 'userManage',
					meta: {
						title: '用户管理',
						showInbreadcrumb: true,
						isAuth: true
					}
				},
				{
					path: 'updatePassword',
					component: updatePassword,
					name: 'updatePassword',
					meta: {
						title: '修改密码',
						showInbreadcrumb: true,
						isAuth: true
					}
				}
			]
		},
		//匹配空路由，重定向到登陆页面
		{
			path: '/',
			component: login,
			meta: {
				showInbreadcrumb: false
			}
		}
	]
})

// 路由守卫

// 前端路由守卫
router.beforeEach((to, from, next) => {
	if (to.meta.isAuth) {
		if (localStorage.getItem("token") === localStorage.getItem("cache-token")) {
			next()
		} else {
			alert('登录失效，请重新登录')
			next('/')
		}
	} else {
		console.log(to)
		next()
	}
})

router.afterEach((to) => {
	document.title = to.meta.title || 'book_manager';
})

// 解决重复跳转同一个路由报错问题 https://juejin.cn/post/7080806127952199693
//VueRouter:这个是导入路由使用的变量
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}


export default router;
