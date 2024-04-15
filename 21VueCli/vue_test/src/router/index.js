//该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import person from "../components/person.vue";
import test from "../components/test.vue";
// 创建一个路由器并暴露
export default new VueRouter({
    routes: [
        {
            path: "/person",
            component: person
        },
        {
            path: "/test",
            component: test
        }
    ]
})