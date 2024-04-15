// 该文件用于创建Vuex中最为核心的store
// 引入vue
import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)
//准备actions-用于响应组件中的动作
const actions = {
    // increment(context, v) {
    // 	console.log('vuex 中的actions被调用了', context, v)
    // 	context.commit('increment', v)
    // },
    // decrement(context, v) {
    // 	console.log('vuex 中的actions被调用了', context, v)
    // 	context.commit('decrement', v)
    // },
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
}
//准备mutations-用于操作数据(state)
const mutations = {
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
    add_person(state, v) {
        state.personList.unshift(v)
    }
}
//准备state-用于存储数据
const state = {
    sum: 0,
    personList: [
        {id: '001', name: 'mirage'}
    ]
}
// 准备getters-用于将state中的数据进行加工
const getters = {
    bigsum(state) {
        return state.sum * 50
    }
}

// 创建store并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})


