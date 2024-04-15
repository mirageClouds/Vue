export default {
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