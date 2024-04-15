// 该文件用于创建Vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 引入test和person
import testOption from './test'
import personOption from './person'
// 使用vuex
Vue.use(Vuex)

// 创建store并暴露store
export default new Vuex.Store({
    modules: {
        testOption, personOption
    }
})


