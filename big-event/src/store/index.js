import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

const store = {
	token: '',
	nav: []
}
const actions = {}
const mutations = {
	setToken(state, token) {
		state.token = token
	},
	setNav(state, nav) {
		state.nav = nav
	}
}

export default new Vuex.Store({
	store, actions, mutations
})
