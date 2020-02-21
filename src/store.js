import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state: {
		number: 1
	},
	getters: {
		getNumber: function(state) {
			return state.number
		}
	},
	mutations: {
		increment: function(state, payload) {
			state.number += payload
		}
	},
	actions: {
		increment (context, payload) {
			setTimeout(function() { context.commit('increment', payload) }, 2000);
		}
	}
})