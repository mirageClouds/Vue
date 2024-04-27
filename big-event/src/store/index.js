import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
	token: ''
}
const actions = {}
const mutations = {
	setToken(state, token) {
		state.token = token
	}
}

export default new Vuex.Store({
	store, actions, mutations
})
