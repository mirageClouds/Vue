#  问题

##	匹配空路由

* router/index.js

  ```js
  //匹配空路由，重定向到登陆页面
  {
      path: '/',
      component: login,
      meta: {
         showInbreadcrumb: false
      }
  }
  ```

## 路由跳转重复报错

* router/index.js

  ```js
  // 解决重复跳转同一个路由报错问题 https://juejin.cn/post/7080806127952199693
  //VueRouter:这个是导入路由使用的变量
  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
      return originalPush.call(this, location).catch(err => err)
  }
  ```

## 实现面包屑导航

* router/index.js：给需要面包屑导航的路由meta中添加showInbreadcrumb

* 面包屑导航的组件中

  ```js
  computed: {
    // matched实现面包屑导航 https://juejin.cn/post/7011869963975655461
    breadcrumb() {
      let matchedArr = this.$route.matched.filter((item) => {
            return item.meta.showInbreadcrumb
          }
      )
      console.log(matchedArr);
      return matchedArr;
    },
  }
  ```

## 实现菜单的default-active

* :default-active='$route.path'

## 解决朴素按钮点击一次后持续激活的方式

* 给其他位置获取焦点事件，使其朴素按钮脱离焦点事件

### 菜单中的路由跳转

* ~~~
  <el-menu-item index="路由跳转的位置"></el-menu-item>
  ~~~

## 全局注册axios

* main.js

  * ```js
    // 引入axios
    import axios from 'axios';
    
    // 全局注册axios
    Vue.prototype.$axios = axios;
    ```

## 全局路由守卫中跳转

* next('跳转的位置')
