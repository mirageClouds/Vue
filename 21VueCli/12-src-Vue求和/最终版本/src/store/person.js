import axios from "axios";

export default {
    namespaced: true,
    actions: {
        add_person_liu(context, v) {
            if (v.name.indexOf('刘') === 0) {
                context.commit('add_person', v)
            } else {
                console.log('添加的人必须姓刘')
            }
        },
        add_person_server(context, v) {
            console.log(v)
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${v.lon}&lon=${v.lat}&appid=e62440bf8d0563991fcb82d8e6151541`).then(
                res => {
                    context.commit('add_person_weather', {id: res.data.id, name: res.data.name, sys: res.data.sys})
                },
                error => {
                    console.log(error.message)
                }
            )
        }
    },
    mutations: {
        add_person(state, v) {
            state.personList.unshift(v)
        },
        add_person_weather(state, v) {
            state.weather.unshift(v)
        }
    },
    state: {
        personList: [
            {id: '001', name: 'mirage'}
        ],
        weather: [
            {id: '001', name: 'mirage'}
        ]
    },
    getters: {
        firest_person(state) {
            return state.personList[0].name
        }
    }
}