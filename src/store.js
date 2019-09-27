import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import {
	async
} from 'q';

Vue.use(Vuex);

const baseUrl = 'https://jsonplaceholder.typicode.com';

export default new Vuex.Store({
	state: {
		todos: [{
			title: 'ela',
		}],
	},
	getters: {
		allTodos: state => state.todos,
	},
	actions: {
		fetchAllTodos: async ({
			commit
		}) => {
			const results = await axios.get(`${baseUrl}/todos`);
			commit('setAllTodos', results.data);
		},
		addTodo: async ({ commit }, title) => commit('addTodo', title),
	},
	mutations: {
		setAllTodos: async (state, todos) => state.todos = todos,
		addTodo: async (state, title) => {
			state.todos.unshift({
				title
			})
		}
	},
});
