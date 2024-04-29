import Vue from 'vue';
import Vuex from 'vuex';
import {loginApi} from "@/api/user";
Vue.use(Vuex);

const store = {
	token: ''
}
const actions = {
	login(context,v) {
		loginApi(v.username, v.password).then(
			res=>{
				console.log(res)
				context.commit('setToken', res.data);
			}
		)
	}
}
const mutations = {
	setToken(state, token) {
		state.token = token
	}
}

export default new Vuex.Store({
	store, actions, mutations
})
