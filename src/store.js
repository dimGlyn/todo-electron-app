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
		fetchAllTodos: async ({ commit }) => {
			const results = await axios.get(`${baseUrl}/todos`);
			commit('setAllTodos', results.data);
		},
		addTodo: async ({ commit }, title) => commit('addTodo', title),
		editTodo: async ({ commit }, {id, newTitle}) => commit('editTodo', {id, newTitle}),
		deleteTodo: async ({ commit }, id) => commit('deleteTodo', id),
	},
	mutations: {
		setAllTodos: async (state, todos) => state.todos = todos,
		addTodo: async (state, title) => {
			state.todos.unshift({
				title,
				id: state.todos.length + 1
			})
		},
		editTodo: async (state, {id, newTitle}) => {
			const index = state.todos.findIndex(todo => +todo.id === +id);
			state.todos[index].title = newTitle;
		},
		deleteTodo: async (state, id) => {
			state.todos = state.todos.filter(todo => todo.id !== id)
		}
	},
});
