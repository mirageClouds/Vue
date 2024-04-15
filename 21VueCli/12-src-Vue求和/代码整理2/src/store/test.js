// 分类模块化
export default {
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
