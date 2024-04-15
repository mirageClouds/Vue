// 该文件用于创建Vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 分类模块化
const testOption = {
    // 开启命名空间，使mapxxx写法可以找到
    namespaced: true,
    actions: {
        incrementOdd(context, v) {
            console.log('vuex 中的actions被调用了', context, v)
            if (context.state.sum % 2) {
                context.commit('incrementOdd', v)
            }
        },
        incrementWait(context, v) {
            console.log('vuex 中的actions被调用了', context, v)
            setTimeout(() => context.commit('incrementWait', v), 500)
        },
    },
    mutations: {
        increment(state, v) {
            console.log('vuex 中的mutations被调用了', state, v)
            state.sum += v
            console.log(state.sum)
        },
        decrement(state, v) {
            console.log('vuex 中的mutations被调用了', state, v)
            state.sum -= v
            console.log(state.sum)
        },
        incrementOdd(state, v) {
            console.log('vuex 中的mutations被调用了', state, v)
            state.sum += v
            console.log(state.sum)
        },
        incrementWait(state, v) {
            console.log('vuex 中的mutations被调用了', state, v)
            state.sum += v
            console.log(state.sum)
        },
    },
    state: {
        sum: 0,
    },
    getters: {
        bigsum(state) {
            return state.sum * 50
        }
    }
}

const personOption = {
    namespaced: true,
    actions: {
        add_person_liu(context, v) {
            if (v.name.indexOf('刘') === 0) {
                context.commit('add_person', v)
            } else {
                console.log('添加的人必须姓刘')
            }
        }
    },
    mutations: {
        add_person(state, v) {
            state.personList.unshift(v)
        }
    },
    state: {
        personList: [
            {id: '001', name: 'mirage'}
        ]
    },
    getters: {
        firest_person(state) {
            return state.personList[0].name
        }
    }
}

// 创建store并暴露store
export default new Vuex.Store({
    modules: {
        testOption, personOption
    }
})


